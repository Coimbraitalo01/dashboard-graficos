import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <div className="card">
        <h2 className="card-header">Vendas Mensais</h2>
        <BarChart />
      </div>

      <div className="card">
        <h2 className="card-header">Distribuição de Dispositivos</h2>
        <PieChart />
      </div>

      <div className="card">
        <h2 className="card-header">Acessos Diários</h2>
        <LineChart />
      </div>
    </div>
  );
}

export default App;