import { useEffect, useRef } from 'react'

const useCloseMenuOnClickOutside = (
  isMenuOpen: boolean,
  setIsMenuOpen: (isMenuOpen: boolean) => void
) => {

  const navRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("wheel", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("wheel", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  return navRef
}

export default useCloseMenuOnClickOutside