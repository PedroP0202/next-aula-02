"use client"
import  TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from "@/data/tecnologias.json"  ;
import Link from "next/link";

export default function TecnologiasPage() {
  return (
    <>
      <h2>Tecnologias</h2>

      <div className="flex flex-wrap gap-4">


        {tecnologias.map((tecnologia, index) => (
           

            <Link href={`/tecnologias/${index}`}> 
            <TecnologiaCard
            title={tecnologia.title} 
            image={tecnologia.image}
            description={tecnologia.description} 
            />
            </Link>
            
          
        ))}
      </div>
    </>
  );
}
