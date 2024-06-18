'use client'

import { FC, createContext, useState, useRef, useContext, useEffect, SetStateAction, Dispatch } from "react"
import Captcha from './contact/components/Captcha/Captcha.component';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { verifyCaptcha } from "./action/verifyCaptcha";
import { usePathname } from "next/navigation";

interface CaptchaContextProps {
  renderCaptcha: () => JSX.Element | null;
  triggerVerify: () => void;
  captchaVerified: boolean;
  verifiedResponse: { success: boolean; message: string; } | null;
}

const CaptchaContext = createContext<CaptchaContextProps | undefined>(undefined);

const CaptchaProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [verifiedResponse, setVerifiedResponse] = useState<{ success: boolean; message: string; } | null>(null);

  const pathname = usePathname();

  const captchaRef = useRef<HCaptcha>(null);

  useEffect(() => {
    setCaptchaVerified(false);
  }, [pathname]);

  const triggerVerify = () => {
    if (captchaRef.current) {
      captchaRef.current.execute()
    }
  };

  const handleCaptchaChange = async (token: string | null) => {

    if (token && captchaRef.current) {

      const responseData = await verifyCaptcha(token)

      setVerifiedResponse(responseData)
    }
  };

  const renderCaptcha = () => {
    return (
      <Captcha
        ref={captchaRef}
        onVerify={async (token) => {
          await handleCaptchaChange(token)
          setCaptchaVerified(true)
        }}
      />
    );
  };

  return (
    <CaptchaContext.Provider value={{ renderCaptcha, triggerVerify, captchaVerified, verifiedResponse }}>
      {children}
    </CaptchaContext.Provider>
  )
}

export default CaptchaProvider

export const useCaptcha = () => {
  const context = useContext(CaptchaContext);
  if (!context) {
    throw new Error('useCaptcha must be used within a CaptchaProvider');
  }
  return context;
}