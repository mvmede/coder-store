import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importando o contexto

const mockItems = [
    { id: 1, title: 'Cadeira Office DT3 Diana V2 New Black Evolution', description: 'A cadeira de escritório Diana foi projetada para suportar longas horas de trabalho sentado, a fim de oferecer versatilidade, conveniência e bem estar.', price: 1179.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/1/11726-7154525.jpg' },
    { id: 2, title: 'Mouse Gamer Logitech G Pro 2, RGB, 32000DPI, 8 Botoes, Wireless, Branco', description: 'O Mouse Gamer Logitech G Pro 2 combina precisão extrema e leveza em um design sem fio premium, ideal para jogadores profissionais e entusiastas.', price: 719.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/1/910-0073013.jpg' },
    { id: 3, title: 'Monitor Gamer Cooler Master GM34-CWQ2, UWQHD, 0.5MS, 165Hz', description: 'Nossas telas curvas 1500R criam uma imersão tão poderosa que leva jogadores e espectadores direto para o centro da ação.', price: 4399.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/m/cmi-gm34-cwq2-br.jpg' },
    { id: 4, title: 'Headset Gamer Fantech Studio, Wireless, Drivers 50mm, Preto', description: 'O Headset Gamer Fantech Studio é um modelo wireless projetado para proporcionar uma experiência de áudio imersiva e sem fio para gamers.', price: 249.99, pictureUrl: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/w/h/whg03-bk12641612135.jpg' },
];

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = () => {
            const foundItem = mockItems.find(item => item.id.toString() === id);
            setItem(foundItem);
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return (
            <div className="flex flex-col justify-center items-center h-screen gap-12 bg-gray-100">
                <p className="text-9xl text-center text-gray-600">404</p>
                <p className="text-xl text-center text-gray-600">Infelizmente a CoderStore não encontrou esse produto...</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        const productItem = {
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.pictureUrl,
        };
        addToCart(productItem);
    };

    return (
        <div className="pt-16 bg-white">
            <div className="min-h-screen justify-center md:max-w-[1920px] py-8 px-6 sm:px-48 mx-auto">
                <div className="flex items-start pb-2 mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-white bg-teal-600 rounded-2xl px-4 py-1 w-auto h-auto mr-4"
                    >
                        &larr; Voltar
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='border rounded-2xl bg-white flex justify-center'>
                        <img src={item.pictureUrl} alt={item.title} className="w-full max-w-md h-auto rounded-lg " />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                        <p className="text-gray-900 mb-4">{item.description}</p>
                        <p className="text-2xl text-green-600 mb-4">
                            <a className='font-regular'>Preço:</a> <a className='font-bold'>R${item.price.toFixed(2).replace('.', ',')}</a>
                        </p>
                        <div className='flex flex-col gap-3 pt-4 md:flex-row'>
                            <button
                                onClick={handleAddToCart}
                                className="bg-teal-600 w-full md:w-52 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Comprar
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="bg-cyan-700 w-full md:w-52 hover:bg-cyan-800 text-white font-regular py-2 px-4 rounded"
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
