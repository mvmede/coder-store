import React, { useState } from 'react';

export default function ItemCount() {
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
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded"
                >
                    -
                </button>
                <span className="text-2xl">{count}</span>
                <button
                    onClick={increment}
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded"
                >
                    +
                </button>
            </div>
            <button
                onClick={resetCount}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
}
