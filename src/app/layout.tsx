import { type Metadata } from "next";
import { inter } from "@/app/fonts";
import "./globals.css";
import ReduxProvider from "./Providers/ReduxProvider";
import GoogleMapProvider from "@/app/Providers/GoogleMapProvider";
import CaptchaProvider from "@/app/Providers/CaptchaProvider";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BASE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "陌聲行銷 – 珠寶設計｜珠寶生產｜珠寶保養｜珠寶課程",
  description: "珠寶設計與生產首選陌聲行銷！陌聲提供專業珠寶設計、珠寶生產、珠寶保養、珠寶課程等服務，致力於傾聽客戶需求、展現精湛工藝和卓越品質。",
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode,
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-primary`}>
        <ReduxProvider>
          <GoogleMapProvider>
            <CaptchaProvider>
              <Header />
              <div className="xl:mt-16 mt-[100px]">
                <main className="overflow-x-clip bg-transparent xl:px-1 px-8 md:min-h-main h-wo-main-mobile">
                  {modal}
                  {children}
                  <SpeedInsights />
                </main>
                <Footer />
              </div>
            </CaptchaProvider>
          </GoogleMapProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
