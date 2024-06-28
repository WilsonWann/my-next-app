import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { setDialogOpen } from "@/store/dialog/dialog.slice";
import { selectDialogOpen } from "@/store/dialog/dialog.selector";

const useDialog = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectDialogOpen)

  return {
    dialogOpen: open,
    openDialog: () => {
      dispatch(setDialogOpen(true));
    },
    closeDialog: () => {
      dispatch(setDialogOpen(false));
    },
  };
};

export default useDialog;