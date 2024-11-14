import Header from './components/Header';
import Footer from './components/Footer';
import AvaiHeader from './components/AvaiHeader';
import TabelaBrasileirao from './components/TabelaBrasileirao';
import StatsTemporada from './components/StatsTemporada';
import AvaiPlayers from './components/AvaiPlayers';
import LastGames from './components/LastGames';
import NextGame from './components/NextGame';

function App() {
  return (
    <div className="min-h-screen bg-thirdBackground flex flex-col">
      <Header />

      {/* Centralizar AvaiHeader */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 pt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className='w-full max-w-7xl rounded-lg shadow-md overflow-hidden relative p-4'>
          <AvaiHeader />
        </div>
      </div>

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 py-4 space-y-4 md:space-y-0 md:space-x-4 w-full"> 

        {/* Main Content (Tabela e Jogadores) */}
        <div className="w-full md:w-3/5 flex flex-col space-y-4">
          <NextGame />
          <TabelaBrasileirao />
          <AvaiPlayers />
        </div>

        {/* Sidebar com Estatísticas */}
        <div className="w-full md:w-2/5 mt-4 md:mt-0 space-y-4">
          <LastGames />
          <StatsTemporada />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
