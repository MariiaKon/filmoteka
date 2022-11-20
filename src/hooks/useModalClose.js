import { useEffect } from 'react';

function useModalClose(onClick) {
  useEffect(() => {
    const closeOnEsc = e => (e.key === 'Escape' ? onClick() : null);
    document.body.addEventListener('keydown', closeOnEsc);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, [onClick]);
}

export default useModalClose;
