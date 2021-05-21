import React from "react";

const seacrhMovies = async (e) => {
  e.preventDefault();

  const query = "Jurassic Park"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=81ad912c4edda40cbaee5e0ac99217f8&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch(error) {
    console.error(error);
  }
}
export default function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
          Movie name:
          <input
          className="input" 
          type="text" 
          name="query" 
          placeholder="i.e. Jurassic park"/>
          <button className="button" type="submit">
            Search
          </button>
      </label>
    </form>
  )
}