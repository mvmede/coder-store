// src/pages/ProductsPage.jsx
import React from "react";
import ItemListContainerGeneral from "../components/ItemListContainer/ItemListContainer";

const ProductsPage = () => {
  return (
    <div>
      <main>
        <h1>Produtos</h1>
        <p>Confira nossos produtos.</p>
        <ItemListContainerGeneral />
      </main>
    </div>
  );
};

export default ProductsPage;
