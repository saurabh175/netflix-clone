import React from "react";
import Row from "./Row";
import requests from "./request";
import "./App.css";
import Banner from './Banner'
import  Navbar  from "./Navbar";

const App = () => {
  return (
    
    <div className='App'>
    <Navbar/>
    <Banner fechUrl={requests.fechNetflixOriginals} />
      <Row title='Netflix Originals' fechUrl={requests.fechNetflixOriginals} isLargeRow={true}/>
      <Row title='Trending Now' fechUrl={requests.fechTrending} isLargeRow={false}/>
      <Row title='Top Rated' fechUrl={requests.fechTopRated} isLargeRow={false} />
      <Row title='Action Movies' fechUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title='Comedy Movies' fechUrl={requests.fetchComedyMovies} isLargeRow={false} />
      <Row title='Horror Movies' fechUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
      <Row title='Romance Movies' fechUrl={requests.fetchRomanceMovies} isLargeRow={false} />
      <Row title='Documentaries Movies' fechUrl={requests.fetchDocumentaries} isLargeRow={false}/>
     
    </div>
  );
};

export default App;
