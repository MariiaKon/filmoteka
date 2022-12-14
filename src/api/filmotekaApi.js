import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const base_url = 'https://image.tmdb.org/t/p';
export const file_size = '/w300';
export const file_size_modal = '/w400';

const API_KEY = '219747bddc830c6768a55001e81d80ed';

const options = {
  params: {
    api_key: API_KEY,
    page: 1,
    query: '',
  },
};

export const getGenres = async () => {
  const response = await axios.get('genre/movie/list', options);
  return response.data;
};

export const getMovies = async (query, page) => {
  options.params.page = page;
  options.params.query = query;

  if (query === '') {
    const response = await axios.get('trending/movie/day', options);
    return response.data;
  }

  const response = await axios.get('search/movie', options);
  return response.data;
};
