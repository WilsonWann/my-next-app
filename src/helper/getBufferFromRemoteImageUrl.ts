'use server'

import { BufferWithSrc } from "@/types";

export default async function getBufferFromRemoteImageUrl(imageUrl: string): Promise<BufferWithSrc> {
  const res = await fetch(imageUrl)
  console.log('🚀 ~ getBase64 ~ res:', res)
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
  }

  const arrayBuffer = await res.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  return {
    src: imageUrl,
    buffer
  }
};