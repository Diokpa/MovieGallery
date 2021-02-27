import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import { IMovie } from  '../../models/movie';

import useStyles from './styles.js';

const Movie: React.FC<{movie : IMovie}> = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={'./default.png'} title={movie.title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${movie.title}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: movie.title }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
       
      </CardActions>
    </Card>
  );
};

export default Movie;
