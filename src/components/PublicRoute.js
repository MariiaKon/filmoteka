import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'context/authContext';

function PublicRoute({ children, restricted = false }) {
  const { user } = useContext(AuthContext);
  const shouldRedirect = user && restricted;

  return shouldRedirect ? <Navigate to="/" /> : children;
}

export default PublicRoute;
