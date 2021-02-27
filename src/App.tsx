import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {useHttp} from './hooks/useHttp'
import { Header } from './components/Header/Header';
import Home from './views/Home/Home';
import FavoriteMovies from './views/FavoriteMovies/FavoriteMovies';



const App: React.FC = () => {
  
  const htp = useHttp();
 console.log(htp);
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