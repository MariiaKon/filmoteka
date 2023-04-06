import * as API from 'api/tmdbApi';
import { useState, useEffect } from 'react';

function useGetReviews(id, searchPath, showReviews) {
  const [reviews, setReviews] = useState([]);

  try {
    useEffect(() => {
      if (!showReviews) {
        return;
      }

      API.getReviews(id, searchPath).then(response => {
        setReviews([...response.results]);
      });
    }, [id, searchPath, showReviews]);
  } catch (error) {}

  return reviews;
}

export default useGetReviews;
