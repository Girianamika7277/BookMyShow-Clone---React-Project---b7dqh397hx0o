import React from "react";
import { useEffect, useState } from "react";
import "../styles/Movies.css"
import Genres from "./Genres";
import MovieCard from "./MovieCard";
import Nav from "./Nav";


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movieTitle, setMovieTitle] = useState("");
    const [currentMovie, setCurrentMovie] = useState([]);
    const [displayCard, setDisplayCard] = useState(false);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=892507cb9b27f1d84f0eaa067c7d4632')
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=892507cb9b27f1d84f0eaa067c7d4632`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results)
            });
    }, []);

    const handleGenresSelect = (genreId) => {
        setSelectedGenre(genreId);
    };

    const filteredMovies = movies.filter((movie) => {
        if (selectedGenre === null) {
            return true;
        }
        return movie.genre_ids.includes(selectedGenre);
    });

    const inputHandler = (title) => {
        setMovieTitle(title);
    }
    const handleSubmit = () => {
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(movieTitle.toLowerCase())
        );
        setMovies(filteredMovies);
    };
    const movieCardHandler = (movie) => {
        setCurrentMovie(movie);
        setDisplayCard(true);
    }

    const movieCardCloseHandler = () => {
        setCurrentMovie([]);
        setDisplayCard(false);
    }


    return (
        <div className="landingPage" >
            <div className="nav-container">
                <Nav inputHandler={inputHandler} handleSubmit={handleSubmit} />
            </div>
            <div className="movie-body" >
                <div className="genre-container" >
                    <Genres genres={genres} selectedGenre={selectedGenre} handleGenresSelect={handleGenresSelect} />
                </div>
                <div className="movies">
                    <h1>Now Playing</h1>
                    <div className="movie-section" >
                        {filteredMovies.map(movie => (
                            <div className="movie-container" key={movie.id} onClick={() => movieCardHandler(movie)} >
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt="Movie Poster" />
                                <h2>{movie.title}</h2>
                                <div className="lang-vote" >
                                    <p>{movie.original_language}</p>
                                    <p>{movie.vote_average}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="movieCard-popUp" style={{
                        visibility: displayCard ? "visible" : "hidden",
                        opacity: displayCard ? "1" : "0"
                    }} >
                        <MovieCard currentMovie={currentMovie} movieCardCloseHandler={movieCardCloseHandler} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Movies;