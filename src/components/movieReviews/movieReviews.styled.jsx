import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { ReviewBtn } from 'components/movieDetails/movieDetails.styled';

export const ReviewList = styled.ul`
  margin: 20px 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 15px;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }

  & > p {
    display: inline;
    line-height: 16px;
  }

  & > p:first-child {
    display: block;
    color: ${varsCss.textSecondary};
    font-size: ${varsCss.fontSizeSecondary};
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

export const ShowMoreBtn = styled(ReviewBtn)`
  min-height: fit-content;
  line-height: 16px;
  font-size: ${varsCss.fontSizePrimary};
  font-weight: 700;
  color: ${varsCss.textAccentColor};

  :hover,
  :active {
    color: ${varsCss.textSecondary};
  }
`;
