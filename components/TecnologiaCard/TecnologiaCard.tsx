import React from "react";

interface TecnologiaCardProps {
  readonly title: string;
  readonly image: string;
  readonly description: string;
}

export default function TecnologiaCard(props : TecnologiaCardProps) {
  return (
    <div className="w-55 h-55 bg-gray-100 p-4 m-2 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform">
     <h2 className=" text-black"  >{props.title}</h2>
     <h3 className="  text-black"  >{props.image}</h3>
      <h4 className=" p-3 text-center text-black font-semibold">{props.description}</h4>
      
    </div>
  );
}
