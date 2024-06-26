import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { setIsMenuOpen } from "@/store/menu/menu.slice";
import { selectIsMenuOpen } from "@/store/menu/menu.selector";

const useMenu = () => {
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const dispatch = useAppDispatch();

  return {
    isMenuOpen,
    setIsMenuOpen: (isMenuOpen: boolean) => {
      dispatch(setIsMenuOpen(isMenuOpen));
    },
  };
};

export default useMenu;