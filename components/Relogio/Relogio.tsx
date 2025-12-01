"use client";

import React, { useEffect, useState } from "react";

export default function Relogio() {
  const [hora, setHora] = useState<string>(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const tick = () => setHora(new Date().toLocaleTimeString());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono">{hora}</span>;
}
