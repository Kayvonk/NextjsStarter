import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="images/electronics.png" alt="ElectronicsBanner" />
        </div>
        <div>
          <img loading="lazy" src="images/music.png" alt="MusicBanner"/>
        </div>
        <div>
          <img loading="lazy" src="images/clothing.png" alt="ClothingBanner"/>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
