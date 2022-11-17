import { Btn } from 'components/button/button.styled';

export function Button({ type = 'submit', children, onClick }) {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}
