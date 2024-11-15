import React, { createContext, useState, useContext } from "react";

// Criando o contexto
const CartContext = createContext();

// Criando o provedor para o contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        // Se já estiver, apenas incrementa a quantidade
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Se não estiver, adiciona o item com a quantidade inicial de 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCart = () => useContext(CartContext);
