import React, { useEffect, useState } from 'react';
import { IoIosStats } from "react-icons/io";
import axios from 'axios';

const StatsTemporada = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(' http://localhost:5000/api/statistics');
        setStatistics(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error('Erro ao buscar dados de estatísticas:', error);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center align-middle w-full rounded-lg bg-white font-sofia p-6 shadow-lg'>
        <div className='align-middle justify-center animate-spin rounded-full h-8 w-8 border-t-2 border-blue-900'></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full rounded-lg bg-white font-sofia shadow-lg border border-gray-300">
      <div className='flex pt-8 text-center align-middle justify-center border-b border-gray-300'>
        <IoIosStats className='text-3xl mr-2 text-avaiMain'/>
        <h2 className="text-center text-2xl font-bold text-black mb-6">Estatísticas do clube Serie B</h2> 
      </div>
      
      <div className='p-6'>
        {/* Resumo */}
        <div className=" mb-4 rounded-lg bg-avaiSecondary border border-gray-300 overflow-hidden">
          <div className='w-full px-4 py-1 flex bg-avaiThird'>
            <h3 className="text-start text-lg font-bold text-white">Resumo</h3>
          </div>
          <div className="px-4 py-2 gap-1 text-center text-avaiFourth font-semibold">
            <div className='flex justify-between'><span>Partidas:</span> <span className="font-bold">{statistics.matches}</span></div>
            <div className='flex justify-between'><span>Gols Marcados:</span> <span className="font-bold">{statistics.goalsScored}</span></div>
            <div className='flex justify-between'><span>Gols Sofridos:</span> <span className="font-bold">{statistics.goalsConceded}</span></div>
            <div className='flex justify-between'><span>Assistências:</span> <span className="font-bold">{statistics.assists}</span></div>
          </div>
        </div>

        {/* Ataque */}
        <div className=" mb-4 rounded-lg bg-avaiSecondary border border-gray-300  overflow-hidden">
          <div className='w-full px-4 py-1 flex bg-avaiThird'>
            <h3 className="text-start text-lg font-bold text-white">Ataque</h3>
          </div>
          <div className="px-4 py-2 gap-1 text-center text-avaiFourth font-semibold">
            <div className='flex justify-between'><span>Chutes Totais:</span> <span className="font-bold">{statistics.shots}</span></div>
            <div className='flex justify-between'><span>Chutes no Alvo:</span> <span className="font-bold">{statistics.shotsOnTarget}</span></div>
            <div className='flex justify-between'><span>Gols de Pênalti:</span> <span className="font-bold">{statistics.penaltyGoals}</span></div>
            <div className='flex justify-between'><span>Chances claras de gol:</span> <span className="font-bold">{statistics.bigChances}</span></div>
          </div>
        </div>

        {/* Passes */}
        <div className=" mb-4 rounded-lg bg-avaiSecondary border border-gray-300  overflow-hidden">
          <div className='w-full px-4 py-1 flex bg-avaiThird'>
            <h3 className="text-start text-lg font-bold text-white">Passes</h3>
          </div>
          <div className="px-4 py-2 gap-1 text-center text-avaiFourth font-semibold">
            <div className='flex justify-between'><span>Porcentagem posse de bola:</span> <span className="font-bold">{statistics.averageBallPossession}%</span></div>
            <div className='flex justify-between'><span>Porcentagem passes certos:</span> <span className="font-bold">{statistics.accuratePassesPercentage.toFixed(1)}%</span></div>
          </div>
        </div>

        {/* Defesa */}
        <div className=" mb-4 rounded-lg bg-avaiSecondary border border-gray-300  overflow-hidden">
          <div className='w-full px-4 py-1 flex bg-avaiThird'>
            <h3 className="text-start text-lg font-bold text-white">Defesa</h3>
          </div>
          <div className="px-4 py-2 gap-1 text-center text-avaiFourth font-semibold">
            <div className='flex justify-between'><span>Jogos sem sofrer gols:</span> <span className="font-bold">{statistics.cleanSheets}</span></div>
            <div className='flex justify-between'><span>Defesas:</span> <span className="font-bold">{statistics.saves}</span></div>
            <div className='flex justify-between'><span>Chutes bloqueados:</span> <span className="font-bold">{statistics.blockedScoringAttempt}</span></div>
            <div className='flex justify-between'><span>Porcentagem duelos ganhos:</span> <span className="font-bold">{statistics.duelsWonPercentage.toFixed(1)}%</span></div>
          </div>
        </div>

        {/* Cartões */}
        <div className=" mb-4 rounded-lg bg-avaiSecondary border border-gray-300  overflow-hidden">
          <div className='w-full px-4 py-1 flex bg-avaiThird'>
            <h3 className="text-start text-lg font-bold text-white">Cartões</h3>
          </div>
          <div className="px-4 py-2 gap-1 text-center text-avaiFourth font-semibold">
            <div className='flex justify-between'><span>Cartões amarelos:</span> <span className="font-bold">{statistics.yellowCards}</span></div>
            <div className='flex justify-between'><span>Cartões vermelhos:</span> <span className="font-bold">{statistics.redCards}</span></div>
          </div>
        </div>
      </div>



    </div>
  );

};

export default StatsTemporada;
