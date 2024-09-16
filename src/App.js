
import { useEffect } from "react";

import './App.css'
import SearchIcon from './Search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=5f6d82ca'

const movieEx = {
    "Title": "Minecraft",
    "Year": "2009",
    "imdbID": "tt2011970",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTc4ZTQ2YTctZjllYS00ZjUwLWI3NDktYzU5NmU5MTY3ODZjXkEyXkFqcGdeQXVyNjgzMzA5Mzk@._V1_SX300.jpg"
}

const App = () => {
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
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
                    value="Minecraft"
                    onChange={() => { }} />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }} />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movieEx.Year}</p>
                    </div>
                    <div>
                        <img src={movieEx.Poster !== 'N/A' ? movieEx.Poster : 'https://placehold.co/400'} alt={movieEx.Title} />
                    </div>
                    <div>
                        <span>{movieEx.Type}</span>
                        <h3>{movieEx.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;