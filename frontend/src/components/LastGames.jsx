import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChartLine } from "react-icons/fa6";

const LastGames = () => {
    const [lastGames, setLastGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLastGames = async () => {
            try {
                const response = await axios.get('https://avai-stats-production.up.railway.app/api/lastgames');
                setLastGames(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(true);
                console.error('Erro ao buscar dados dos últimos jogos:', error);
            }
        };

        fetchLastGames();
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
                <FaChartLine className='text-2xl mr-2 text-avaiMain'/>
                <h2 className="text-2xl font-bold text-black">Performance dos últimos 5 jogos</h2>
            </div>

            <div className="mx-auto w-full overflow-x-auto pt-6 p-4 ">
                <div className="flex space-x-1 md:space-x-2 ">
                    {lastGames.map((game, index) => {
                        // Determina a cor do placar com base no resultado
                        let scoreColor = 'gray'; // Cor padrão para empate
                        if (game.avaiScore > game.opponentScore) {
                            scoreColor = 'green'; // Vitória
                        } else if (game.avaiScore < game.opponentScore) {
                            scoreColor = 'red'; // Derrota
                        }

                        return (
                            <div
                                key={index}
                                className={"w-1/5 overflow-hidden flex flex-col items-center rounded-lg border gap-2 border-gray-300 shadow-sm"}
                            >
                                <div className="w-full p-1 flex justify-center bg-avaiThird">
                                    <p className='text-sm font-semibold text-white'>{game.rodada}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center">
                                        <img
                                            src={game.opponentlogoUrl}
                                            alt={game.opponentName}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`text-xl font-bold ${scoreColor === 'green'
                                        ? 'text-green-600'
                                        : scoreColor === 'red'
                                            ? 'text-red-600'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {game.avaiScore} - {game.opponentScore}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LastGames;
