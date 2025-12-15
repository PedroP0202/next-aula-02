'use client'

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Product } from '@/models/interfaces'
import ProdutoCard from '@/components/ProdutoCard/ProdutoCard'
import { Skeleton } from "@/components/ui/skeleton"

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductPage() {
  const { data, error, isLoading } = useSWR<Product[]>(
    'https://deisishop.pythonanywhere.com/products',
    fetcher
  );

  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [filteredData, setFilteredData] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([]);


  const [isStudent, setIsStudent] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [message, setMessage] = useState('');

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (data || error) {
      setShowLoading(false);
    }
  }, [data, error]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  
  const buy = () => {
    fetch("https://deisishop.pythonanywhere.com/buy", {
        method: "POST",
        body: JSON.stringify({
            products: cart.map(product => product.id),
            name: "",
            student: isStudent, 
            coupon: coupon      
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then((response) => {
        setCart([]); 
       
        setMessage(`Compra com sucesso! Referência: ${response.reference}, Total: ${response.totalCost}€`);
    })
    .catch(() => {
        console.log("error ao comprar");
        setMessage("Erro ao realizar a compra.");
    });
  }


  const totalCost = cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2);

  useEffect(() => {
    if (data) {
      let result = data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      if (sortOrder === 'price-asc') result.sort((a, b) => Number(a.price) - Number(b.price));
      else if (sortOrder === 'price-desc') result.sort((a, b) => Number(b.price) - Number(a.price));
      else if (sortOrder === 'name-asc') result.sort((a, b) => a.title.localeCompare(b.title));
      else if (sortOrder === 'name-desc') result.sort((a, b) => b.title.localeCompare(a.title));
      
      setFilteredData(result);
    }
  }, [search, data, sortOrder]);

  if (error) return <div>Falha ao carregar</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Loja DEISI</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow p-2 bg-white border border-gray-300 rounded-md shadow-sm"
        />
        <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-white"
        >
            <option value="price-asc">Preço: Menor para Maior</option>
            <option value="price-desc">Preço: Maior para Menor</option>
            <option value="name-asc">Nome: A a Z</option>
            <option value="name-desc">Nome: Z a A</option>
        </select>
      </div>

      <h2 className="text-xl font-bold mb-4">Produtos Disponíveis</h2>
      {showLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-48 w-full rounded-xl" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredData.map((product) => (
            <ProdutoCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
            />
          ))}
        </div>
      )}

     
      <div className="mt-10 p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <h2 className="text-2xl font-bold mb-4">🛒 Carrinho de Compras</h2>
          
          {cart.length === 0 && !message ? (
              <p className="text-gray-500">O seu carrinho está vazio.</p>
          ) : (
              <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {cart.map((product, index) => (
                          <ProdutoCard 
                              key={`${product.id}-${index}`} 
                              product={product} 
                              isOnCart={true} 
                              removeFromCart={removeFromCart} 
                          />
                      ))}
                  </div>
                  
                  <div className="mt-8 border-t pt-4 flex flex-col items-end gap-4">
                      
                     
                      <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id="student-check"
                            checked={isStudent}
                            onChange={(e) => setIsStudent(e.target.checked)}
                            className="w-5 h-5"
                          />
                          <label htmlFor="student-check" className="font-medium">Sou estudante DEISI</label>
                      </div>

                      <div className="flex items-center gap-2">
                          <label htmlFor="coupon-input" className="font-medium">Cupão:</label>
                          <input 
                            type="text" 
                            id="coupon-input"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Insira o seu cupão"
                            className="p-2 border rounded shadow-sm"
                          />
                      </div>

                      <h3 className="text-2xl font-bold">Total (sem descontos): {totalCost} €</h3>
                      
                   
                      <button 
                        onClick={buy} 
                        className="mt-2 bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg"
                      >
                        Comprar
                      </button>

                      {message && (
                          <div className="mt-4 p-4 bg-blue-100 text-blue-900 rounded-md font-semibold border border-blue-200">
                              {message}
                          </div>
                      )}
                  </div>
              </>
          )}
      </div>
    </div>
  );
}