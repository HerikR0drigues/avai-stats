import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TabelaBrasileirao = () => {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        const response = await axios.get('https://avai-stats-production.up.railway.app/api/standings');
        setTabela(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error('Erro ao buscar dados da tabela:', error);
      }
    };

    fetchTabela();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full rounded-lg bg-white font-sofia p-6 shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg bg-white font-sofia shadow-lg border border-gray-300">
      <div className="flex items-center justify-center py-6 border-b">
        <img
          src="https://api.sofascore.app/api/v1/unique-tournament/390/image"
          alt="Brasileirão Série B"
          className="w-10 h-10 mr-2"
        />
        <h2 className="text-2xl font-bold text-black">Tabela Brasileirão Série B</h2>
      </div>

      <div className="mx-auto w-full overflow-y-auto border-none pt-6">
        {/* Header da Tabela */}
        <div className="grid grid-cols-2 bg-white py-2 px-4 font-medium text-xs text-gray-500 uppercase">
          {/* Agrupamento das colunas de dados (Time) */}
          <div className="flex justify-start space-x-4">
            <div className="w-2 text-center">#</div>
            <div className="flex-1 "></div>
          </div>
          
          {/* Agrupamento das colunas de dados (PTS, J, V, E, D, SG) */}
          <div className="flex justify-end space-x-2">
            <div className="w-6 text-center">PTS</div>
            <div className="w-6 text-center">J</div>
            <div className="w-6 text-center">V</div>
            <div className="w-6 text-center hidden md:block">E</div>
            <div className="w-6 text-center hidden md:block">D</div>
            <div className="w-6 text-center">SG</div>
          </div>
        </div>

        {/* Corpo da Tabela */}
        {Array.isArray(tabela) ? (
          tabela.map((time, index) => {
            const isTop4 = index < 4;
            const isBottom4 = index >= tabela.length - 4;
            const isAvai = time.teamName === 'Avaí';

            const rowClass = `
              ${isTop4 ? 'border-green-400 hover:bg-green-300' : ''}
              ${isBottom4 ? ' border-red-400 hover:bg-red-300' : ''}
              ${isAvai ? 'border-blue-400 bg-blue-400 hover:bg-blue-300 hover:border-blue-300 font-bold' : ''}
              ${!isAvai && !isBottom4 && !isTop4 ? 'border-white hover:bg-gray-200 hover:border-gray-200' : ''}
            `;

            return (
              <div key={time.position} className={`border-l-4 grid grid-cols-2 py-1 px-4 ${rowClass}`}>
                <div className='flex justify-start space-x-4'>
                  <div className="w-2">{time.position}</div>
                  <div className="flex-1 flex items-center whitespace-nowrap">
                    <img src={time.logoUrl} alt={`${time.teamName} logo`} className="w-5 h-5 mr-2" />
                    {time.teamName}
                  </div>
                </div>
                {/* Agrupando as colunas de dados dentro de uma única div */}
                <div className="flex justify-end space-x-2">
                  <div className="w-6 text-center whitespace-nowrap">{time.points}</div>
                  <div className="w-6 text-center whitespace-nowrap">{time.matches}</div>
                  <div className="w-6 text-center whitespace-nowrap">{time.wins}</div>
                  <div className="w-6 text-center whitespace-nowrap hidden md:block">{time.draws}</div>
                  <div className="w-6 text-center whitespace-nowrap hidden md:block">{time.losses}</div>
                  <div className="w-6 text-center whitespace-nowrap">{time.scoreDiffFormatted}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full text-center py-4">Nenhum dado disponível</div>
        )}
      </div>
    </div>
  );
};

export default TabelaBrasileirao;
