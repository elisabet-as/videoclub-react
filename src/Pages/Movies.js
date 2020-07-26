import React from 'react';
import { Link } from "react-router-dom";

class Movies extends React.Component {
  addRemoveFav(movie) {
    if (localStorage.getItem(movie.imdbID)) {
      localStorage.removeItem(movie.imdbID);
    } else {
      localStorage.setItem(movie.imdbID, movie.Title);
    }
    window.location.reload();
  }

  render() {

    const { movies } = this.props;

    return (
      <ul className="movies-container">
        {movies.map(movie => (
          <li className={`movies-movie ${localStorage.getItem(movie.imdbID) ? "favourite" : ""}`} key={movie.imdbID}>
            <Link className="movies-link" to={`/movie/${movie.imdbID}`} >
              <img className="movies-poster" src={movie.Poster} alt="poster"></img>
              <span className="movies-name">{movie.Title}</span>
            </Link>
            <button className="movies-favourite-btn" onClick={() => this.addRemoveFav(movie)}>
              {localStorage.getItem(movie.imdbID) ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;