import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount({ id }) {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const resetCount = () => setCount(1);

    return (
        <div className="p-4 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                    onClick={decrement}
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                    -
                </button>
                <span className="text-2xl">{count}</span>
                <button
                    onClick={increment}
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                    +
                </button>
            </div>
            <Link to={`/item/${id}`}>
                <button
                    onClick={resetCount}
                    className="bg-teal-600 hover:bg-teal-700  text-white font-bold py-2 w-full rounded">
                    Comprar
                </button>
            </Link>
        </div>
    );
}
