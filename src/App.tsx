import { useEffect, useState } from "react";
import "./App.css";

interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  rating: number;
}

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieFetch = async (url: string) => {
      const response = await fetch(url);

      const data = await response.json();

      setMovieData(data.data.movies);
    };

    movieFetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  }, []);

  return (
    <>
      {movieData.map((data: Movie) => (
        <ul key={data.id}>
          <li>
            <img src={data.medium_cover_image} alt="" />
          </li>
          <li>{data.title}</li>
          <li>{data.rating}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
