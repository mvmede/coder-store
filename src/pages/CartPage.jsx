import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 pt-24 min-h-screen p-4">
      <h1 className="text-2xl pb-8 text-center font-bold">
        Carrinho de Compras
      </h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex  justify-between p-4 bg-white mb-4 rounded"
              >
                <div className="flex items-center space-x-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gray-300 rounded" />
                  )}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: R${(item.price ?? 0).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="bg-red-500 text-white text-sm py-1 px-4 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover Item
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: R${total.toFixed(2)}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-yellow-800 text-white py-2 px-4 rounded"
              onClick={clearCart}
            >
              Limpar Carrinho
            </button>
            <Link to="/checkout">
              <button
                className={`bg-blue-700 text-white py-2 px-4 rounded ${
                  cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={cart.length === 0}
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
