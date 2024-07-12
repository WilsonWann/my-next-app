import { ImageResponse } from 'next/og'

type OgImageProps = {
  ogImageTitle: string
  fontData: Buffer | ArrayBuffer
  size: {
    width: number
    height: number
  }
}

const getNewOgImage = (props: OgImageProps) => {

  const { ogImageTitle, fontData, size } = props
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {ogImageTitle}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}

export default getNewOgImage