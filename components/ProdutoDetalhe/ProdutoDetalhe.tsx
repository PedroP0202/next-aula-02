import { Product } from '@/models/interfaces'
import Image from 'next/image'

export default function ProdutoDetalhe({ product }: { product: Product }) {
    const host = 'https://deisishop.pythonanywhere.com';
    const imageUrl = host + product.image.startsWith('http')
?product.image
:host + product.image;

    return (
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
           
            <div className="md:w-1/2">
                <Image 
                    src={imageUrl} 
                    alt={product.title} 
                    width={500} 
                    height={500}
                    className="w-full h-auto object-contain rounded-lg border" 
                    priority
                />
            </div>

            
            <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit">
                    {product.category}
                </span>
                
                <p className="text-2xl font-semibold text-green-600">{product.price} €</p>
                
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                
               
                {product.rating && (
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                        <span>⭐ {product.rating.rate} / 5</span>
                        <span>({product.rating.count} avaliações)</span>
                    </div>
                )}
            </div>
        </div>
    )
}