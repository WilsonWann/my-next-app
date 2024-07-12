import { PortfolioCaseParamsProps } from './page'
import readFontHelper from '@/helper/readFontHelper';
import getNewOgImage from '@/helper/getNewOgImage';
import ogConfig from '@/helper/ogConfig'

export const {
  runtime,
  size,
  contentType
} = ogConfig;

export default async function Image({ params: { portfolioCase } }: PortfolioCaseParamsProps) {

  const interSemiBold = await readFontHelper('Inter-SemiBold.ttf')

  return getNewOgImage({
    ogImageTitle: portfolioCase,
    fontData: interSemiBold,
    size: size,
  })
}

