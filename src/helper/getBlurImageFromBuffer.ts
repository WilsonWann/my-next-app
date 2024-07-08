'use server'

import { BlurImageType } from "@/types"
import { getPlaiceholder } from "plaiceholder"

export default async function getBlurImageFromBuffer(buffer: Buffer): Promise<Omit<BlurImageType, 'src'>> {
  const {
    metadata: { height, width },
    base64: blurDataURL,
  } = await getPlaiceholder(buffer)

  return { blurDataURL, height, width, }
};
