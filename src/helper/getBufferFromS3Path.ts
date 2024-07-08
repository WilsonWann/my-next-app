'use server'

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import streamToBuffer from "./streamToString";
import { Readable } from "stream";
import { BufferWithSrc } from "@/types";

const bucket = process.env.S3_BUCKET_NAME!;
const region = process.env.AWS_REGION!
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;

const s3Client = new S3Client({
  region,
  credentials: { accessKeyId, secretAccessKey, },
});

export default async function getBufferFromS3Path(key: string): Promise<BufferWithSrc> {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  const response = await s3Client.send(command);

  const buffer = await streamToBuffer(response.Body as Readable);
  const base64String = buffer.toString('base64') as string;
  const mimeType = response.ContentType;

  return {
    src: `data:${mimeType};base64,${base64String}`,
    buffer
  }
};
