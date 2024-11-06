// AvaiHeader.jsx
import React from 'react';
import AvaiLogo from '../assets/avai-logo.png'; // Certifique-se de que o caminho para a logo está correto
import StadiumImage from '../assets/stadium-image.jpg'; // Certifique-se de que o caminho para a imagem do estádio está correto

function AvaiHeader() {
    return (
        <div className="w-full max-w-5xl rounded-lg shadow-md overflow-hidden relative flex items-center space-x-4 p-4">
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-95"
                style={{
                    backgroundImage: `url(${StadiumImage})`,
                }}
            />
            <div className="relative flex items-center space-x-4 p-4 rounded-lg z-10">
                <img src={AvaiLogo} alt="Logo do Avaí" className="w-20 h-24" />
                <h1 className="text-2xl font-bold text-white">Avaí FC</h1>
            </div>
        </div>
    );
}

export default AvaiHeader;
