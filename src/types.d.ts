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

export type BufferWithSrc = {
  src: string
  buffer: Buffer
}


export type RouteDetail = {
  mainName: string
  altName: string
  onClick?: () => void
  routes?: Route[]
} & (IndexType | NonIndexType)

type IndexType = {
  indexPage: true
}

type NonIndexType = {
  indexPage?: false
  route: string
}

export type LinkWithRoutesProps = {
  linkClassName?: string
  routeDetail: RouteDetail
  routes: RouteDetail[]
  header: boolean | undefined
}