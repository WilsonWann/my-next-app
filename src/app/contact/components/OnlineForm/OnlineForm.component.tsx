'use client'

import React, { FC, FormEvent, useRef } from 'react'
import { noto } from '@/app/fonts'
import { useForm, Resolver, Controller, FieldErrors } from 'react-hook-form';
import Captcha from '../Captcha/Captcha.component'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import ErrorMessage from '../ErrorMessage/ErrorMessage.component';
import { verifyCaptcha } from '@/app/action/verifyCaptcha';

const ContactFormArray = [
  {
    id: 'name' as const,
    label: '客戶名稱/NAME'
  },
  {
    id: 'phone' as const,
    label: '聯絡電話/PHONE'
  },
  {
    id: 'lineId' as const,
    label: 'LINE ID'
  },
  {
    id: 'message' as const,
    label: '留言/MESSAGE'
  }
]

export type FormValues = {
  name: string;
  phone: string;
  lineId: string;
  message: string;
  hcaptcha: string | null;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: {},
    errors: {},
  };
};

type OnlineFormProps = {
  className?: string
}
const OnlineForm: FC<OnlineFormProps> = ({ className = '' }) => {

  const {
    getValues,
    control,
    register,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({ resolver });

  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptchaChange = (token: string | null) => {
    setValue('hcaptcha', token);
    if (token && captchaRef.current) {
      onSubmit(); // 驗證成功後調用 handleSubmit
    }
  };

  const onSubmit = async () => {
    const data = getValues()

    const { hcaptcha } = data
    console.log('🚀 ~ onSubmit ~ hcaptcha:', hcaptcha)

    if (!hcaptcha) {
      alert('Please complete the captcha.');
      return;
    }

    const responseData = await verifyCaptcha(hcaptcha)

    if (responseData.success) {
      alert('Form submitted successfully.');
      //* do something... 
    } else {
      alert('Captcha verification failed.');
    }
  };
  const handleFormSubmitWithCaptcha = async (event: FormEvent) => {
    event.preventDefault();
    if (captchaRef.current) {
      captchaRef.current.execute()
    }
  };

  return <div className={`flex flex-col justify-between items-baseline gap-y-4 ${className}`}>
    <h2 className="text-title">線上表單</h2>
    <form
      className={`${noto.className} flex flex-col justify-between items-baseline gap-12`}
      onSubmit={handleFormSubmitWithCaptcha}
    >

      {ContactFormArray.map((contactForm, index) => {
        const { id, label } = contactForm
        return (
          <div key={index} className="flex flex-col justify-between items-baseline">
            <label htmlFor={id}>{label}</label>
            <input {...register(id)} className="bg-transparent w-96 border-b border-title focus:outline-none" />
            <ErrorMessage errors={errors} id={id} />
          </div>
        )
      })}
      <div className="flex flex-col justify-between items-baseline">
        <Controller
          name="hcaptcha"
          control={control}
          render={({ field }) => (
            <Captcha
              ref={captchaRef}
              onVerify={handleCaptchaChange} />
          )} />
        {errors?.hcaptcha && <p>{errors.hcaptcha.message}</p>}
      </div>

      <button type="submit" className="self-end">送出</button>
    </form>
  </div>
}

export default OnlineForm



