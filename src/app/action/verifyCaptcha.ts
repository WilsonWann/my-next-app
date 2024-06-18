'use server'

import axios from "axios";
import qs from 'qs';

export async function verifyCaptcha(token: string) {

  const secret = process.env.HCAPTCHA_SECRET!

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
      return { success: true, message: 'Captcha verified successfully.' }
    } else {
      return { success: false, message: 'Captcha verification failed.' }
    }
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return { success: false, message: 'Server error.' }
  }
}