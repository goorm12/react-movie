import { Movie } from "./MovieList";

interface MovieProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieProps) => {
  return (
    <div key={movie.id} className="flex flex-col gap-1 w-full">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className="w-full h-auto object-cover"
      />

      <span className="truncate ...">{movie.title}</span>
      <span>{movie.year}년 개봉</span>
      <span>평점: {movie.rating} / 10</span>
    </div>
  );
};

export default MovieItem;
