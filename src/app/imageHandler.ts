import stackedBracelets from "@/assets/stacked-bracelets.jpg";
import weddingVowsAndRings from "@/assets/wedding-vows-and-wedding-rings.jpg";
import weddingVowsAndRingsVertical from "@/assets/wedding-rings-with-wedding-vows.jpg";
import holdingHands from "@/assets/holding-hands.jpg";

import womansNecklace from "@/assets/womans-necklace.jpg";
import detailedSnowflake from "@/assets/detailed-snowflake.jpg";

import moonBracelet from "@/assets/womens-hand-moon-bracelet.jpg";
import goldChainNecklace from "@/assets/gold-chain-necklace-on-corner.jpg";
import youngProfessional from "@/assets/young-professional.jpg";
import galaxyEarrings from "@/assets/galaxy-earrings.jpg";

import modernWatch from "@/assets/modern-jewelry-and-accessories-on-display.jpg";

import makeupAndJewelry from "@/assets/makeup-and-jewelry.jpg";
import gemStonesAndToolsFlatlay from "@/assets/gemstones-and-tools-flatlay.jpg";
import earringsInALine from "@/assets/blue-and-pink-background-with-earrings-in-a-line.jpg";
import { StaticImageData } from "next/image";

const bannerList = [stackedBracelets, weddingVowsAndRings, holdingHands];
const aboutImages = [detailedSnowflake, womansNecklace];
const photosImages = [moonBracelet, goldChainNecklace, youngProfessional, galaxyEarrings];
const mainBannerImage = modernWatch;

const serviceBannerImage = makeupAndJewelry

export type PortfolioType = {
  image: StaticImageData
  children: {
    title: string
    description: string
  }
}

const portfolioImages: PortfolioType[] = [
  {
    image: weddingVowsAndRingsVertical,
    children: {
      title: 'Rings',
      description: 'Wedding'
    }
  },
  {
    image: goldChainNecklace,
    children: {
      title: 'Necklace',
      description: 'Public'
    }
  },
  {
    image: gemStonesAndToolsFlatlay,
    children: {
      title: 'Jewelry',
      description: 'Eternity'
    }
  },
  {
    image: moonBracelet,
    children: {
      title: 'Bracelet',
      description: 'Leisure'
    }
  },
  {
    image: earringsInALine,
    children: {
      title: 'Earrings',
      description: 'Banquet'
    }
  },
  {
    image: modernWatch,
    children: {
      title: 'Watch',
      description: 'Career'
    }
  },
]

export {
  bannerList,
  aboutImages,
  photosImages,
  mainBannerImage,
  serviceBannerImage,
  portfolioImages
}