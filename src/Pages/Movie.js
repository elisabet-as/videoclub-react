import React from 'react';
import { Link } from "react-router-dom";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=f12ba140&i=${this.props.match.params.id}`);
    const result = await response.json();
    this.setState({
      movie: result
    })
  }

  render() {

    const { movie } = this.state;

    return (
      <div className="movie-container">
        <Link to="/">
          <button className="movie-back-btn">
            Volver
          </button>
        </Link>
        <div className={`movie-card ${localStorage.getItem(movie.imdbID) ? "favourite" : ""}`}>
          <img className="movie-poster" src={movie.Poster} alt="poster"></img>
          <div className="movie-info">
            <span className="movie-detail">Título: {movie.Title}</span>
            <span className="movie-detail">Duración: {movie.Runtime}</span>
            <span className="movie-detail">Género: {movie.Genre}</span>
            <span className="movie-detail">Año: {movie.Year}</span>
            <span className="movie-detail">Idioma: {movie.Language}</span>
            <span className="movie-detail">Director: {movie.Director}</span>
            <span className="movie-detail">Reparto: {movie.Actors}</span>
            <span className="movie-detail">País: {movie.Country}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;