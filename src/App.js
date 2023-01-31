import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Picks from './pages/Picks';
import Ranking from './pages/Ranking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/picks' element={<Picks />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/ranking' element={<Ranking />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
