import React from "react";

interface TecnologiaCardProps {
  title: string;
  image: string;
  description: string;
}

export default function TecnologiaCard(props :  TecnologiaCardProps) {
  return (
    <div className="w-40 h-40 bg-gray-100 p-4 m-2 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform">
     <h2>{props.title}</h2>
     <h3>{props.image}</h3>
      <h4 className="text-center font-semibold">{props.description}</h4>
      
    </div>
  );
}
