import './App.css';
import Navbar from './components/Navbar/Navbar';
import Balance from './components/Balance/Balance';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Balance />
      </header>
    </div>
  );
}

export default App;
