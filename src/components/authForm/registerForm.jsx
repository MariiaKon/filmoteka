import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/authContext';
import useCheckPassword from 'hooks/useCheckPassword';
import { ReactComponent as ShowSvg } from 'assets/icons/password_show.svg';
import { ReactComponent as HideSvg } from 'assets/icons/password_hide.svg';
import { ReactComponent as EnterSvg } from 'assets/icons/enter.svg';
import {
  Form,
  Label,
  Input,
  EyeBtn,
  SubmitBtn,
  Error,
  AltEnterMsg,
  AltEnterLink,
} from './authForm.styled';

function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
  });
  const isEqual = useCheckPassword(userCredentials.password, confirmPassword);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleChange = e => {
    if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }

    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await register(userCredentials);
      navigate('/');
    } catch (error) {
      console.log(error);
    }

    setConfirmPassword('');
    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <AltEnterMsg>
        Already have an account?
        <AltEnterLink to={'/auth/login'}>
          Log In <EnterSvg />
        </AltEnterLink>
      </AltEnterMsg>
      <Form onSubmit={handleSubmit}>
        Register
        <Label>
          Name
          <Input
            type="text"
            name="displayName"
            placeholder="Enter your name"
            autoComplete="on"
            required={true}
            onChange={handleChange}
            value={userCredentials.displayName}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="moviewatcher@mail.com"
            autoComplete="on"
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
            placeholder="Enter at least 6 carachters"
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
        <Label>
          Confirm password
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Repeat your password"
            required={true}
            onChange={handleChange}
            value={confirmPassword}
          />
          <EyeBtn
            type="button"
            onClick={togglePasswordVisibility}
            children={isPasswordVisible ? <HideSvg /> : <ShowSvg />}
          />
        </Label>
        {!isEqual && <Error children={'Passwords do not match'} />}
        <SubmitBtn type="submit" children={'Register'} />
      </Form>
    </>
  );
}

export default RegisterForm;
