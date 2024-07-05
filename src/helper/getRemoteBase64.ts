'use server'

import { BlurImageType, ResponseType } from "@/types"
import { getPlaiceholder } from "plaiceholder"


export default async function getRemoteBase64(imageUrl: string): Promise<ResponseType<BlurImageType | null>> {

  try {
    const res = await fetch(imageUrl)
    console.log('🚀 ~ getBase64 ~ res:', res)
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()
    const fileBuffer = Buffer.from(buffer)

    const {
      metadata: { height, width },
      base64
    } = await getPlaiceholder(fileBuffer)

    return {
      success: true,
      data: {
        src: imageUrl,
        blurDataURL: base64,
        height,
        width,
      }
    }
  } catch (e) {
    console.log('🚀 ~ getBase64 ~ e:', e)
    if (e instanceof Error) return { success: false, message: e.message, }

    return { success: false, message: e as string }
  }
};
