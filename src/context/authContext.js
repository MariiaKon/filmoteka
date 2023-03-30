import { createContext } from 'react';
import useAuth from 'hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { register, login, logout, user, error } = useAuth();
  const value = { register, login, logout, user, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
