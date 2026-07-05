export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "shopifyProductId", title: "Shopify Product ID", type: "string" },
    { name: "emotion", title: "Emotion", type: "string" },
    { name: "ritual", title: "Ritual Steps", type: "array", of: [{ type: "string" }] },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
  ],
};
