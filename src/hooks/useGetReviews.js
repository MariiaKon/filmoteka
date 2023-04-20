import * as API from 'api/tmdbApi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useGetReviews(id, showReviews) {
  const searchPath = useSelector(state => state.searchPath);
  const [reviews, setReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  try {
    useEffect(() => {
      setLoading(true);

      if (!showReviews) {
        return;
      }

      API.getReviews(id, searchPath)
        .then(response => {
          setReviews([...response.results]);
          setTotalResults(response.total_results);
        })
        .then(() => {
          setLoading(false);
        });
    }, [id, searchPath, showReviews]);
  } catch (error) {}

  return { reviews, totalResults, loading };
}

export default useGetReviews;
