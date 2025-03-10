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
  const clientLogos = [
    {
      logo: "/dogchow.png",
      alt: "",
    },
    {
      logo: "/royal.png",
      alt: "",
    },
    {
      logo: "/eukanuba.webp",
      alt: "",
    },
    {
      logo: "/excellent.jpg",
      alt: "",
    },

  ];
  
  return (
    // <div className="py-12 md:py-16">
    //   <h2 className="text-2xl md:text-4xl text-center mb-8 text-slate-800">Tus marcas favoritas</h2>
    //   <div className="slider-container px-4 md:px-60">
    //     <Slider {...settings}>
    //       <div style={{ width: 150 }}>
    //         <Image
    //           src="/dogchow.png"
    //           alt="logo"
    //           width={200}
    //           height={100}
    //           className="w-16 md:w-32 rounded-lg"
    //         />
    //       </div>
    //       <div style={{ width: 150 }}>
    //         <Image
    //           src="/royal.png"
    //           alt="logo"
    //           width={100}
    //           height={100}
    //           className="w-16 md:w-fit rounded-lg"
    //         />
    //       </div>
    //       <div style={{ width: 150 }}>
    //         <Image
    //           src="/eukanuba.webp"
    //           alt="logo"
    //           width={100}
    //           height={100}
    //           className="w-16 md:w-fit rounded-lg"
    //         />
    //       </div>
    //       <div style={{ width: 150 }}>
    //         <Image
    //           src="/excellent.jpg"
    //           alt="logo"
    //           width={100}
    //           height={100}
    //           className="w-16 md:w-fit rounded-lg"
    //         />
    //       </div>
    //     </Slider>
    //   </div>
    // </div>
    
    <section className="py-14 md:py-24 text-zinc-900">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-12">
					<h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-2">
						Tus marcas favoritas
					</h2>
				</div>
				<marquee behavior="scroll" direction="left" loop>
					<div className="flex justify-center items-center text-center">
						{clientLogos.map((client, i) => (
							<Image
								src={client.logo}
								alt={client.alt}
                width={200}
                height={200}
								className="img-fluid px-12 my-6"
								key={i}
							/>
						))}
					</div>
				</marquee>
			</div>
		</section>
  );
};

export default Brand;
