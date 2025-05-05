import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detalhes } from './Componentes/Detalhes';
import { MovieList } from './Componentes/MovieList';
import { Home } from './Pages/Home';
import { Favoritos } from './Componentes/Favoritos';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {/* Página inicial */}
      <Route path='/movies' element={<MovieList />} /> {/* Página da lista de filmes */}
      <Route path='/detalhes' element={<Detalhes />} /> {/* Página de detalhes do filme */}
      <Route path='/favoritos' element={<Favoritos />} /> {/* Página de detalhes do filme */}
      <Route path='*' element={<h1>404 não encontrado</h1>} /> {/* Página 404 */}
    </Routes>
  );
}

export default App;