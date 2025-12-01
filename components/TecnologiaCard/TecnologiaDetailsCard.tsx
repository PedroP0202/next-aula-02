"use client";

import React from "react";
import ContadorPersonalizado from "@/components/ContadorPersonalizado/ContadorPersonalizado";

interface TecnologiaDetailsCardProps {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
}

export default function TecnologiaDetailsCard({ title, description, image } : TecnologiaDetailsCardProps) {
  return (
    <div className="max-w-2xl w-full p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      {image && <div className="mb-3 text-sm text-gray-600">{image}</div>}
      <p className="text-gray-700 mb-6">{description}</p>

      <div className="flex items-center gap-4">
        <ContadorPersonalizado title={title} />
      </div>
    </div>
  );
}
