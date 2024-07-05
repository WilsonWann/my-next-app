export type ResponseType<T> = SuccessResponseType<T> | ErrorResponseType

export type SuccessResponseType<T> = {
  success: true
  data: T
}

export type ErrorResponseType = {
  success: false
  message: string
}

export type BlurImageType = {
  src: string
  blurDataURL: string
  height: number
  width: number
}

export type RemoteImageProps = {
  image: string
  fill?: boolean
}