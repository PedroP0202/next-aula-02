import Link from "next/link";
import React from "react";
import tecnologias from '@/data/tecnologias.json';
import TecnologiaDetailsCard from '@/components/TecnologiaCard/TecnologiaDetailsCard';

interface TecnologiaPageProps {
  params: { tecnologia: string };
}

export default async function TecnologiaPage({ params }: TecnologiaPageProps) {
  const { tecnologia: tecnologiaParam } = await params;
  const index = Number(tecnologiaParam);
  const tecnologiaObj = tecnologias[index];

  if (!tecnologiaObj) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div>
          <h2 className="text-xl font-semibold">Tecnologia não encontrada</h2>
          <div className="mt-4">
            <Link href="/Tecnologias" className="px-4 py-2 bg-blue-600 text-white rounded">Voltar</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-2xl">
        <TecnologiaDetailsCard title={tecnologiaObj.title} description={tecnologiaObj.description} image={tecnologiaObj.image} />
        <div className="flex justify-center">
          <Link href="/Tecnologias" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Voltar às tecnologias
          </Link>
        </div>
      </div>
    </main>
  );
}

