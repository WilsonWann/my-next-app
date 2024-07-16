import { setSiteKey, setSize } from "@/store/captcha/captcha.slice";
import { selectSiteKey, selectSize } from "@/store/captcha/captcha.selector";
import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";

const useCaptcha = () => {
  const siteKey = useAppSelector(selectSiteKey);
  const size = useAppSelector(selectSize);
  const dispatch = useAppDispatch();

  return {
    siteKey,
    size,
    setSiteKey: (siteKey: string) => {
      dispatch(setSiteKey(siteKey));
    },
    setSize: (size: string) => {
      dispatch(setSize(size));
    }
  };
};

export default useCaptcha