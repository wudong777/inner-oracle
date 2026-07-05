import { journalEntries, products } from "@/lib/data";

export async function sanityFetch<T>(query: string, fallback: T): Promise<T> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

  if (!projectId) {
    return fallback;
  }

  const encoded = encodeURIComponent(query);
  const url = `https://${projectId}.api.sanity.io/v2024-07-01/data/query/${dataset}?query=${encoded}`;
  const response = await fetch(url, { next: { revalidate: 120 } });

  if (!response.ok) {
    return fallback;
  }

  const json = await response.json();
  return json.result as T;
}

export function getProductContent() {
  return sanityFetch("*[_type == 'product']", products);
}

export function getJournalContent() {
  return sanityFetch("*[_type == 'journal'] | order(date desc)", journalEntries);
}
