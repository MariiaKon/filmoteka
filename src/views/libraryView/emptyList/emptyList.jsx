import { Info, LinkToHome } from './emptyList.styled';

function EmptyList() {
  return (
    <Info>
      There is no movies yet.
      <LinkToHome to="/">Let's add some?</LinkToHome>
    </Info>
  );
}

export default EmptyList;
