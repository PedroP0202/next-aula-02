import React from 'react';
import ProdutosList from '@/components/Produto/ProdutosList';
import { getProducts } from '@/lib/api';
import produtosData from '@/data/produtos.json';

export default async function ProdutosPage() {
  const apiProducts = await getProducts();
  const products = apiProducts ?? produtosData;

  return (
    <main className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Produtos - DEISIshop</h2>
      <ProdutosList products={products} />
    </main>
  );
}
