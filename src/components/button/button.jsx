import { Btn } from 'components/button/button.styled';

function Button({ type, children, onClick }) {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;
