"use client";

import React, { useEffect, useState } from "react";
import produtosData from '@/data/produtos.json';
import ProductCard from './ProductCard';

export default function ProdutosList({ products }: { products?: any[] }) {
  type Produto = { id: string | number; title: string; description: string; image: string; category: string };

  const [produtos, setProdutos] = useState<Produto[]>(() => {
    if (products && products.length) return products as Produto[];
    return [...produtosData] as Produto[];
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setProdutos(prev => prev.filter(p => window.localStorage.getItem(`prod_removed_${p.id}`) !== 'true'));
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {produtos.map((p) => (
        <ProductCard key={String(p.id)} id={String(p.id)} title={p.title} image={p.image} category={p.category} />
      ))}
    </div>
  );
}
