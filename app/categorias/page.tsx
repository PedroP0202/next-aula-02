import React from 'react';
import categorias from '@/data/categorias.json';
import Link from 'next/link';

export default function CategoriasPage() {
  return (
    <main className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Categorias - DEISIshop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categorias.map((c) => (
          <Link key={c.title} href={`/categorias/${encodeURIComponent(c.title)}`}>
            <div className="p-4 text-center bg-white rounded shadow hover:scale-105 transition-transform">
              <img src={c.logo} alt={c.title} className="w-24 h-24 mx-auto object-contain mb-3" />
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="text-sm text-gray-500">{c.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
