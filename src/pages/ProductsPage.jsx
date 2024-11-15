// src/pages/ProductsPage.jsx
import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const ProductsPage = () => {
  return (
    <div>
      <main>
        <h1>Produtos</h1>
        <p>Confira nossos produtos.</p>

        <ItemListContainer />
      </main>
    </div>
  );
};

export default ProductsPage;
