import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TabelaBrasileirao = () => {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/standings');
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
      <div className='flex justify-center align-middle md:w-3/5 rounded-lg bg-white font-sofia p-6 shadow-lg'>
        <div className='align-middle justify-center animate-spin rounded-full h-8 w-8 border-t-2 border-blue-900'></div>
      </div>
    );
  }

  return (
    <>
      {/* Tabela Brasileirao */}
      <div className="md:w-3/5 rounded-lg bg-white font-sofia p-6 shadow-lg">
        <div className="flex items-center justify-center mb-6">
          {/* Imagem do Brasileirão Série B */}
          <img 
            src="https://api.sofascore.app/api/v1/unique-tournament/390/image" 
            alt="Brasileirão Série B" 
            className="w-10 h-10 mr-4"
          />
          <h2 className="text-2xl font-bold text-black">Tabela Brasileirão Série B</h2>
        </div>
        <div className="mx-auto flex justify-center w-full max-w-lg overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-secondaryBackground">
              <tr>
                <th className="w-10 pl-4 py-1 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="pl-0 pr-0.5 py-1 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase">PTS</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase">J</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase">V</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">E</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">D</th>
                <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase">SG</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(tabela) ? (
                tabela.map((time, index) => {
                  const isTop4 = index < 4;
                  const isBottom4 = index >= tabela.length - 4;
                  const isAvai = time.teamName === "Avaí";
  
                  const rowClass = `
                    ${isTop4 ? 'bg-green-400 hover:bg-green-200' : ''}
                    ${isBottom4 ? 'bg-red-400 hover:bg-red-200' : ''}
                    ${isAvai ? 'bg-blue-400 hover:bg-blue-200 font-bold' : ''}
                    hover:bg-gray-200`;
  
                  return (
                    <tr key={time.position} className={rowClass}>
                      <td className="w-10 pl-4 py-1 whitespace-nowrap">{time.position}</td>
                      <td className="pl-0 pr-2 py-1 whitespace-nowrap flex items-center">
                        <img src={time.logoUrl} alt={`${time.teamName} logo`} className="w-6 h-6 mr-2" />
                        {time.teamName}
                      </td>
                      <td className="px-1 py-1 whitespace-nowrap">{time.points}</td>
                      <td className="px-1 py-1 whitespace-nowrap">{time.matches}</td>
                      <td className="px-1 py-1 whitespace-nowrap">{time.wins}</td>
                      <td className="px-1 py-1 whitespace-nowrap hidden md:table-cell">{time.draws}</td>
                      <td className="px-1 py-1 whitespace-nowrap hidden md:table-cell">{time.losses}</td>
                      <td className="px-1 py-1 whitespace-nowrap">{time.scoreDiffFormatted}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">Nenhum dado disponível</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  


};

export default TabelaBrasileirao;
