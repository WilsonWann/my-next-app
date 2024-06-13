'use client'

import { noto } from './fonts'
import { bannerList, aboutImages, photosImages, mainBannerImage } from './imageHandler'
import MainCarousel from "./components/MainCarousel/MainCarousel.component";
import About from "./components/About/About.component";
import Company from "./components/Company/Company.component";
import Photos from "./components/Photos/Photos.component";
import LargeBanner from "./components/LargeBanner/LargeBanner.component";

export default function Home() {
  return (
    <div className={`${noto.className} flex flex-col items-center justify-between`}>
      <MainCarousel id="banner" bannerList={bannerList} className="mb-16" />
      <About id="about" images={aboutImages} className="mb-48" />
      <Company className="mb-48" />
      <Photos images={photosImages} className="mb-48" />
      <LargeBanner image={mainBannerImage} className="mb-8" />
    </div >
  );
}