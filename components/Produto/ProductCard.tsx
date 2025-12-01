"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContadorPersonalizado from '@/components/ContadorPersonalizado/ContadorPersonalizado';

interface ProdutoCardProps {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
}

export default function ProductCard({ id, title, image, category }: ProdutoCardProps) {
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (globalThis.window === undefined) return;
    setFeatured(localStorage.getItem(`prod_featured_${id}`) === 'true');
  }, [id]);
  return (
    <Link href={`/produtos/${id}`} className="block w-60">
      <div className="w-60 h-60 bg-white p-4 m-2 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform">
        <div className="w-32 h-32 object-contain mb-3 bg-white border rounded" aria-hidden="true" />
        <h2 className="text-black font-semibold">{title}</h2>
        <div className="text-sm text-gray-500">{category}</div>
        {featured && <div className="text-xs text-green-700 font-semibold mt-1">Destaque</div>}
        <div className="mt-2">
          <ContadorPersonalizado title={title} />
        </div>
      </div>
    </Link>
  );
}
