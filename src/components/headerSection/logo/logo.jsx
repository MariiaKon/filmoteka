import { ReactComponent as LogoSvg } from 'icons/logo.svg';
import { LogoTitle, Navlink } from './logo.styled';

function Logo() {
  return (
    <Navlink to="/">
      <LogoSvg />
      <LogoTitle>Filmoteka</LogoTitle>
    </Navlink>
  );
}

export default Logo;
