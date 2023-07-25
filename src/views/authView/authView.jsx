import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import RegisterForm from 'components/authForm/registerForm';
import LoginForm from 'components/authForm/loginForm';
import { Container } from 'components/header/header.styled';

function AuthView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setSearchParams(searchParams => '');
  }, [searchParams, setSearchParams]);

  return (
    <Container>
      {location.pathname.includes('login') && <LoginForm />}
      {location.pathname.includes('register') && <RegisterForm />}
    </Container>
  );
}

export default AuthView;
