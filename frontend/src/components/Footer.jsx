// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className='bg-avaiThird border-t border-gray-200 mt-auto'>
        <div className='text-center max-w-5xl mx-auto px-4 py-4 text-white'>
          Estatísticas gerais do Avai FC &copy; {new Date().getFullYear()} Herik.Dev
        </div>
    </footer>
  );
}

export default Footer;
