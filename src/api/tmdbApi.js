import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const base_url = 'https://image.tmdb.org/t/p';
export const poster_size = '/w342';
export const poster_size_modal = '/w500';
export const profile_size = '/w185';

const API_KEY = '9ca090fc1e98f36e77a27d3ffab82b43';

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

export const getMovies = async (query, page, searchPath, sorter) => {
  options.params = {
    ...options.params,
    page,
    query,
    ...sorter,
  };

  if (sorter.sort_by !== '' && searchPath !== 'person') {
    const response = await axios.get(`discover/${searchPath}`, options);
    return response.data;
  }

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
