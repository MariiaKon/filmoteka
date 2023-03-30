import { useLocation } from 'react-router-dom';
import RegisterForm from 'components/authForm/registerForm';
import LoginForm from 'components/authForm/loginForm';
import { Container } from 'components/header/header.styled';

function AuthView() {
  const location = useLocation();

  return (
    <Container>
      {location.pathname.includes('login') && <LoginForm />}
      {location.pathname.includes('register') && <RegisterForm />}
    </Container>
  );
}

export default AuthView;
