import React, { useEffect, useState } from 'react';
import './MovieList.css'

export const MovieList = () => {

  const [movies, setMovies] = useState([]);  // Lista de filmes
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=85e5217c&s=movie')  // Busca inicial
      .then(response => response.json())
      .then(data => {
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);  // Aqui pega a lista de filmes
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  if (movies.length === 0) return <p>Carregando filmes...</p>;






  
    

  
    const fetchMovies = (query) => {
      fetch(`https://www.omdbapi.com/?apikey=85e5217c&s=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        const filmeBuscado = data.Search.filter(movie => 
          movie.Title.toLowerCase().includes('batman')
        );
        setMovies(filmeBuscado);
        setError(null);
      })
      .catch(err => {
        setMovies([]);
        setError(err.message);
      });
    };
  
    const handleSearchMovie = (e) => {
      e.preventDefault();
      if (searchTerm.trim() !== '') {
        fetchMovies(searchTerm);
      }
    };







return (
    
    <div className='tudo'>
        <form onSubmit={handleSearchMovie} className='busca'>
            <input
            type="text"
            placeholder="Digite o nome do filme..."
            value={searchTerm} // <- aqui é searchTerm, não query
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>Buscar</button>
        </form>

        <h2 className='titulo-cards'>Filmes</h2>

      <div className='cards'>
        

        {movies.map(movie => (
          <div key={movie.imdbID} className='card'>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=Sem+Imagem"}
              alt={movie.Title}
            />
            <p className='titulo'><strong>{movie.Title}</strong></p>
            <p className='year'>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}