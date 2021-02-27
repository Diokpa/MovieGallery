import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

export const Header: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
             Fineao Movie Gallery
          </Typography>
         

          <Typography component={Link} to="/liked" variant="h6" className={classes.title} color="primary">
             Liked Movies
          </Typography>

        
        </Toolbar>
      </AppBar>
    </>
  );
}