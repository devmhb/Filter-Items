import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./Filter";

function App() {
  const [popular, setPopular] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b151e0bd713dec0cc2433669789a1150&language=en-US&page=1"
    );
    const moviesList = await data.json();
    setPopular(moviesList.results);
    setFilterd(moviesList.results);
  };
  console.log(popular);

  return (
    <>
      <Filter
        popular={popular}
        setFilterd={setFilterd}
        genre={genre}
        setGenre={setGenre}
      />
      <div className="App">
        {filterd.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
}

export default App;
