import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Whatsapp from './components/whatsapp';
import Sobre from './components/Sobre';
import Experiencias from './components/Experiencias';

function App() {
  return (
    <div className="">
      <Header />
      <HomePage />
      <Whatsapp />
      <Sobre />
      <Experiencias />
    </div>
  );
}

export default App;
