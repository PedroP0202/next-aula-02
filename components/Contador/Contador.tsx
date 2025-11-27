"use client";

import { use, useEffect, useState } from "react";
import { button } from "@heroui/theme";
import React from "react";



export default function Contador() {
  const [valor, setValor] = useState(0);
  const [historico, setHistorico] = useState([]);
  useEffect(() => {
    const v = localStorage.getItem("contador_valor");
    const h = localStorage.getItem("contador_historico");

    if (v) setValor(Number(v));
    if (h) setHistorico(JSON.parse(h));
  }, []);

    useEffect(() => {
        localStorage.setItem("contador_valor", valor);
        const novoHistorico = [...historico, valor];
        setHistorico(novoHistorico);
        localStorage.setItem("contador_historico", JSON.stringify(novoHistorico));
    }, [valor]);

    function aumentar() {
    if (valor < 10) {
      setValor(valor + 1);
    }
  }

  function diminuir() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  function reset() {
    setValor(0);
  }

  function cor() {
    if (valor >= 0 && valor <= 3) return "red";
    if (valor >= 4 && valor <= 7) return "orange";
    return "green";
  }

return (
    <div>
      <h2 style={{ color: cor(), fontSize: "40px" }}>{valor}</h2>

      <button  onClick={diminuir} className="p-3 bg-black rounded-xl">-</button>
      <button onClick={aumentar} style={{ marginLeft: 8  }} className="p-3 bg-black rounded-xl" >+</button>
      <button onClick={reset} style={{ marginLeft: 8 }} className="p-3 bg-black rounded-xl">Reset</button>

      <h3 className=" = text-black">Histórico:</h3>
      <ul className=" = text-black" >
        {historico.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}