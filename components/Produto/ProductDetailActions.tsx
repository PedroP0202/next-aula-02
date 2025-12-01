"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

interface Props { readonly id: string }

export default function ProductDetailActions({ id }: Props) {
  const router = useRouter();
  const [featured, setFeatured] = useState<boolean>(() => {
    if (globalThis.window === undefined) return false;
    return localStorage.getItem(`prod_featured_${id}`) === 'true';
  });

  function toggleFeatured() {
    setFeatured(prev => {
      const next = !prev;
      localStorage.setItem(`prod_featured_${id}`, String(next));
      return next;
    });
  }

  function removeProduct() {
    localStorage.setItem(`prod_removed_${id}`, 'true');
    router.push('/produtos');
  }

  return (
    <div className="flex gap-3">
      <button onClick={toggleFeatured} className={`px-3 py-1 rounded ${featured ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
        {featured ? 'Apresentado' : 'Apresentar'}
      </button>
      <button onClick={() => { if (confirm('Remover este produto?')) removeProduct(); }} className="px-3 py-1 bg-red-600 text-white rounded">
        Remover
      </button>
    </div>
  );
}
