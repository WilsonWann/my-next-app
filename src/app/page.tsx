'use client'
import slicedOranges from "@/assets/sliced-oranges.jpg";
import orangeWithLeaves from "@/assets/small-orange-pumpkin-with-green-leaves-behind.jpg";
import orangePile from "@/assets/fresh-oranges-pile.jpg";
import anOrangeBasket from "@/assets/an-orange-basket.jpg";
import paintingFrame from "@/assets/wet-orange-and-white-paint-filling-frame.jpg";
import glassOfOrangeJuice from "@/assets/a-full-glass-of-fresh-orange-juice.jpg";
import soManyOranges from "@/assets/so-many-oranges.jpg";
import pumpkinStems from "@/assets/pumpkin-stem-close-up.jpg";
import freshSqueezedOrangeJuice from "@/assets/fresh-squeezed-orange-juice.jpg";
import smallPumpkins from "@/assets/small-pumpkins.jpg";

import MainCarousel from "./components/MainCarousel/MainCarousel.component";
import About from "./components/About/About.component";
import Company from "./components/Company/Company.component";
import Photos from "./components/Photos/Photos.component";
import LargeBanner from "./components/LargeBanner/LargeBanner.component";

const bannerList = [slicedOranges, orangeWithLeaves, orangePile];
const aboutImages = [paintingFrame, anOrangeBasket];
const photosImages = [glassOfOrangeJuice, soManyOranges, pumpkinStems, freshSqueezedOrangeJuice];
const largeBannerImage = smallPumpkins;

export default function Home() {

  return (
    <div className="direct-mb-32 flex flex-col items-center justify-between">
      <MainCarousel id="banner" bannerList={bannerList} />
      <About id="about" images={aboutImages} />
      <Company />
      <Photos images={photosImages} />
      <LargeBanner image={largeBannerImage} />
    </div >
  );
}