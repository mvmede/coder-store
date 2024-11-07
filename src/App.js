import React from 'react';
import Header from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/TheItemListContainer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className='flex-1 text-center pt-10 font-sans'>
        <h1>"Bem-vindo à CoderStore!" </h1>
      </div>
      <ItemListContainer />
    </div>
  );
}

export default App;

