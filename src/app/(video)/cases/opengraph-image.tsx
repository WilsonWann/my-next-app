import readFontHelper from '@/helper/readFontHelper'
import getNewOgImage from '@/helper/getNewOgImage';
import ogConfig from '@/helper/ogConfig'

export const {
  runtime,
  size,
  contentType
} = ogConfig;

export const alt = 'Cases'

export default async function Image() {

  const interSemiBold = await readFontHelper('Inter-SemiBold.ttf')

  return getNewOgImage({
    ogImageTitle: 'Cases',
    fontData: interSemiBold,
    size: size,
  })
}

