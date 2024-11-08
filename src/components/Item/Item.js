import React from 'react';
import ItemCount from '../contador/ClickCounter';
import { Link } from 'react-router-dom';

const Item = ({ id, title, description, price, pictureUrl }) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    return (

        <div className="item-card border w-full bg-gray-200 p-4 rounded-md">
            <Link to={`/item/${id}`}>
                <img src={pictureUrl} alt={title} className="w-full h-auto rounded-md" />
            </Link >
            <div className="mt-4">
                <Link to={`/item/${id}`}>
                    <p className="text-xl font-semibold text-teal-600 hover:text-blue-700">{title}</p>
                    <p className="mt-2 text-gray-700">{description}</p>
                    <p className="mt-2 text-lg font-bold">{formattedPrice}</p>
                </Link >
                <ItemCount id={id} />
            </div>

        </div >

    );
};

export default Item;