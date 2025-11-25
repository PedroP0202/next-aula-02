import React from "react";
import Link from "next/link";

interface CaracteristicaProps {
  readonly caracteristica: string;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
  const encoded = encodeURIComponent(caracteristica);

  return (
    <Link href={`/caracteristicas/${encoded}`} className="block">
      <div className="p-4 border rounded-lg shadow hover:shadow-md transition-transform hover:scale-105 m-2 bg-white dark:bg-gray-800">
        <p className="text-center text-lg font-medium">{caracteristica}</p>
      </div>
    </Link>
  );
}
