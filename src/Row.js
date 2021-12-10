import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import './row.css'
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fechUrl,isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fechdata() {
      //axios basUrl/fechUrl
      const request = await axios.get(`http://api.themoviedb.org/3${fechUrl}`);
      console.log(request);
      setmovies(request.data.results);
      return request;
    }
    fechdata();
  }, [fechUrl]);
  return (
    <div className='row'>
      <h2> {title} </h2>
      <div className='row_posters'>
        {movies.map((current_movie) => {
          return (
            <div className={`row_poster ${isLargeRow && "row_posterlarge"}`} key={current_movie.id}>
              <img
                src={`${base_url}${isLargeRow?current_movie.poster_path:current_movie.backdrop_path}`}
                alt={current_movie.original_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
