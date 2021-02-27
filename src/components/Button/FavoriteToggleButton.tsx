import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { IMovie } from  '../../models/movie';
import { useMovies } from '../../hooks/useMovies';
import useStyles from './styles';

const FavoriteToggleButton: React.FC<{movie : IMovie }> = ({ movie }) => {
  const classes = useStyles();
  const { toggleLike, isLiked } = useMovies();
  return (
      <Button
        onClick={() => toggleLike(movie.id)}
        variant='contained'
        color='default'
        className={classes.button}
        endIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      >
        {isLiked ? 'Liked' : 'Like'}
      </Button>
  );
};

export default FavoriteToggleButton;