import './Detalhes.css'
import React from 'react';
import { useLocation} from 'react-router-dom';


export const Detalhes = () => {
    const location = useLocation()
    const {
        title,
        poster,
        year,
        rating,
        genre,
        plot
    } = location.state || {}

    return(
        <div className='infomacoes'>
            <img src={poster} alt={title} className='poster-detalhes'></img>
            <div className='infos'>
                <h1 className="titulo">{title}</h1>
                <p className="sinopse">{plot}</p>
                <p className="data">{year}</p>
                <p className="nota">{rating}</p>
                <p className="genero">{genre}</p>
            </div>
        </div>
    )
}