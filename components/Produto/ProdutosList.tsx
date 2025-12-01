"use client";

import React, { useEffect, useState } from "react";
import produtosData from '@/data/produtos.json';
import ProductCard from './ProductCard';

export default function ProdutosList() {
  type Produto = { id: string; title: string; description: string; image: string; category: string };

  const [produtos, setProdutos] = useState<Produto[]>(() => [...produtosData]);

  useEffect(() => {
    setProdutos(prev => prev.filter(p => localStorage.getItem(`prod_removed_${p.id}`) !== 'true'));
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {produtos.map((p) => (
        <ProductCard key={p.id} id={p.id} title={p.title} image={p.image} category={p.category} />
      ))}
    </div>
  );
}
