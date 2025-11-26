"use client"
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from "@/data/tecnologias.json";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TecnologiasPage() {
const [conta, setConta] = useState(() => {
  const contaStorad = localStorage.getItem("conta")
  return contaStorad ? Number(contaStorad) : 0
})

function aumentarConta(){
  setConta(conta+1)
}

useEffect(()=>{
    console.log("Conta ++", conta)
    localStorage.setItem('conta',`${conta}`)
},[conta])

let coonta = 0
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
        <p className="bla">Adicionando gostos: {conta}</p>
        <button 
        className="bg-black   p-3 hover:text-black hover:bg-white   rounded-xl"
         onClick={() => setConta(conta+1)}>
          Gosto++
        </button>

        

      </div>
    </main>
  );
}
