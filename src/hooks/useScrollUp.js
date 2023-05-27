import { useEffect } from 'react';

function useScrollUp(setState) {
  useEffect(() => {
    const handlerScroll = () => {
      document.documentElement.clientHeight < window.scrollY
        ? setState(true)
        : setState(false);
    };

    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  });
}

export default useScrollUp;
