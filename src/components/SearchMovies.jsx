import React, {useState} from "react";

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
        <div className="card" key={movie.id}>
          <img 
            className="card--image" 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + 'poster'}
            />
            <div className="card--content">
              <h3 className="card--title">{movie.title}</h3>
              <p><small>RELEASE DATE: {movie.release_date}</small></p>
              <p><small>RATING: {movie.vote_average}</small></p>
              <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}