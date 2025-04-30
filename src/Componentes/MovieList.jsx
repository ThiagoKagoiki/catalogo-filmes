import React, { useEffect, useState } from 'react';
import './MovieList.css'
import { Link, useNavigate } from 'react-router-dom';

export const MovieList = () => {

  const [movies, setMovies] = useState([]); 
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=85e5217c&s=movie')
      .then(response => response.json())

      .then(data => {
        if (data.response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
      })
      .catch(err => setError(err.message));
  }, []); //tela inicial


  if (error || movies.length === 0) return <p style={{ color: 'red' }}>Erro: {error}</p>;

    const fetchMovies = (query) => {
      fetch(`https://www.omdbapi.com/?apikey=85e5217c&s=${query}`)
      .then(response => response.json())

      .then(data => {
        if (data.response === "False") {
          throw new Error(data.Error);
        }
        const filmeBuscado = data.Search.filter(movie => 
          movie.Title.toLowerCase().includes(query)
        );
        setMovies(filmeBuscado);
        setError(null);
      })
      .catch(err => {
        setMovies([]);
        setError(err.message);
      });
    }; //busca por titulo
  
    const handleSearchMovie = (e) => {
      e.preventDefault(); //sem refresh ao pesquisar
      if (searchTerm.trim() !== '') {
        fetchMovies(searchTerm);
      }
    };

    const handleViewDetails = (movie) => {
      navigate('/detalhes', { state: { 
        title: movie.Title, 
        poster: movie.Poster, 
        year: movie.Year, 
        plot: movie.Plot, 
        rating: movie.Rated, 
        genre: movie.Genre 
      }});
    };



return (
    
    <div className='tudo'>
        <form onSubmit={handleSearchMovie} className='busca'>
            <input
            type="text"
            placeholder="Digite o nome do filme..."
            value={searchTerm}
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
            <p className='titulo-filmes'><strong>{movie.Title}</strong></p>
            <p className='year'>{movie.Year}</p>
            <button to='/detalhes' className='detalhes' onClick={() => handleViewDetails(movie)}>
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}