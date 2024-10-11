import { useEffect, useState } from "react";
import { URL } from "../constants/URL";

interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  rating: number;
  year: number;
}

const MovieItem = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieFetch = async (url: string) => {
      const response = await fetch(url);

      const data = await response.json();

      setMovieData(data.data.movies);
    };

    movieFetch(`${URL}&limit=4`);
  }, []);
  console.log(movieData);
  return (
    <>
      {movieData.map((data: Movie) => (
        <div key={data.id} className="flex flex-col gap-1 w-full">
          <img
            src={data.medium_cover_image}
            alt={data.title}
            className="w-full object-cover"
          />

          <span className="truncate ...">{data.title}</span>
          <span>{data.year}년 개봉</span>
          <span>평점: {data.rating} / 10</span>
        </div>
      ))}
    </>
  );
};

export default MovieItem;
