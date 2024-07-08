import { NextRequest, NextResponse } from 'next/server';
import uploadImage from '@/lib/aws/uploadImage';

export async function POST(req: NextRequest) {

  const formData = await req.formData();
  const file = formData.get('file') as File;
  console.log('🚀 ~ POST ~ file:', file)

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }

  try {
    const s3Key = `uploads/${file.name}`;
    const url = await uploadImage(file, s3Key);
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error uploading image', error }, { status: 500 });
  }
}
