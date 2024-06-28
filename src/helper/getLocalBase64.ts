import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(imageUrl: string) {

  let blurDataURL, imageHeight, imageWidth
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

    blurDataURL = base64
    imageHeight = height
    imageWidth = width
  } catch (e) {
    if (e instanceof Error) console.log(e.stack)
  }
  finally {
    return {
      blurDataURL,
      imageUrl,
      height: imageHeight,
      width: imageWidth,
    };
  }
};
