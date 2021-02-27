import { Card, CardMedia, CardContent, Typography, } from '@material-ui/core';
import FavoriteToggleButton from '../Button/FavoriteToggleButton';

import { IMovie } from  '../../models/movie';

import useStyles from './styles';

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
          <FavoriteToggleButton movie={movie} />
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: movie.title }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      
    </Card>
  );
};

export default Movie;
