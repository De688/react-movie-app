import React from 'react';
import '../style/moviecard.css';


function Moviecard({ movie }) {
    return (

        <div className="container">
            <div className="card-container">

                <div className="movie-image">
                    <p className="movie-year">{movie.Year}</p>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                    <div className="movie-discription">
                        <div className="movie-type">{movie.Type} {movie.Year}</div>
                        <div className="movie-title">Title:<span> {movie.Title}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Moviecard;
