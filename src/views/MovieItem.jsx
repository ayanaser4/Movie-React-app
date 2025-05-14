import './MovieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="movie-img"
      />
      <h3>{movie.title}</h3>
      <p className="rating">⭐ {movie.vote_average}</p>
      <p className="overview">{movie.overview.substring(0, 100)}...</p>
    </div>
  );
};

export default MovieItem;
