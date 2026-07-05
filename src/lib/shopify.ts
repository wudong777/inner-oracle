import { products } from "@/lib/data";

type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  price: string;
};

type ShopifyNode = {
  id: string;
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    return products.map((product) => ({
      id: product.id,
      title: product.name,
      handle: product.id,
      price: product.price,
    }));
  }

  const response = await fetch(`https://${domain}/api/2024-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query: `{
        products(first: 20) {
          nodes {
            id
            title
            handle
            priceRange { minVariantPrice { amount currencyCode } }
          }
        }
      }`,
    }),
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return getShopifyProductsFallback();
  }

  const json = (await response.json()) as {
    data: { products: { nodes: ShopifyNode[] } };
  };
  return json.data.products.nodes.map((node) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    price: `${node.priceRange.minVariantPrice.currencyCode} ${node.priceRange.minVariantPrice.amount}`,
  }));
}

export function getCheckoutUrl(productId: string) {
  const base = process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL;
  if (!base) {
    return `/product/${productId}?cart=preview`;
  }
  return `${base}${base.includes("?") ? "&" : "?"}product=${productId}`;
}

function getShopifyProductsFallback() {
  return products.map((product) => ({
    id: product.id,
    title: product.name,
    handle: product.id,
    price: product.price,
  }));
}
