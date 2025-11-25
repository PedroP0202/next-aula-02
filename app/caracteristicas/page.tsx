import React from "react";
import Caracteristica from '@/components/Caracteristica/Caracteristica';

const caracteristicas = [
  'JSX: Sintaxe que mistura HTML e JavaScript',
  'Componentes: Funções que retornam JSX',
  'Roteamento automático e SSR/SSG',
  'Hooks: useState, useEffect, useMemo',
  'TypeScript: tipagem estática',
  'Otimizacao de imagens e performance',
  'API routes e middlewares',
];

export default function CaracteristicasPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Características do React e do Next.js</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {caracteristicas.map((c) => (
          <Caracteristica key={c} caracteristica={c} />
        ))}
      </section>
    </main>
  );
}
