import readFontHelper from '@/helper/readFontHelper'
import getNewOgImage from '@/helper/getNewOgImage';
import ogConfig from '@/helper/ogConfig'

export const {
  runtime,
  size,
  contentType
} = ogConfig;

export const alt = 'Portfolio'

export default async function Image() {

  const interSemiBold = await readFontHelper('Inter-SemiBold.ttf')

  return getNewOgImage({
    ogImageTitle: 'Portfolio',
    fontData: interSemiBold,
    size: size,
  })
}

