"use client";

import React, { useEffect, useState } from "react";
export default function Contador() {
  const [valor, setValor] = useState<number>(() => {
    // Avoid accessing localStorage during SSR / build time — only read on client
    if (typeof window === "undefined") return 0;
    const v = window.localStorage.getItem("contador_valor");
    return v ? Number(v) : 0;
  });

  const [historico, setHistorico] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    const h = window.localStorage.getItem("contador_historico");
    return h ? (JSON.parse(h) as number[]) : [];
  });
  useEffect(() => {
    // Only run on the client
    if (typeof window === "undefined") return;
    const v = window.localStorage.getItem("contador_valor");
    const h = window.localStorage.getItem("contador_historico");
    if (v) setValor(Number(v));
    if (h) setHistorico(JSON.parse(h));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("contador_valor", String(valor));
  }, [valor]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("contador_historico", JSON.stringify(historico));
  }, [historico]);

    function aumentar() {
      if (valor < 10) {
        const next = valor + 1;
        setValor(next);
        setHistorico((prev) => [...prev, next]);
      }
    }

  function diminuir() {
    if (valor > 0) {
      const next = valor - 1;
      setValor(next);
      setHistorico((prev) => [...prev, next]);
    }
  }

  function reset() {
    setValor(0);
    setHistorico((prev) => [...prev, 0]);
  }

  function cor() {
    if (valor <= 3) return "red";
    if (valor <= 7) return "orange";
    return "green";
  }

return (
    <div>
      <h2 style={{ color: cor(), fontSize: "40px" }}>{valor}</h2>

      <button onClick={diminuir} className="p-3 bg-black rounded-xl">-</button>
      <button onClick={aumentar} style={{ marginLeft: 8  }} className="p-3 bg-black rounded-xl" >+</button>
      <button onClick={reset} style={{ marginLeft: 8 }} className="p-3 bg-black rounded-xl">Reset</button>

      <h3 className="text-black">Histórico:</h3>
      <ul className="text-black">
        {historico.map((v, i) => (
          <li key={`${v}-${i}`}>{v}</li>
        ))}
      </ul>
    </div>
  );
}