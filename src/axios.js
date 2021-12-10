import axios from 'axios'

const instance=axios.create({
    baseUrl:'http://api.themoviedb.org/3'
});
export default instance;