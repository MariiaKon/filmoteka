import { useEffect } from 'react';

function useModalClose(onClick) {
  useEffect(() => {
    const closeOnEsc = e => (e.key === 'Escape' ? onClick() : null);
    document.body.addEventListener('keydown', closeOnEsc);

    const closeOnOverlayClick = e =>
      e.target.id === 'overlay' ? onClick() : null;
    document.body.addEventListener('click', closeOnOverlayClick);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
      document.body.removeEventListener('click', closeOnOverlayClick);
    };
  }, [onClick]);
}

export default useModalClose;
