import React from 'react';
import produtosData from '@/data/produtos.json';
import ProductDetailActions from '@/components/Produto/ProductDetailActions';
import ProductRemovedNotice from '@/components/Produto/ProductRemovedNotice';

interface ProdutoPageProps { params: { produto: string } }

export default function ProdutoPage({ params }: ProdutoPageProps) {
  const { produto } = params;
  const produtoObj = produtosData.find(p => p.id === produto);

  if (!produtoObj) {
    return (
      <main className="p-6">
        <h2 className="text-xl font-semibold">Produto não encontrado</h2>
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="w-48 h-48 object-contain mx-auto mb-4 bg-white border rounded" aria-hidden="true" />
        <h1 className="text-3xl text-black font-bold">{produtoObj.title}</h1>
        <p className="text-gray-700 mt-2">{produtoObj.description}</p>
        <p className="text-sm text-gray-500 mt-2">Categoria: {produtoObj.category}</p>

        <div className="mt-4">
          <ProductDetailActions id={produtoObj.id} />
        </div>
        <ProductRemovedNotice id={produtoObj.id} />
      </div>
    </main>
  );
}
