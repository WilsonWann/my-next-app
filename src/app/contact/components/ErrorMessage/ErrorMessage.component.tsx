'use client'
import React, { FC } from 'react'
import { FieldErrors } from 'react-hook-form'
import { FormValues } from '../OnlineForm/OnlineForm.component'

type ErrorMessageProps = {
  errors?: FieldErrors<FormValues>
  id: keyof FormValues
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errors, id }) => {

  if (!errors) return null

  const error = errors[id]

  if (!error) return null

  return <p>{error.message}</p>;
}

export default ErrorMessage