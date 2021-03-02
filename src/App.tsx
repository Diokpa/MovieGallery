import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useMovies } from './hooks/useMovies';
import { Header } from './components/Header/Header';
import Home from './views/Home/Home';
import FavoriteMovies from './views/FavoriteMovies/FavoriteMovies';



const App: React.FC = () => {
  const { movies, likedMovies, nextPage, prevPage, movieAction } = useMovies();
  console.log(movies);
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
       <Header />
       <ToastContainer position='bottom-right' />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/liked">
            <FavoriteMovies />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;