"use client";

import React, { FC } from "react";
import { noto } from "@/app/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { UserSchema } from "@/zodSchema/UserSchema";
import InputWithLabel from "../InputWithLabel/InputWithLabel.component";
import useDialog from "@/hook/useDialog";
import MessageDialog from "@/components/MessageDialog.component";
import { ContactFormArray } from "@/app/const/ContactFormArray";
import useCaptchaContext from "@/hook/useCaptchaContext";
import Captcha from "../Captcha/Captcha.component";

export type FormValues = {
  name: string;
  phone: string;
  lineId: string;
  message: string;
};

type Props = {
  className?: string;
};
const OnlineForm: FC<Props> = ({ className = "" }) => {

  const { captchaRef, onVerify, resetCaptcha, verifiedResponse } = useCaptchaContext();
  const { dialogOpen, openDialog, closeDialog } = useDialog();

  const methods = useForm<FormValues>({
    mode: "onSubmit",
    resolver: zodResolver(UserSchema),
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    if (!verifiedResponse || !verifiedResponse.success) {
      return;
    }
    //* submit form here...
    openDialog()
    //TODO:
    //* await submitForm(values);
  };

  const resetForm = () => methods.reset();

  const onCloseDialog = () => {
    closeDialog()
    resetForm()
    resetCaptcha()
  }

  return (
    <>
      <div
        className={`flex flex-col items-baseline justify-between gap-y-8 ${className}`}
      >
        <h2 className="w-full text-center text-3xl font-bold text-secondary md:mb-0 md:text-start">
          線上表單
        </h2>
        <FormProvider {...methods}>
          <form
            className={`${noto.className} flex w-full flex-col items-center justify-between gap-12 md:w-[450px] md:items-baseline`}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {ContactFormArray.map(({ id, label }, index) => (
              <InputWithLabel
                key={index}
                id={id}
                label={label}
                errors={methods.formState.errors}
              />
            ))}
            <div className="flex flex-col items-baseline justify-between">
              <Captcha
                ref={captchaRef}
                onVerify={onVerify}
              />
            </div>
            <div className="flex w-full items-center justify-center gap-12 md:justify-end md:gap-4">
              <Button
                type="reset"
                className="bg-red-600 text-white"
                onClick={resetForm}
                variant="destructive"
              >
                清除
              </Button>
              <Button
                type="submit"
                className="bg-secondary text-white hover:bg-secondary-foreground"
                disabled={!verifiedResponse || !verifiedResponse.success}
              >
                送出
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <MessageDialog
        open={dialogOpen}
        closeDialog={onCloseDialog}
        content={methods.getValues()}
      />
    </>
  );
};

export default OnlineForm;
