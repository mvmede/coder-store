import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ItemCount({ item }) {
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (!item || !item.id || !item.price || !item.pictureUrl) {
            console.error("Item is not defined or missing required properties");
            return;
        }

        const itemToAdd = {
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.pictureUrl,
            quantity: count,
        };

        addToCart(itemToAdd);
    };

    return (
        <div className="p-4 text-center">

            {item && item.id ? (
                <>
                    <Link to={`/produto/${item.id}`} className="w-full">
                        <button
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 w-full rounded mb-2">
                            Ver Produto
                        </button>
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded w-full">
                        Adicionar ao carrinho
                    </button>
                </>
            ) : (
                <p className="text-red-500">Item não disponível</p>
            )}
        </div>
    );
}
