import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const base_url = 'https://image.tmdb.org/t/p';
export const poster_size_s = '/w342';
export const poster_size_m = '/w500';
export const poster_size_l = '/w780';
export const profile_size = '/w185';

const API_KEY = '219747bddc830c6768a55001e81d80ed';

const options = {
  params: {
    api_key: API_KEY,
    page: 1,
    query: '',
  },
};

export const getGenres = async () => {
  const moviesGenres = await axios.get(`genre/movie/list`, options);
  const seriesGenres = await axios.get(`genre/tv/list`, options);
  const response = [...moviesGenres.data.genres, ...seriesGenres.data.genres];
  return response;
};

export const getMovies = async (query, page, searchPath) => {
  options.params.page = page;
  options.params.query = query;

  if (query === '') {
    const response = await axios.get(`trending/${searchPath}/day`, options);
    return response.data;
  } else {
    const response = await axios.get(`search/${searchPath}`, options);
    return response.data;
  }
};

export const getTrailers = async (id, searchPath) => {
  const response = await axios.get(`${searchPath}/${id}/videos`, options);
  return response.data;
};

export const getReviews = async (id, searchPath) => {
  const response = await axios.get(`${searchPath}/${id}/reviews`, options);
  return response.data;
};
