'use client'
import stackedBracelets from "@/assets/stacked-bracelets.jpg";
import weddingVowsAndRings from "@/assets/wedding-vows-and-wedding-rings.jpg";
import holdingHands from "@/assets/holding-hands.jpg";

import womansNecklace from "@/assets/womans-necklace.jpg";
import detailedSnowflake from "@/assets/detailed-snowflake.jpg";

import moonBracelet from "@/assets/womens-hand-moon-bracelet.jpg";
import goldChainNecklace from "@/assets/gold-chain-necklace-on-corner.jpg";
import youngProfessional from "@/assets/young-professional.jpg";
import galaxyEarrings from "@/assets/galaxy-earrings.jpg";

import smallPumpkins from "@/assets/laughter-in-the-sun.jpg";

import MainCarousel from "./components/MainCarousel/MainCarousel.component";
import About from "./components/About/About.component";
import Company from "./components/Company/Company.component";
import Photos from "./components/Photos/Photos.component";
import LargeBanner from "./components/LargeBanner/LargeBanner.component";

const bannerList = [stackedBracelets, weddingVowsAndRings, holdingHands];
const aboutImages = [detailedSnowflake, womansNecklace];
const photosImages = [moonBracelet, goldChainNecklace, youngProfessional, galaxyEarrings];
const largeBannerImage = smallPumpkins;

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between">
      <MainCarousel id="banner" bannerList={bannerList} className="mb-16" />
      <About id="about" images={aboutImages} className="mb-48" />
      <Company className="mb-32" />
      <Photos images={photosImages} className="md:mb-36 mb-24" />
      <LargeBanner image={largeBannerImage} className="mb-8" />
    </div >
  );
}