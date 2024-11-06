import Header from './components/Header';
import Footer from './components/Footer';
import AvaiHeader from './components/AvaiHeader';
import TabelaBrasileirao from './components/TabelaBrasileirao';
import StatsTemporada from './components/StatsTemporada';
import AvaiPlayers from './components/AvaiPlayers';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex flex-col items-center px-4 py-8 space-y-4">
      <AvaiHeader />

        {/* Tabela Brasileirao e componentes adjacentes */}
        <div className="justify-between w-full max-w-5xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <TabelaBrasileirao />
          <StatsTemporada />
        </div>

        {/* Div inferior para outros componentes */}
        <div className="w-full max-w-5xl">
          <AvaiPlayers />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
