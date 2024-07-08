'use server'

import { BlurImageType, ResponseType } from "@/types"
import getBlurImageFromBuffer from "./getBlurImageFromBuffer"
import getBufferFromRemoteImageUrl from "./getBufferFromRemoteImageUrl"

export default async function getRemoteBase64(imageUrl: string): Promise<ResponseType<BlurImageType | null>> {

  try {

    const { src, buffer } = await getBufferFromRemoteImageUrl(imageUrl)
    const blurImageProps = await getBlurImageFromBuffer(buffer)

    return {
      success: true,
      data: {
        src,
        ...blurImageProps
      }
    }
  } catch (e) {
    console.log('🚀 ~ getBase64 ~ e:', e)
    if (e instanceof Error) return { success: false, message: e.message, }

    return { success: false, message: e as string }
  }
};
