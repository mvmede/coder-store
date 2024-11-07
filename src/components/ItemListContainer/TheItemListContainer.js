import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Produtos</h2>
            <ItemList />

        </div>
    );
};

export default ItemListContainer;
