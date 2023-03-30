import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { app } from 'api/firebaseConfig';

function useAuth() {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
      setError(null);
    });
  }, [auth, user]);

  const register = async ({ email, password, displayName }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    res.user.displayName = displayName;
    console.log(res);
    return res;
    // setError(null);
  };

  const login = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
    // setError(null);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return { register, login, logout, user, error };
}

export default useAuth;
