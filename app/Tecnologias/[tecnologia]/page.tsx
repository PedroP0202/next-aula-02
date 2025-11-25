"use client"
import Link from "next/link";
import tecnologias from "@/data/tecnologias.json";
import { useParams } from "next/navigation";

export default function TecnologiaPage() {

 const params =  useParams()
const index = Number( params.tecnologia)


  return (
    <>
      <h2>Tecnologia {tecnologias[index].title}</h2>
      <Link href="/tecnologias">Voltar</Link>
    </>
   
  )
}

