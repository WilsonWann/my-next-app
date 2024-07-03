export type ResponseType<T> = SuccessResponseType<T> | ErrorResponseType

export type SuccessResponseType<T> = {
  success: true
  data: T
}

export type ErrorResponseType = {
  success: false
  message: string
}