import { useEffect } from 'react';

function useModalClose(closeModalHandler) {
  useEffect(() => {
    const closeOnEsc = e => (e.key === 'Escape' ? closeModalHandler() : null);
    document.body.addEventListener('keydown', closeOnEsc);

    const closeOnOverlayClick = e =>
      e.target.id === 'overlay' ? closeModalHandler() : null;
    document.body.addEventListener('click', closeOnOverlayClick);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
      document.body.removeEventListener('click', closeOnOverlayClick);
    };
  }, [closeModalHandler]);
}

export default useModalClose;
