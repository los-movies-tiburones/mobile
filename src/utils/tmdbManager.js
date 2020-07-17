/* eslint-disable prettier/prettier */

const nowMoviesTMDBManager = (data) => {
  return data.map((movie) => {
    return {
      cover: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
      title: movie.original_title,
      year: movie.release_date,
    };
  });
};

export {nowMoviesTMDBManager};
