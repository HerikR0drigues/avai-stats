import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvaiHeader = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://avai-stats-production.up.railway.app/api/players');
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

  if (loading) {
    return (
      <div className='flex justify-center align-middle md:w-full rounded-lg bg-white font-sofia p-6 shadow-lg'>
        <div className='align-middle justify-center animate-spin rounded-full h-8 w-8 border-t-2 border-blue-900'></div>
      </div>
    );
  }

  const categorizedPlayers = {
    atacantes: players.filter(player => player.position === 'F'),
    meias: players.filter(player => player.position === 'M'),
    defensores: players.filter(player => player.position === 'D'),
    goleiros: players.filter(player => player.position === 'G')
  };

  const renderPlayerCard = (player) => {
    return isMobile ? (
      <div key={player.name} className="flex items-center p-2 bg-secondaryBackground shadow-md rounded-lg mb-2">
        <img
          src={player.pictureURL}
          alt={player.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <p className="font-bold">{player.name}</p>
        </div>
        <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
          {player.jerseyNumber}
        </div>
      </div>
    ) : (
      <div key={player.name} className="player-card mx-1 mb-1 p-2 bg-secondaryBackground shadow-md rounded-lg text-center w-32 h-36 relative overflow-hidden">
        <div className="relative">
          <div className="absolute bottom-0 right-4 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {player.jerseyNumber}
          </div>
          <img
            src={player.pictureURL}
            alt={player.name}
            className="w-16 h-16 rounded-full object-cover mx-auto mt-2"
          />
        </div>
        <div className="bg-gray-200 w-full absolute bottom-0 left-0">
          <p className="mt-1 font-bold">{player.name}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-md p-6 mx-auto justify-center font-sofia">
        <h2 className="font-sofia text-center text-2xl font-bold text-black mb-6">Jogadores Avaí FC 2024</h2>
        <div className='font-sofia justify-center' id="todos-os-jogadores">
          
          {/* Atacantes */}
          <div id="atacantes" className="px-4 rounded-lg mb-4">
            <h3 className={`text-red-800 ${isMobile ? "pl-0" : "pl-4"} pb-4 text-center font-bold text-xl`}>Atacantes</h3>
            <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
              {categorizedPlayers.atacantes.map((player) => renderPlayerCard(player))}
            </div>
          </div>

          {/* Meias */}
          <div id="meias" className="px-4 rounded-lg mb-4">
            <h3 className={`text-green-600 ${isMobile ? "pl-0" : "pl-4"} pb-4 font-bold text-center text-xl`}>Meias</h3>
            <div className={isMobile ? "flex flex-col" : "flex flex-wrap justify-center"}>
              {categorizedPlayers.meias.map((player) => renderPlayerCard(player))}
            </div>
          </div>

          {/* Defensores */}
          <div id="defensores" className="px-4 rounded-lg mb-4">
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
          
        </div>
      </div>
    </>
  );
};

export default AvaiHeader;
