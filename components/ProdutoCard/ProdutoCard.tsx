import { Product } from '@/models/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface ProdutoCardProps {
    product: Product;
    addToCard?: (p: Product) => void;
    removeFromCard?: (p: Product) => void;
    isOnCart?: boolean;
}
export default function ProdutoCard({ product, addToCart, removeFromCart, isOnCart = false }: ProdutoCardProps) {
    const host = 'https://deisishop.pythonanywhere.com/';
    const imageUrl = product.image.startsWith('http') ? product.image : host + product.image;

    return (
        <div className="border p-6 rounded-lg shadow-md bg-white min-h-[400px] flex flex-col">
            {/* DESAFIO:
               Adicione aqui:
               1. A tag <Image /> do Next.js (use width={200} e height={200} para teste)
               2. Um título <h2> com o product.title
               
               3. Um parágrafo <p> com o preço
            */}

            <Image
                src={imageUrl}
                alt={product.title}
                width={250}
                height={250}
                className="w-full h-64 object-cover mb-4 rounded-md"
                priority
            />

            <h2 className="text-lg font-bold line-clamp-1" title={product.title}>{product.title}</h2>
            <div className="flex-grow"></div>
            <p className="text-gray-600 font-semibold mb-2">{product.price} €</p>

            {!isOnCart ? (
                
                <div className="flex gap-2">
                    <button
                        onClick={() => addToCart && addToCart(product)}
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                        Adicionar
                    </button>
                    <Link
                        href={`/produtos/${product.id}`}
                        className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
                    >
                        + Info
                    </Link>
                </div>
            ) : (
                // Se ESTIVER no carrinho: Botão Remover
                <button
                    onClick={() => removeFromCart && removeFromCart(product)}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                    Remover do Carrinho
                </button>
            )}
        </div>
    )

}