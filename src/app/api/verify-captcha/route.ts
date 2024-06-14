// src/app/api/verify-captcha/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import qs from 'qs';

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const secret = 'ES_6ed243f720d84123a87237bf5395b00b';

  try {
    const response = await axios.post(`https://hcaptcha.com/siteverify`,
      qs.stringify({ secret, response: token }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // 設置正確的內容類型
        }
      });

    const data = response.data;

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Captcha verified successfully.' });
    } else {
      return NextResponse.json({ success: false, message: 'Captcha verification failed.' });
    }
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return NextResponse.json({ success: false, message: 'Server error.' });
  }
}
