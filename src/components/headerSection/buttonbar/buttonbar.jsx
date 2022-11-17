import { ButtonBar, Button } from './buttonbar.styled';

function LibraryBtns() {
  return (
    <ButtonBar>
      <li>
        <Button to="/library/watched">Watched</Button>
      </li>
      <li>
        <Button to="/library/queue">Queue</Button>
      </li>
    </ButtonBar>
  );
}

export default LibraryBtns;
