import { useEffect, useState } from "react"
import MovieController from "../controllers/MovieController"
import MovieItem from "./MovieItem"
import "./MovieList.css"

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        MovieController.fetchMovies()
            .then((movies) => {
                setMovies(movies)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return (
     <div className="movie-list">
     {movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
);

}




export default MovieList