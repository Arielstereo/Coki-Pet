"use client";

import Image from "next/image";

const Brand = () => {
  const clientLogos = [
    {
      logo: "/proplan.png",
      alt: "",
    },
    {
      logo: "/royal.png",
      alt: "",
    },
    {
      logo: "/eukanuba.png",
      alt: "",
    },
    {
      logo: "/vitalcan.png",
      alt: "",
    },
    {
      logo: "/pedigree.png",
      alt: "",
    },
  ];

  return (
    <section className="py-14 md:py-24 text-zinc-900">
      <div className="text-center mb-4 md:mb-12">
        <h2 className="font-bold text-[25px] lg:text-[35px] leading-none text-slate-100 bg-slate-900 py-2 md:py-4 ">
          Tus marcas favoritas
        </h2>
      </div>
      <marquee
        behavior="scroll"
        direction="left"
        loop
        className="mx-4 md:mx-72"
      >
        <div className="flex justify-center items-center">
          {clientLogos.map((client, i) => (
            <Image
              src={client.logo}
              alt={client.alt}
              width={400}
              height={400}
              className="object-cover px-8 w-64 md:w-72"
              key={i}
            />
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default Brand;
