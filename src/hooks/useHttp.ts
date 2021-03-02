import axios from 'axios';

export const useHttp = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  
    const get = async (route: string) => {
      try {
      return await axios.get(baseUrl+route + `&api_key=${api_key}`);
      } catch (error) {
        
        throw error;
      }

    }
   
  return { get };
}