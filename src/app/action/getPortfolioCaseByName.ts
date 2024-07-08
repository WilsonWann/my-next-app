'use server'

import { ResponseType } from '@/types';
import { kv } from '@vercel/kv';
import { revalidateTag } from 'next/cache'

export type PortfolioCaseType = {
  name: string
  title: string
  tags: string[]
  images: string[]
  imageFolder: string
}

export async function getPortfolioCaseByName(portfolioCase: string): Promise<ResponseType<PortfolioCaseType | null>> {

  revalidateTag(`portfolio:name:${portfolioCase}`)
  try {
    const portfolio = await kv.hgetall(`portfolio:name:${portfolioCase}`);

    if (!portfolio) return { success: true, data: null };

    return { success: true, data: portfolio as PortfolioCaseType }
  } catch (error) {
    if (error instanceof Error && error.name === 'UpstashError') {
      console.error('UpstashError:', error.message);
      return { success: false, message: error.message };
    }

    console.error('Unexpected error:', error);
    return { success: false, message: (error as Error).message || 'An unexpected error occurred' };
  }
}