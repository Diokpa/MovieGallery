import {useState} from 'react'
import { Card, CardMedia, CardContent, Typography, Box} from '@material-ui/core';
import FavoriteToggleButton from '../Button/FavoriteToggleButton';

import { IMovie, IMovieProps } from  '../../models/movie';

import useStyles from './styles';

const Movie: React.FC<{ movie: IMovie }> = ({ movie }) => {
  const classes = useStyles();
  const [imageType, setImageType] = useState<'front' | 'back'>('front');
  const displayDescription = (e: any) => {
    switch (e.type) {
      case 'mouseenter':
        setImageType('back');
        break;
        case 'mouseleave':
          setImageType('front');
          break;
    };
  }

  return (
    
    <Card onMouseLeave={displayDescription} onMouseEnter={displayDescription} className={classes.root}>
      {imageType === 'front' && <CardMedia className={classes.media}
        image={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title} />}
      {imageType === 'back' && <CardMedia style={{
        margin: '1em'
      }}>
        <Typography variant="caption">
          <Box textAlign="justify">{movie.overview}</Box>
        </Typography>
      </CardMedia>}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          <FavoriteToggleButton movieDetails={movie} />
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: `Rating: ${movie.vote_average} | ${movie.vote_count} votes` }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      
    </Card>
  );
};

export default Movie;






