import { Grid } from '@material-ui/core';
import React from 'react';


import { useMovies } from '../../hooks/useMovies';
import Movie from '../../components/Movie/Movie';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  const { movies, nextPage, prevPage, movieAction } = useMovies();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      {movies?.map((movie) => {
        return (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
            <Movie movie={movie} />
          </Grid>
        );
      })}
      </Grid>
    </main>
  );
};

export default Home;
