import Link from "next/link";
import React from "react";

interface CaracteristicaPageProps {
  params: { caracteristica: string };
}

export default async function CaracteristicaPage({ params }: CaracteristicaPageProps) {
  const { caracteristica: raw } = await params;
  const caracteristica = decodeURIComponent(raw);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-3xl font-bold">{caracteristica}</h1>
        <p className="text-gray-600 dark:text-gray-300">Essa é uma breve descrição da característica: <strong>{caracteristica}</strong>.</p>

        <div className="flex justify-center">
          <Link href="/caracteristicas" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Voltar às características
          </Link>
        </div>
      </div>
    </main>
  );
}
