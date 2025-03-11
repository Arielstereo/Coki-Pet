import Image from "next/image";
import { Titan_One, Indie_Flower } from "next/font/google";
import Wsp from "./Wsp";
import Shapes from "./Shapes";

const font = Titan_One({
  weight: "400",
  subsets: ["latin"]
});

const subtitle = Indie_Flower({
  weight: "400",
  subsets: ["latin"]
});

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-48 relative z-10 overflow-hidden">
      <Shapes />
      <Wsp />

      <div className="container px-4 mx-auto relative">
        <div className="gap-0 lg:gap-48 flex flex-col md:flex-row justify-center">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 text-center">
            <div className="flex flex-col justify-center h-full md:ml-24">
              <h1
                className={`${font.className} text-6xl font-bold md:text-8xl mb-2 md:mb-6 text-rose-600`}
              >
                Coki Pet
              </h1>
              <h2 className={`${subtitle.className} leading-normal text-lg md:text-3xl text-gray-800`}>
                Alimentos y accesorios para tu mejor amigo!
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Hero.png"
              alt="home"
              width={400}
              height={400}
              className="max-w-full h-full object-cover header-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
