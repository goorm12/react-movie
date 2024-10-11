import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";
import { URL } from "../constants/URL";
export interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  rating: number;
  year: number;
}
const MovieList = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const movieFetch = async () => {
      const response = await fetch(`${URL}&limit=4&page=${page}`);
      const data = await response.json();
      setMovieData(data.data.movies);
    };

    movieFetch();
  }, [page]);
  console.log(movieData);

  return (
    <div className="m-auto max-w-4xl">
      <div className="grid grid-cols-4  gap-6 justify-items-center mt-8 px-8 w-full">
        {movieData.map((data) => (
          <div
            key={data.id}
            className="w-full text-xxs xs:text-xs  sm:text-sm md:text-base p-2"
          >
            <MovieItem movie={data} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 px-8 gap-4">
        <button
          className="text-xxs xs:text-xs  sm:text-sm md:text-base"
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));
          }}
        >
          Prev
        </button>
        <span className="text-xxs xs:text-xs  sm:text-sm md:text-base">
          Page: {page}
        </span>
        <button
          className="text-xxs xs:text-xs  sm:text-sm md:text-base"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
