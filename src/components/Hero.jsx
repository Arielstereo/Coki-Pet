import Image from "next/image";
import { Paytone_One, Gruppo } from "next/font/google";
import Wsp from "./Wsp";

const font = Paytone_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const font2 = Gruppo({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center mt-24 md:mt-0 md:gap-2 h-screen">
      <Wsp />
      <div className="relative w-2/3 md:w-1/3">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[380px] md:w-[600px] relative right-20 md:right-0 bottom-20 md:bottom-0"
        >
          <path
            fill="#FFC999"
            d="M51.5,-50.5C64.6,-38.5,71.5,-19.2,72.6,1.2C73.8,21.6,69.3,43.2,56.2,53.4C43.2,63.6,21.6,62.4,4,58.5C-13.7,54.5,-27.3,47.8,-38.8,37.5C-50.3,27.3,-59.6,13.7,-59.6,0.1C-59.5,-13.6,-50.1,-27.1,-38.6,-39.1C-27.1,-51.1,-13.6,-61.5,2.8,-64.4C19.2,-67.2,38.5,-62.5,51.5,-50.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <Image
          src="/happydog.webp"
          alt="home"
          width={300}
          height={400}
          className="w-96 object-cover absolute -right-3 md:-right-4 bottom-48 header-img"
        />
      </div>
      <div className="text-center flex flex-col gap-2 md:mb-32 items-center -mt-32 md:mt-0">
        <div className="flex gap-4 md:gap-6">
          <h1
            className={`${font.className} text-6xl md:text-9xl font-black text-rose-500`}
          >
            Coki Pet
          </h1>
          <i
            className="icon-[fa-solid--paw] mt-2 md:mt-4 w-12 h-12 md:w-28 md:h-28"
            role="img"
            aria-hidden="true"
          ></i>
        </div>
        <h2 className={`${font2.className} text-2xl`}>
          Alimentos y accesorios para tu mejor amigo!
        </h2>
      </div>
    </div>
  );
};

export default Hero;
