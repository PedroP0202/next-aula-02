const DEFAULT_API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://deisishop.pythonanywhere.com';

export type ApiProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  price?: number;
  rating?: { rate?: number; count?: number };
};

async function fetchJson<T>(path: string) {
  const url = `${DEFAULT_API_BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status} - ${res.statusText}`);
  const data = (await res.json()) as T;
  return data;
}

export async function getProducts(): Promise<ApiProduct[] | null> {
  try {
    return await fetchJson<ApiProduct[]>('/products/');
  } catch (err) {
    console.warn('getProducts failed:', err);
    return null;
  }
}

export async function getProductById(id: string | number): Promise<ApiProduct | null> {
  try {
    // The OpenAPI doesn't list a product-by-id endpoint, so try to fetch /products/ and filter
    const products = await getProducts();
    if (!products) return null;
    const numericId = Number(id);
    return products.find((p) => p.id === numericId) ?? null;
  } catch (err) {
    console.warn('getProductById failed:', err);
    return null;
  }
}

export async function getCategories(): Promise<string[] | null> {
  try {
    return await fetchJson<string[]>('/categories/');
  } catch (err) {
    console.warn('getCategories failed:', err);
    return null;
  }
}

export async function buyProducts(payload: any): Promise<any> {
  try {
    const url = `${DEFAULT_API_BASE}/buy/`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.warn('buyProducts failed:', err);
    return null;
  }
}

export default { getProducts, getProductById, getCategories, buyProducts };
