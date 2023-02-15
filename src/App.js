import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'

// API Key: a07d0c99

const API_URL = 'https://www.omdbapi.com/?apikey=a07d0c99';

const movie1 = {
    "Title": "The Lord of the Rings: The Return of the King",
    "Year": "2003",
    "imdbID": "tt0167260",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Lord of the Rings');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" value="Superman" onChange={() => {}}/>
                <img src={SearchIcon} alt="search" onClick={() => {}}/>
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;