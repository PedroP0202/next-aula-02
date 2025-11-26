"use client"
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from "@/data/tecnologias.json";
import Link from "next/link";

export default function TecnologiasPage() {
  return (
    <main className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Tecnologias</h2>

      <div className="flex flex-wrap gap-4">
        {tecnologias.map((tecnologia, index) => (
          <Link href={`/Tecnologias/${index}`} key={tecnologia.title}>
            <TecnologiaCard
              title={tecnologia.title}
              image={tecnologia.image}
              description={tecnologia.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
