import { Button } from '@material-ui/core';
import React from 'react';

import { useMovies } from '../../hooks/useMovies';

const Home = () => {
  const { movies, nextPage, prevPage, movieAction } = useMovies();
  return (
    <div>
      {movies?.map((movie) => {
        return (
          <div>
            <div>{movie.title}</div>
            <div>
              <Button onClick={() => movieAction(movie.id, 'like')}>
                like
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
