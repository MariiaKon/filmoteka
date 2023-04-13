import * as API from 'api/tmdbApi';
import { useState, useEffect } from 'react';

function useGetReviews(id, searchPath, showReviews) {
  const [reviews, setReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  try {
    useEffect(() => {
      if (!showReviews) {
        return;
      }

      API.getReviews(id, searchPath).then(response => {
        setReviews([...response.results]);
        setTotalResults(response.total_results);
      });
    }, [id, searchPath, showReviews]);
  } catch (error) {}

  return { reviews, totalResults };
}

export default useGetReviews;
