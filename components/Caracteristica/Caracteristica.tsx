import React from "react";
import Link from "next/link";

interface CaracteristicaProps {
  readonly caracteristica: string;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
  const encoded = encodeURIComponent(caracteristica);

  return (
    <Link href={`/caracteristicas/${encoded}`} className="block">
      <div className="p-2 border rounded-lg shadow hover:shadow-md transition-transform hover:scale-105  bg-white">
        <p className="text-center text-black text-lg font-medium">{caracteristica}</p>
      </div>
    </Link>
  );
}
