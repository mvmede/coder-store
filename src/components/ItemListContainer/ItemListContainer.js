import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { motion } from 'framer-motion';

const mockItems = [
    { id: 1, title: 'Cadeira Office DT3 Diana V2 New Black Evolution', description: 'A cadeira de escritório Diana foi projetada para suportar longas horas de trabalho sentado, a fim de oferecer versatilidade, conveniência e bem estar.', price: 1179.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/1/11726-7154525.jpg' },
    { id: 2, title: 'Mouse Gamer Logitech G Pro 2, RGB, 32000DPI, 8 Botoes, Wireless, Branco', description: 'O Mouse Gamer Logitech G Pro 2 combina precisão extrema e leveza em um design sem fio premium, ideal para jogadores profissionais e entusiastas.', price: 719.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/1/910-0073013.jpg' },
    { id: 3, title: 'Monitor Gamer Cooler Master GM34-CWQ2, UWQHD, 0.5MS, 165Hz', description: 'Nossas telas curvas 1500R criam uma imersão tão poderosa que leva jogadores e espectadores direto para o centro da ação.', price: 4399.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/m/cmi-gm34-cwq2-br.jpg' },
    { id: 4, title: 'Headset Gamer Fantech Studio, Wireless, Drivers 50mm, Preto', description: 'O Headset Gamer Fantech Studio é um modelo wireless projetado para proporcionar uma experiência de áudio imersiva e sem fio para gamers.', price: 249.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/w/h/whg03-bk12641612135.jpg' },
];

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (loading) {
            const progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        setItems(mockItems);
                        setLoading(false);
                        return 100;
                    }
                    return prev + 5;
                });
            }, 100);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-xl mb-4">Carregando CoderStore...</div>
                <div className="w-3/4 max-w-lg">
                    <div className="relative w-full h-4 bg-gray-200 rounded-full">
                        <div
                            style={{ width: `${progress}%` }}
                            className="h-full bg-teal-600 rounded-full transition-width duration-300"
                        ></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p className="text-center py-8 font-extrabold text-2xl uppercase">Produtos destaque CoderStore</p>
            <div className="item-list grid md:px-20 px-8 pb-20 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        <Item {...item} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
