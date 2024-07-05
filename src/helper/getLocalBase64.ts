'use server'

import { BlurImageType, ResponseType } from "@/types"
import { getPlaiceholder } from "plaiceholder"
import { glob } from 'glob'
import fs from "node:fs/promises";

export default async function getLocalBase64(imageFolder: string): Promise<ResponseType<BlurImageType[]>> {

  try {
    const files = glob.sync(`./public${imageFolder}/*.{jpg,png}`)

    console.log('🚀 ~ getLocalBase64 ~ files:', files)
    const dataArray = await Promise.all(
      files.map(async file => {
        const src = file.replace("public", "").replace(/\\/g, "/");
        console.log('🚀 ~ getLocalBase64 ~ src:', src)
        const buffer = await fs.readFile(file);
        console.log('🚀 ~ getLocalBase64 ~ buffer:', buffer)

        const {
          metadata: { height, width },
          base64: blurDataURL
        } = await getPlaiceholder(buffer)

        return { src, blurDataURL, height, width, }
      })
    )

    return {
      success: true,
      data: dataArray
    }

  } catch (e) {
    console.log('🚀 ~ getBase64 ~ e:', e)
    if (e instanceof Error) return { success: false, message: e.message, }

    return { success: false, message: e as string }
  }
};
