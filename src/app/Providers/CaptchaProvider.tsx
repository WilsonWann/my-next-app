"use client";

import {
  FC,
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import Captcha from "@/app/contact/components/Captcha/Captcha.component";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { verifyCaptcha } from "@/app/action/verifyCaptcha";
import { usePathname } from "next/navigation";

interface CaptchaContextProps {
  renderCaptcha: () => JSX.Element | null;
  triggerVerify: () => void;
  resetVerify: () => void;
  captchaVerified: boolean;
  verifiedResponse: { success: boolean; message: string } | null;
}

export const CaptchaContext = createContext<CaptchaContextProps | undefined>(
  undefined,
);

const CaptchaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [verifiedResponse, setVerifiedResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const pathname = usePathname();

  const captchaRef = useRef<HCaptcha>(null);

  useEffect(() => {
    setCaptchaVerified(false);
  }, [pathname]);

  const triggerVerify = () => {
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  };

  const resetVerify = () => {
    if (captchaRef.current) {
      captchaRef.current.resetCaptcha();
      setVerifiedResponse(null);
      setCaptchaVerified(false);
    }
  };

  const handleCaptchaChange = async (token: string | null) => {
    if (token && captchaRef.current) {
      const responseData = await verifyCaptcha(token);

      setVerifiedResponse(responseData);
    }
  };

  const renderCaptcha = () => {
    return (
      <Captcha
        ref={captchaRef}
        onVerify={async (token) => {
          await handleCaptchaChange(token);
          setCaptchaVerified(true);
        }}
      />
    );
  };

  return (
    <CaptchaContext.Provider
      value={{
        renderCaptcha,
        triggerVerify,
        resetVerify,
        captchaVerified,
        verifiedResponse,
      }}
    >
      {children}
    </CaptchaContext.Provider>
  );
};

export default CaptchaProvider;

