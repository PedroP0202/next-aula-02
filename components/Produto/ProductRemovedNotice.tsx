"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props { readonly id: string }

export default function ProductRemovedNotice({ id }: Props) {
  const [removed, setRemoved] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setRemoved(window.localStorage.getItem(`prod_removed_${id}`) === 'true');
  }, [id]);

  if (!removed) return null;

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded mt-4">
      <p className="text-red-700 font-semibold">Este produto foi removido.</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => router.push('/produtos')}>Voltar para Produtos</button>
    </div>
  );
}
