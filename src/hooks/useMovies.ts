import { useState, useEffect } from 'react';
import { IMovie, IMovieProps, IToggleMovie } from '../models/movie'
import { useHttp } from './useHttp'

export const useMovies = () => {
  const { get } = useHttp();
  const [movies, setMovies] = useState<IMovie[]>();
  const [likedMovies, setLikedMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [isLiked, setIsLiked] = useState(!false);
  //let LikedList: IMovie[] = [];

  const route = '/movie/popular/';
  useEffect(() => {
    const getData = async () => {
      const response = await get(`${route}?page=${page}`);
      setMovies(response.data.results);
    }
    getData();
  }, [get, page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page !== 0 ? page - 1 : 0)
  }

  const toggleLike = (movieId: number) => {
    setIsLiked(!isLiked);
    console.log(isLiked);
    const movie = movies?.find(x => x.id === movieId) as IMovie;
    const foundMovie = likedMovies?.find(x => x.id === movieId) as IMovie;
    if (isLiked) {
      if (!foundMovie) {
        setLikedMovies(prevLikedMovies => [...prevLikedMovies!, movie]);
      }
    }
    else {
      setLikedMovies(likedMovies?.filter(x => x.id !== foundMovie.id));
    }

    console.log(likedMovies);

  const movieAction = (id: number, action: 'like' | 'unlike') => {
    const movie = movies?.find(x => x.id === id) as IMovie
    const foundMovie = likedMovies?.find(x => x.id === id) as IMovie

    switch (action) {
      case 'like': {
        if (!foundMovie)
          likedMovies?.push(movie)
        setLikedMovies(likedMovies)
        break
      }
      case 'unlike': {
        if (foundMovie)
          setLikedMovies(likedMovies?.filter(x => x.id !== foundMovie.id))
        break
      }
      default:
        break
    }




  }

  return {
    movies,
    nextPage,
    prevPage,
    movieAction,
    likedMovies,
    toggleLike,
    isLiked,
  }
}