import { useState } from 'react';
import { ReviewList, ReviewItem, ShowMoreBtn } from './movieReviews.styled';

function MovieReviews({ reviews }) {
  const [showFullReview, setShowFullReview] = useState({ show: false, id: '' });
  const contentLength = 50;

  const showCropContent = str => {
    let content = str.split(' ');

    if (content.length > contentLength) {
      content.length = contentLength;
      return content.join(' ');
    }
    return str;
  };

  return (
    <ReviewList>
      {reviews.map(review => {
        return (
          <ReviewItem key={review.id}>
            <p>{review.author}</p>
            <p>
              {showFullReview.show && showFullReview.id === review.id
                ? review.content
                : showCropContent(review.content)}
            </p>
            {showFullReview.id !== review.id &&
              review.content.split(' ').length > contentLength && (
                <ShowMoreBtn
                  type="button"
                  onClick={() => {
                    setShowFullReview({ show: true, id: review.id });
                  }}
                  children={'show more ...'}
                />
              )}
          </ReviewItem>
        );
      })}
    </ReviewList>
  );
}

export default MovieReviews;
