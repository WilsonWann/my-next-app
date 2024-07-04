'use server'

import { ResponseType } from '@/types';
import { kv } from '@vercel/kv';

export type PortfolioCaseType = {
  name: string
  title: string
  tags: string[]
  images: string[]
}

export async function getPortfolioCaseByName(portfolioCase: string): Promise<ResponseType<PortfolioCaseType | null>> {

  try {
    const portfolio = await kv.get<PortfolioCaseType>(`portfolioCase:${portfolioCase}`);
    // const portfolio = await kv.get<PortfolioCaseType>();

    if (!portfolio) return { success: true, data: null }

    return { success: true, data: portfolio }
  } catch (error) {
    if (error instanceof Error && error.name === 'UpstashError') {
      return { success: false, message: error.message }
    }
    return { success: false, message: error as string }
  }
}