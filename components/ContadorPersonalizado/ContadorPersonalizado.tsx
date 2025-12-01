"use client";

import React, { useEffect, useState } from "react";

interface Props {
  readonly title: string;
}

export default function ContadorPersonalizado({ title }: Props) {
  const key = `likes_${encodeURIComponent(title)}`;
  const [likes, setLikes] = useState<number>(() => {
    if (globalThis.window === undefined) return 0;
    const stored = globalThis.localStorage.getItem(key);
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem(key, String(likes));
  }, [likes, key]);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return (
    <button
      aria-label={`Curtir ${title}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }}
      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
    >
      <span aria-hidden="true">
        Gosto+
      </span>
      <span>{likes}</span>
    </button>
  );
}
