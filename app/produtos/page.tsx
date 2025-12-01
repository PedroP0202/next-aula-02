import React from 'react';
import ProdutosList from '@/components/Produto/ProdutosList';

export default function ProdutosPage() {
  return (
    <main className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Produtos - DEISIshop</h2>
      <ProdutosList />
    </main>
  );
}
