import slicedOranges from "@/assets/sliced-oranges.jpg";
import orange from "@/assets/small-orange-pumpkin-with-green-leaves-behind.jpg";
import orangePile from "@/assets/fresh-oranges-pile.jpg";
import orangeInGrass from "@/assets/orange-in-grass.jpg";
import anOrangeBasket from "@/assets/an-orange-basket.jpg";
import grass from "@/assets/photo-in-macro-of-wet-green-grass.jpg";
import paintingFrame from "@/assets/wet-orange-and-white-paint-filling-frame.jpg";
import Carousel from "./components/Carousel/Carousel.component";
import Image from "next/image";

const bannerList = [slicedOranges, orange, orangePile];

export default function Home() {
  return (
    <>
      {/* //* carousel */}
      <div className="relative mb-32 w-full">
        <Carousel bannerList={bannerList} />
      </div>
      {/* //* left: image */}
      {/* //* right: text: to left fade-in */}
      <div className="relative w-full">
        <div className="h-screen">
          <Image
            src={paintingFrame}
            placeholder={"blur"}
            blurDataURL={paintingFrame.blurDataURL}
            alt={""}
            sizes="100vw"
            className="absolute left-0 top-14 z-10 h-[617px] w-[1010px] object-cover object-center"
          />
          <Image
            src={anOrangeBasket}
            placeholder={"blur"}
            blurDataURL={anOrangeBasket.blurDataURL}
            alt={""}
            sizes="100vw"
            className="absolute left-14 z-20 h-[617px] w-[1010px] object-cover object-top"
          />
        </div>
        <div></div>
      </div>
      {/* //* left: text: to right fade-in */}
      {/* //* right: text */}
      <div>
        <div></div>
        <div></div>
      </div>
      {/* //* one: image: to up fade-in */}
      {/* //* two: image: to down fade-in */}
      {/* //* three: image: to up fade-in */}
      {/* //* four: image: to down fade-in  */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* //* image: opacity fade-in */}
      <div className="">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
