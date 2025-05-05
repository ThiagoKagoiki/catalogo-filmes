import React from 'react'
import './Nav.css'
import { MovieList } from './MovieList'


const Nav = () => {
  return (
    <div>
      <header>
          <h1>🎬 Mini Catálogo de Filmes</h1>
          <p>Encontre seus filmes favoritos</p>
        
      </header>
      
        <MovieList/>
      
      <footer>
        <div className='tudo-footer'>
          <h4 className='contatos-title'>Contatos</h4>
          <br />
          <span className='infos'>GitHub: <a href="https://github.com/ThiagoKagoiki">https://github.com/ThiagoKagoiki</a></span>
          <br />
          <span className='infos'>Telefone: (48) 99172-6261</span>  
        </div>
      </footer>

    </div>
  )
}

export default Nav