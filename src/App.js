import React from 'react';
import Header from './components/Header/header';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/contador/ClickCounter';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className='flex-1 text-center pt-10 font-sans'>
        <ItemListContainer greeting="Bem-vindo à CoderStore!" />

        <h1>Contador de Cliques</h1>
        <ItemCount />
      </div>
    </div>
  );
}

export default App;

