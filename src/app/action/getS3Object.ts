import { BlurImageType, ResponseType } from "@/types";
import getBlurImageFromBuffer from "@/helper/getBlurImageFromBuffer";
import getBufferFromS3Path from "@/helper/getBufferFromS3Path";


export async function getS3Image(s3Path: string): Promise<ResponseType<BlurImageType>> {

  try {
    const { src, buffer } = await getBufferFromS3Path(s3Path)
    const blurImageProps = await getBlurImageFromBuffer(buffer)
    console.log('🚀 ~ getS3Image ~ blurImageProps:', blurImageProps)

    return {
      success: true,
      data: {
        src,
        ...blurImageProps
      }
    }
  } catch (error) {
    console.error("Error reading object from S3:", error);
    return { success: false, message: error as string }
  }
}
