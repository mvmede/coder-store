import React from 'react';
import ItemCount from '../contador/ClickCounter';

const Item = ({ id, title, description, price, pictureUrl }) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    return (
        <div className="item h-[500px] p-4 border rounded-lg shadow-lg">
            <img src={pictureUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-xl font-bold text-primary mt-2">{formattedPrice}</p>
            <ItemCount />
        </div>
    );
};

export default Item;
