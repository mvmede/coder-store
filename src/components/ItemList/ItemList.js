import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const mockItems = [
    { id: 1, title: 'Cadeira Office DT3 Diana V2 New Black Evolution', description: 'A cadeira de escritório Diana foi projetada para suportar longas horas de trabalho sentado, a fim de oferecer versatilidade, conveniência e bem estar.', price: 1179.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/1/11726-7154525.jpg' },

    { id: 2, title: 'Mouse Gamer Logitech G Pro 2, RGB, 32000DPI, 8 Botoes, Wireless, Branco', description: 'O Mouse Gamer Logitech G Pro 2 combina precisão extrema e leveza em um design sem fio premium, ideal para jogadores profissionais e entusiastas.', price: 719.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/1/910-0073013.jpg' },

    { id: 3, title: 'Monitor Gamer Cooler Master GM34-CWQ2, UWQHD, 0.5MS, 165Hz', description: 'Nossas telas curvas 1500R criam uma imersão tão poderosa que leva jogadores e espectadores direto para o centro da ação.', price: 4399.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/m/cmi-gm34-cwq2-br.jpg' },

    { id: 4, title: 'Headset Gamer Fantech Studio, Wireless, Drivers 50mm, Preto', description: 'O Headset Gamer Fantech Studio é um modelo wireless projetado para proporcionar uma experiência de áudio imersiva e sem fio para gamers.', price: 249.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/w/h/whg03-bk12641612135.jpg' },
];

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = () => {
            setLoading(true);
            setTimeout(() => {
                setItems(mockItems);
                setLoading(false);
            }, 2000);
        };

        fetchItems();
    }, []);

    if (loading) {
        return <div>Carregando produtos CoderStore...</div>;
    }

    return (
        <div className="item-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}

        </div>
    );
};

export default ItemList;
