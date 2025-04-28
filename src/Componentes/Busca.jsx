import React from "react";

export const Busca = () => {
    return(
        <div class="search-container">
            <div class="search-box">
                <input type="text" id="search" placeholder="Buscar filmes...">
                <button onclick="searchMovies()" class="search-btn">Buscar</button>
            </div>
        </div>
    )
}