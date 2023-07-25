import { useEffect } from 'react';

function useModalClose(handlerCloseModal) {
  useEffect(() => {
    const closeOnEsc = e => (e.key === 'Escape' ? handlerCloseModal() : null);
    document.body.addEventListener('keydown', closeOnEsc);

    const closeOnOverlayClick = e =>
      e.target.id === 'overlay' ? handlerCloseModal() : null;
    document.body.addEventListener('click', closeOnOverlayClick);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
      document.body.removeEventListener('click', closeOnOverlayClick);
    };
  }, [handlerCloseModal]);
}

export default useModalClose;
