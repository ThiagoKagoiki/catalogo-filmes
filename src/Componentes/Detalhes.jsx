import './Detalhes.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Detalhes = () => {
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState(null);
    const [error, setError] = useState(null);

    const title = location.state?.title; // Usando optional chaining

    useEffect(() => {
        if (title) {
            fetch(`http://www.omdbapi.com/?apikey=85e5217c&t=${title}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "False") {
                        setError(data.Error);
                    } else {
                        setMovieDetails(data);
                    }
                })
                .catch(error => setError('Erro ao buscar dados: ' + error));
        }
    }, [title]);

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!movieDetails) {
        return <div>Carregando...</div>; // Exibir mensagem de carregamento
    }

    const { Poster, Year, Rated, Genre, Plot, Actors } = movieDetails;

    return (
        <div className='infomacoes'>
            <img src={Poster} alt={title} className='poster-detalhes' />
            <div className='infos'>
                <h1 className="titulo">{title}</h1>
                <p className="sinopse">{Plot}</p>
                <p className="data">{Year}</p>
                <p className="nota">{Rated}</p>
                <p className="genero">{Genre}</p>
                <p className="atores">{Actors}</p>
            </div>
        </div>
    );
};
