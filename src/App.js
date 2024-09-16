
import { useEffect, useState } from "react";

import './App.css'
import SearchIcon from './Search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=5f6d82ca'

const movie = {
    "Title": "Minecraft",
    "Year": "2009",
    "imdbID": "tt2011970",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTc4ZTQ2YTctZjllYS00ZjUwLWI3NDktYzU5NmU5MTY3ODZjXkEyXkFqcGdeQXVyNjgzMzA5Mzk@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([])

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovie('Minecraft')
    })
    return (
        <div className="app">
            <h1>MovieList</h1>
            <div className="search">
                <input
                    placeholder="Cari film disini"
                    value=""
                    onChange={() => { }} />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }} />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>Tidak ada film yang ditemukan</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;