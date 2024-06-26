import { CaptchaContext } from "@/app/Providers/CaptchaProvider";
import { useContext } from "react";

const useCaptcha = () => {
  const context = useContext(CaptchaContext);
  if (!context) {
    throw new Error("useCaptcha must be used within a CaptchaProvider");
  }
  return context;
};

export default useCaptcha