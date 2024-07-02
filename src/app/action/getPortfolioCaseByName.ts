'use server'

import { kv } from '@vercel/kv';

type PortfolioCaseType = {
  name: string
  title: string
  tags: string[]
  images: string[]
}

type ResponseType<T> = SuccessResponseType<T> | ErrorResponseType

type SuccessResponseType<T> = {
  success: true
  data: T
}

type ErrorResponseType = {
  success: false
  message: unknown
}

export async function getPortfolioCaseByName(portfolioCase: string): Promise<ResponseType<PortfolioCaseType | null>> {

  try {
    const portfolio = await kv.get<PortfolioCaseType>(`portfolioCase:${portfolioCase}`);

    return { success: true, data: portfolio }
  } catch (error) {
    console.error('Error fetching portfolio case:', error);

    return { success: false, message: error }
  }
}