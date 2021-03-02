import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { IMovie } from  '../../models/movie';
import { useMovies } from '../../hooks/useMovies';
import useStyles from './styles';

const FavoriteToggleButton: React.FC<{movieDetails : IMovie }> = ({ movieDetails }) => {
  const classes = useStyles();
  const { toggleLike, isLiked } = useMovies();
  return (
      <Button
        onClick={() => toggleLike(movieDetails.id)}
        variant='contained'
        color='default'
        className={classes.button}
        endIcon={isLiked ?  <FavoriteBorderIcon /> : <FavoriteIcon />}
      >
        {isLiked ? 'Like' : 'Liked'}
      </Button>
  );
};

export default FavoriteToggleButton;