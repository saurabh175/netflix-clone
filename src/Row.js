import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import './row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fechUrl,isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
 
  useEffect(() => {
    async function fechdata() {
      //axios basUrl/fechUrl
      const request = await axios.get(`http://api.themoviedb.org/3${fechUrl}`);
      console.log(request);
      setmovies(request.data.results);
      return request;
    }
    fechdata();
  },
   [fechUrl]); 
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }};
    const handelMovie=(current_movie)=>{
      if(trailerUrl){
        settrailerUrl("");
      }
      else{
        movieTrailer(current_movie?.name||current_movie?.title||"")
        .then((url)=>{
          const urlparams=new URLSearchParams(new URL(url).search);
         settrailerUrl( urlparams.get('v'));
        }).catch((error)=>console.log(error));
      }
    }
  return (
    <div className='row'>
      <h2> {title} </h2>
      <div className='row_posters'>
        {movies.map((current_movie) => {
          
          return (
            <div className={`row_poster ${isLargeRow && "row_posterlarge"}`} key={current_movie.id}>
              <img onClick={()=>handelMovie(current_movie)}
                src={`${base_url}${isLargeRow?current_movie.poster_path:current_movie.backdrop_path}`}
                alt={current_movie.original_name}
              />
            </div>
          );
        })}
      </div>
      <div className="movitrailer">
       { trailerUrl&& <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
};

export default Row;
