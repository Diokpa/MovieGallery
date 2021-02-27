
export const popularMovieParams = ( ) => {
  return {
    axiosParams() {
      const params = new URLSearchParams();
      params.append('api_key', process.env.REACT_APP_API_KEY!);
      params.append('language', process.env.REACT_APP_LANG!);
      return params
  }
}
}
