import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/authContext';
import { ReactComponent as ShowSvg } from 'assets/icons/password_show.svg';
import { ReactComponent as HideSvg } from 'assets/icons/password_hide.svg';
import { ReactComponent as EnterSvg } from 'assets/icons/enter.svg';
import {
  Form,
  Label,
  Input,
  EyeBtn,
  SubmitBtn,
  AltEnterMsg,
  AltEnterLink,
} from './authForm.styled';

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleChange = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await login(userCredentials);
      navigate('/');
    } catch (error) {
      console.log(error);
    }

    setUserCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <AltEnterMsg>
        Don't have an account yet?
        <AltEnterLink to={'/auth/register'}>
          Sign up <EnterSvg />
        </AltEnterLink>
      </AltEnterMsg>
      <Form onSubmit={handleSubmit}>
        Login
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            required={true}
            onChange={handleChange}
            value={userCredentials.email}
          />
        </Label>
        <Label>
          Password
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            autoComplete="on"
            required={true}
            onChange={handleChange}
            value={userCredentials.password}
          />
          <EyeBtn
            type="button"
            onClick={togglePasswordVisibility}
            children={isPasswordVisible ? <HideSvg /> : <ShowSvg />}
          />
        </Label>
        <SubmitBtn type="submit" children={'Login'} />
      </Form>
    </>
  );
}

export default LoginForm;
