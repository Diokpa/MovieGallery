import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';


export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>,
  document.getElementById('root')
);
