// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className='bg-avaiThird shadow-sm'>
      <div className='justify-between max-w-7xl mx-auto px-4 py-4 flex items-center'>
        <i className='text-white font-pixelfy text-3xl font-bold'>Herik<span className='text-spanHeader'>.dev</span></i>
        
        <div className='hidden md:flex flex-col items-center'>
          <h1 className='text-white text-2xl font-bold'>Estatísticas Avai FC</h1>
          <h2 className='text-white text-lg font-bold'>React + NodeJS + Tailwind</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
