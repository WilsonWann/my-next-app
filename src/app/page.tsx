import { type Metadata } from 'next';
import { noto } from '@/app/fonts'
import { bannerList, aboutImages, photosImages, mainBannerImage } from './imageHandler'
import MainCarousel from "./components/MainCarousel/MainCarousel.component";
import About from "./components/About/About.component";
import Company from "./components/Company/Company.component";
import Photos from "./components/Photos/Photos.component";
import LargeBanner from "./components/LargeBanner/LargeBanner.component";

const title = "陌聲行銷 – 珠寶設計｜珠寶生產｜珠寶保養｜珠寶課程"

const ogImageObj = {
  alt: title,
  url: '/portfolio/bracelet/stacked-bracelets.jpg',
  width: 1200,
  height: 630
}

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: title,
    description: "珠寶設計與生產首選陌聲行銷！陌聲提供專業珠寶設計、珠寶生產、珠寶保養、珠寶課程等服務，致力於傾聽客戶需求、展現精湛工藝和卓越品質。",
    siteName: "Musense Jewelry Design",
    images: [ogImageObj],
  },
  twitter: {
    images: [ogImageObj]
  },
};

export default function Home() {

  return (
    <div className={`${noto.className} flex flex-col items-center justify-between snap-y`}>
      <MainCarousel id="banner" bannerList={bannerList} className="mb-16 snap-start" />
      <About id="about" images={aboutImages} className="mb-48 snap-start" />
      <Company className="mb-48 snap-start" />
      <Photos images={photosImages} className="md:mb-48 mb-16 snap-start" />
      <LargeBanner image={mainBannerImage} className="mb-8 snap-start" />
    </div >
  );
}