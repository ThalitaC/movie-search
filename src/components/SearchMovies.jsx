import React, {useState} from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
const [query, setQuery] = useState('');

const [movies, setMovies] = useState([])

  const SearchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=81ad912c4edda40cbaee5e0ac99217f8&language=en-US&query=${query}&page=1&include_adult=false`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className="form" onSubmit={ SearchMovies }>
      <label htmlFor="query" className="label">
          Movie name:
          <input
          className="input" 
          type="text" 
          name="query" 
          placeholder="i.e. Jurassic park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <button className="button" type="submit">
            Search
          </button>
      </label>
    </form>
    <div className="card-list">
      {movies.filter(movie => movie.poster_path).map(movie => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
    </>
  )
}