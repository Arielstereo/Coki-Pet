"use client"

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    variableWidth: true
  };
  return (
    <div className="bg-slate-50 py-4 md:py-16">
      <h2 className="text-2xl md:text-4xl text-center mb-8 text-slate-800">Tus marcas favoritas</h2>
      <div className="slider-container px-4 md:px-60">
        <Slider {...settings}>
          <div style={{ width: 150 }}>
            <Image
              src="/dogchow.png"
              alt="logo"
              width={200}
              height={100}
              className="w-16 md:w-32 rounded-lg"
            />
          </div>
          <div style={{ width: 150 }}>
            <Image
              src="/royal.png"
              alt="logo"
              width={100}
              height={100}
              className="w-16 md:w-fit rounded-lg"
            />
          </div>
          <div style={{ width: 150 }}>
            <Image
              src="/eukanuba.webp"
              alt="logo"
              width={100}
              height={100}
              className="w-16 md:w-fit rounded-lg"
            />
          </div>
          <div style={{ width: 150 }}>
            <Image
              src="/excellent.jpg"
              alt="logo"
              width={100}
              height={100}
              className="w-16 md:w-fit rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
