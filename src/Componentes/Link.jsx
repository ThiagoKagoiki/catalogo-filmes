import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieList } from './MovieList';
import { Detalhes } from './Detalhes';

export const Link = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/detalhes" element={<Detalhes />} />
            </Routes>
        </Router>
    )
}