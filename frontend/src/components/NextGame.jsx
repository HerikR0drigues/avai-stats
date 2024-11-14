import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiMapPin } from "react-icons/hi2";

const LastGames2 = () => {
    const [nextgame, setNextGame] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNextGame = async () => {
            try {
                const response = await axios.get('https://avai-stats-production.up.railway.app/api/nextgame');
                setNextGame(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(true);
                console.error('Erro ao buscar dados dos proximos jogos:', error);
            }
        };

        fetchNextGame();
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
                <h2 className="text-2xl font-bold text-black">Próximo Jogo</h2>
            </div>

            <div className="mx-auto w-full overflow-x-auto pt-6 p-4 ">
                <div className="flex flex-col ">
                    <div className="flex w-full"> 
                        <div className='flex flex-col items-center justify-center w-1/3 '>
                            <img
                                src={nextgame.homeTeamLogoUrl}
                                alt="home team"
                                className="w-16 h-16 mb-2 "
                            />
                            <h2 className="md:text-xl font-bold text-black">{nextgame.homeTeamName}</h2>
                        </div>
                        <div className='w-1/3 flex flex-col items-center justify-center '>
                            <p className='text-xl md:text-2xl font-bold'>{nextgame.matchTime}</p>
                            <p className='text-xs font-bold'>{nextgame.matchDate}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-1/3 '>
                            <img
                                src={nextgame.awayTeamLogoUrl}
                                alt="home team"
                                className="w-16 h-16 mb-2 "
                            />
                            <h2 className="md:text-xl font-bold text-black">{nextgame.awayTeamName}</h2>
                        </div>
                    </div>
                    <div className="flex mt-4 font-bold w-full items-center justify-center">
                        <HiMapPin className='text-xl mr-2 text-avaiMain'/>
                        <p className='text-sm md:text'>{`${nextgame.stadium} - ${nextgame.city}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastGames2;
