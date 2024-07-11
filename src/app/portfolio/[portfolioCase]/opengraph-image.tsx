import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName'
import { ImageResponse } from 'next/og'
import { PortfolioCaseParamsProps } from './page'

// Route segment config
export const runtime = 'edge'

export const contentType = 'image/png'

export const size = {
  width: 1200,
  height: 630,
}

export default async function Image({ params: { portfolioCase } }: PortfolioCaseParamsProps) {
  const response = await getPortfolioCaseByName(portfolioCase)

  let postTitle: string = ''
  if (!response.success || !response.data) {
    postTitle = 'Not Found'
  } else {
    const { title } = response.data
    postTitle = title
  }


  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {postTitle}
      </div>
    ),
    {
      ...size,
    }
  )
}