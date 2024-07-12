import readFontHelper from '@/helper/readFontHelper'
import getNewOgImage from '@/helper/getNewOgImage';
import ogConfig from '@/helper/ogConfig'

export const {
  runtime,
  size,
  contentType
} = ogConfig;

export const alt = 'News'

export default async function Image() {

  const interSemiBold = await readFontHelper('Inter-SemiBold.ttf')

  return getNewOgImage({
    ogImageTitle: 'News',
    fontData: interSemiBold,
    size: size,
  })
}

