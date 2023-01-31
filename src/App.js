import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Picks from './pages/Picks';
import Ranking from './pages/Ranking';
import Navbar from './components/Navbar';
import Login from './components/Login';
import useToken from './components/useToken';

function App() {
  
  const { token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/picks' element={<Picks />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/ranking' element={<Ranking />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
