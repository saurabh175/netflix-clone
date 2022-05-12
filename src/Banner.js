import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = ({ fechUrl }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fechdata() {
      //axios basUrl/fechUrl
     
      const request = await axios.get(`http://api.themoviedb.org/3${fechUrl}`);
        
      console.log(Math.floor(Math.random()*20));
      setmovies(request.data.results[Math.floor(Math.random()*20)]);
      return request;
    }
    fechdata();
  }, []);
  return (
    <div
      className='banner-header'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${base_url}/${movies?.backdrop_path})`,
      }}>
      <div className='content'>
        <h2>{movies?.title || movies?.name || movies?.original_name}</h2>
      </div>
      <div className='button'>
        <button className='playbutton'>play</button>

        <button className='trailerbutton'>My List</button>
      </div>
      <div className='description'>
        <h5>{movies.overview}</h5>
      </div>
      <div className="banner-fade">
        
      </div>
      
    </div>
  );
};

export default Banner;
