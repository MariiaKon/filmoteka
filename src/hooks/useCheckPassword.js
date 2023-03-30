import { useState, useEffect } from 'react';

function useCheckPassword(password, confirmPassword) {
  const [isEqual, setIsEqual] = useState(false);

  useEffect(() => {
    setIsEqual(password === confirmPassword);
  }, [password, confirmPassword]);

  return isEqual;
}

export default useCheckPassword;
