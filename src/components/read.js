import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [movies, setMovies] = useState([]);

for(let i = 0; i<1000000;i++){}

  useEffect(() => {
    //get the data from api and respond to the read site
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>Hello from read component!</h3>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;