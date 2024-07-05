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
    const portfolio = await kv.hgetall(`portfolio:name:${portfolioCase}`);

    if (!portfolio) return { success: true, data: null }

    return { success: true, data: portfolio as PortfolioCaseType }
  } catch (error) {
    console.log('🚀 ~ getPortfolioCaseByName ~ error:', error)
    if (error instanceof Error && error.name === 'UpstashError') {
      return { success: false, message: error.message }
    }
    return { success: false, message: error as string }
  }
}