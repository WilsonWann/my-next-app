import AWS from 'aws-sdk'
import fs from 'fs';

import dotenv from 'dotenv'
dotenv.config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
const region = process.env.AWS_REGION!;
const bucketName = process.env.S3_BUCKET_NAME!;

const s3 = new AWS.S3({ accessKeyId, secretAccessKey, region });

const uploadImage = async (file: File, key: string) => {

  const buffer = await file.arrayBuffer()
  const fileBuffer = Buffer.from(buffer)

  if (!bucketName) throw new Error('Bucket name not set');

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileBuffer,
    ContentType: file.type || 'application/octet-stream',
  };

  const data = await s3.upload(params).promise();
  return data.Location;
}

export default uploadImage
