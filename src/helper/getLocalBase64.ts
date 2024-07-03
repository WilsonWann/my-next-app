import { ResponseType } from "@/types"
import { getPlaiceholder } from "plaiceholder"

export type BlurImageType = {
  src: string
  blurDataURL: string
  height: number
  width: number
}

export default async function getBase64(imageUrl: string): Promise<ResponseType<BlurImageType | null>> {

  try {

    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const {
      metadata: { height, width },
      base64
    } = await getPlaiceholder(Buffer.from(buffer))

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
    if (e instanceof Error) return { success: false, message: e.message, }

    return { success: false, message: e as string }
  }
};
