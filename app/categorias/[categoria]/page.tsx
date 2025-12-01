import React from 'react';
import produtos from '@/data/produtos.json';
import ProductCard from '@/components/Produto/ProductCard';

interface PageProps { params: { categoria: string } }

export default function CategoriaPage({ params }: PageProps) {
  const { categoria } = params;
  const decoded = decodeURIComponent(categoria);
  const produtosFiltered = produtos.filter(p => p.category === decoded);

  return (
    <main className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Categoria: {decoded}</h2>
      <div className="flex flex-wrap gap-4">
        {produtosFiltered.map(p => (
          <ProductCard key={p.id} id={p.id} title={p.title} image={p.image} category={p.category} />
        ))}
      </div>
    </main>
  );
}
