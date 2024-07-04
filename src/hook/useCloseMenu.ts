import { useEffect } from 'react'
import useMenu from './useMenu';

const useCloseMenu = () => {
  const { setIsMenuOpen } = useMenu()

  useEffect(() => {
    return () => {
      setIsMenuOpen(false)
    };
  }, []);
}

export default useCloseMenu