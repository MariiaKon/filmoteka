import { ReactComponent as ErrorSvg } from 'assets/icons/error.svg';
import { ErrorBox, ErrorMsg } from './error.styled';

function Error({ children }) {
  return (
    <ErrorBox>
      <ErrorSvg />
      <ErrorMsg>{children}</ErrorMsg>
    </ErrorBox>
  );
}

export default Error;
