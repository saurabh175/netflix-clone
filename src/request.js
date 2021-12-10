const API_KEY="b2828aa8083cdd46d554e48612fd51e3";
const requests={
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fechTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fechTrending:`/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fechNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
}
export default requests;