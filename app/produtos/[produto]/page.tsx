// import React from 'react';
// import produtosData from '@/data/produtos.json';
// import ProductDetailActions from '@/components/Produto/ProductDetailActions';
// import ProductRemovedNotice from '@/components/Produto/ProductRemovedNotice';
// import { getProductById } from '@/lib/api';

'use client'
import { useParams } from 'next/navigation' 
import useSWR from 'swr'
import { Product } from '@/models/interfaces'
import ProdutoDetalhe from '@/components/ProdutoDetalhe/ProdutoDetalhe'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then (res => res.json());

export default function ProdutoPage() {
  const params = useParams();
  const produto = params.produto;

const {data ,  error , isLoading} = useSWR<Product>(
  produto? `https://deisishop.pythonanywhere.com/products/${produto}` : null, fetcher

);

if (error) return <div>Erro ao carregar produto</div>;
if (isLoading || !data) return <div className='p-10 text-center'>A carregar detalhes...</div>;
return (
  <div className="container mx-auto p-8">
    <div>
      <Link href="/produtos" className='text-blue-500 hover:underline'>&larr; Voltar a lista </Link>
    </div>
<ProdutoDetalhe product={data} />
  </div>
);
}


// interface ProdutoPageProps { params: { produto: string } }

// export default async function ProdutoPage({ params }: ProdutoPageProps) {
//   const { produto } = params;
//   // try API first
//   const apiProduct = await getProductById(produto);
//   const produtoObj = apiProduct ?? produtosData.find(p => p.id === produto || String(p.id) === produto);

//   if (!produtoObj) {
//     return (
//       <main className="p-6">
//         <h2 className="text-xl font-semibold">Produto não encontrado</h2>
//       </main>
//     );
//   }
  

//   return (
//     <main className="p-6">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
//         {produtoObj.image ? (
//           <img src={produtoObj.image} alt={produtoObj.title} className="w-48 h-48 object-contain mx-auto mb-4 bg-white border rounded" />
//         ) : (
//           <div className="w-48 h-48 object-contain mx-auto mb-4 bg-white border rounded" aria-hidden="true" />
//         )}
//         <h1 className="text-3xl text-black font-bold">{produtoObj.title}</h1>
//         <p className="text-gray-700 mt-2">{produtoObj.description}</p>
//         <p className="text-sm text-gray-500 mt-2">Categoria: {produtoObj.category}</p>

//         <div className="mt-4">
//           <ProductDetailActions id={String(produtoObj.id)} />
//         </div>
//         <ProductRemovedNotice id={String(produtoObj.id)} />
//       </div>
//     </main>
//   );
// }
