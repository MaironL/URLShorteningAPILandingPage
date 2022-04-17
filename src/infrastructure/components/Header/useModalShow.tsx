import { useEffect, useState, useRef } from 'react';

const useModalShow = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const Modal = useRef();

  const showModal = () => {
    //@ts-ignore
    Modal.current.showModal();
  };

  const handleClickOutside = (e: any) => {
    if (e.target === Modal.current) {
      //@ts-ignore
      Modal.current.close();
    }
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
    if (windowSize >= 899) {
      //@ts-ignore
      Modal.current.close();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return { Modal, showModal };
};

export default useModalShow;
