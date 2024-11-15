// src/pages/HomePage.jsx
import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import BannerRotativo from "../components/bannerRotativo/banner";

const HomePage = () => {
  return (
    <div>
      <main>
        <div className="pb-20 min-h-screen">
          <br />
          <br />
          <div>
            <BannerRotativo />

            <ItemListContainer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
