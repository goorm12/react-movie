import MovieItem from "./MovieItem";

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mx-8 my-8">
      <MovieItem />
    </div>
  );
};

export default MovieList;
