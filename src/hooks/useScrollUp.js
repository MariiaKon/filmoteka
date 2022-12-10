import { useEffect } from 'react';

function useScrollUp(setState) {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.clientHeight < window.scrollY
        ? setState(true)
        : setState(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
}

export default useScrollUp;
