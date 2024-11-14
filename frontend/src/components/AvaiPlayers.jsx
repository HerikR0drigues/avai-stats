import React, { useEffect, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import axios from 'axios';

const AvaiHeader = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar expansão/retração
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/players');
        setPlayers(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error("Erro ao buscar os jogadores:", error);
      }
    };

    fetchPlayers();

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Alterna o estado entre expandido e recolhido
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const categorizedPlayers = {
    atacantes: players.filter(player => player.position === 'F'),
    meias: players.filter(player => player.position === 'M'),
    defensores: players.filter(player => player.position === 'D'),
    goleiros: players.filter(player => player.position === 'G')
  };

  if (loading) {
    return (
      <div className='flex justify-center align-middle w-full rounded-lg bg-white font-sofia p-6 shadow-lg'>
        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-blue-900'></div>
      </div>
    );
  }

  const renderGeneralInfo = () => (
    <div className="flex flex-col items-center text-center bg-white rounded-lg p-0 px-4 mt-4">
      {/* Título de total de jogadores */}
      <div className="p-4 pt-0 mb-4">
        <p className="text-gray-800 font-bold text-2xl">Total de Jogadores: {players.length}</p>
      </div>
  
      {/* Seção de informações gerais de cada posição */}
      <div className="flex flex-col sm:flex-row w-full mb-4 sm:space-x-2 space-y-2 sm:space-y-0">
        <div className="w-full sm:w-1/4 py-2 border-y sm:border-x sm:border-y-0 rounded-3xl border-gray-300 hover:border-red-800 transition-colors cursor-pointer">
          <p className="text-gray-700 font-semibold text-lg">
            <span className="text-red-800">Atacantes: {categorizedPlayers.atacantes.length}</span>
          </p>
        </div>
  
        <div className="w-full sm:w-1/4 py-2 border-y sm:border-x sm:border-y-0 rounded-full border-gray-300 hover:border-green-600 transition-colors cursor-pointer">
          <p className="text-gray-700 font-semibold text-lg">
            <span className="text-green-600">Meias: {categorizedPlayers.meias.length}</span>
          </p>
        </div>
  
        <div className="w-full sm:w-1/4 py-2 border-y sm:border-x sm:border-y-0 rounded-3xl border-gray-300 hover:border-blue-600 transition-colors cursor-pointer">
          <p className="text-gray-700 font-semibold text-lg">
            <span className="text-blue-600">Defensores: {categorizedPlayers.defensores.length}</span>
          </p>
        </div>
  
        <div className="w-full sm:w-1/4 py-2 border-y sm:border-x sm:border-y-0 rounded-3xl border-gray-300 hover:border-yellow-400 transition-colors cursor-pointer">
          <p className="text-gray-700 font-semibold text-lg">
            <span className="text-yellow-500">Goleiros: {categorizedPlayers.goleiros.length}</span>
          </p>
        </div>
      </div>
  
      {/* Botão de expansão */}
      <div className="flex w-full justify-center p-2">
        <button
          onClick={toggleExpand}
          className="flex items-center justify-center bg-blue-600 text-white font-semibold text-xs py-1 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          <span>Mostrar todos os jogadores</span>
          <IoIosArrowDown className="ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
  
  


  // Renderiza o conteúdo detalhado quando expandido
  const renderDetailedInfo = () => {

    const renderPlayerCard = (player) => {
      return isMobile ? (
        <div key={player.name} className="text-md flex items-center p-2 bg-avaiSecondary shadow-md rounded-lg mb-2 border border-gray-200">
          <img
            src={player.pictureURL}
            alt={player.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <p className="font-extrabold text-avaiMain">{player.name}</p>
          </div>
          <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-2xl">
            {player.jerseyNumber}
          </div>
        </div>
      ) : (
        <div key={player.name} className="text-sm player-card mx-1 mb-1 p-2 bg-avaiSecondary shadow-md rounded-lg text-center w-24 h-32 relative overflow-hidden border border-gray-200">
          <div className="relative">
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {player.jerseyNumber}
            </div>
            <img
              src={player.pictureURL}
              alt={player.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mt-2"
            />
          </div>
          <div className="bg-avaiThird w-full absolute bottom-0 left-0">
            <p className="my-1 text-white font-bold">{player.name}</p>
          </div>
        </div>
      );
    };

    return (
      <>
        <div className="w-full bg-white mx-auto justify-center font-sofia">
          <div className='font-sofia justify-center' id="todos-os-jogadores">

            {/* Atacantes */}
            <div id="atacantes" className="px-4 pb-4 mb-4 border-b border-gray-300">
              <h3 className={`text-red-800 ${isMobile ? "pl-0" : "pl-4"} pb-4 text-center font-bold text-xl`}>Atacantes</h3>
              <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
                {categorizedPlayers.atacantes.map((player) => renderPlayerCard(player))}
              </div>
            </div>

            {/* Meias */}
            <div id="meias" className="px-4 pb-4 mb-4 border-b border-gray-300">
              <h3 className={`text-green-600 ${isMobile ? "pl-0" : "pl-4"} pb-4 font-bold text-center text-xl`}>Meias</h3>
              <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
                {categorizedPlayers.meias.map((player) => renderPlayerCard(player))}
              </div>
            </div>

            {/* Defensores */}
            <div id="defensores" className="px-4 pb-4 mb-4 border-b border-gray-300">
              <h3 className={`text-blue-600 ${isMobile ? "pl-0" : "pl-4"} pb-4 font-bold text-center text-xl`}>Defensores</h3>
              <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
                {categorizedPlayers.defensores.map((player) => renderPlayerCard(player))}
              </div>
            </div>

            {/* Goleiros */}
            <div id="goleiros" className="px-4 rounded-lg mb-4">
              <h3 className={`text-yellow-400 ${isMobile ? "pl-0" : "pl-4"} pb-4 font-bold text-center text-xl`}>Goleiros</h3>
              <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
                {categorizedPlayers.goleiros.map((player) => renderPlayerCard(player))}
              </div>
            </div>

            {/* Botão de expansão */}
            <div className="flex w-full justify-center p-2 ">
              <button
                onClick={toggleExpand}
                className="flex items-center justify-center bg-blue-600 text-white font-semibold text-xs py-1 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                <span>Recolher jogadores</span>
                <IoIosArrowUp className="ml-2 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="relative w-full bg-white rounded-lg shadow-md py-6 pb-0 mx-auto justify-center font-sofia border border-gray-300">
      {/* Botão para alternar entre expandido e recolhido */}
      <button onClick={toggleExpand} className="text-gray-600 text-2xl font-bold mb-4 absolute right-4 top-4">
        {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className='flex justify-center align-middle text-center font-sofia pb-6 text-2xl font-bold text-black mb-6 border-b border-gray-300'>
        <FaUsers className="mr-2 text-3xl text-avaiMain" />
        <h2>Plantel Avai FC 2024</h2>
      </div>

      {/* Renderiza informações gerais ou detalhadas com base no estado de expansão */}
      {isExpanded ? renderDetailedInfo() : renderGeneralInfo()}
    </div>
  );
};

export default AvaiHeader;
