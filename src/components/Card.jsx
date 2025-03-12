import Image from "next/image";

const Card = ({ nombre, descripcion, precio, img, promo }) => {
  return (
    <div className="p-8 flex flex-wrap gap-4 rounded-lg w-full md:w-fit">
      <Image
        src={img}
        alt="image"
        width={400}
        height={100}
        className="w-fit object-cover"
      />
      <div className="flex flex-col gap-2 relative">
        <span className="font-bold">{nombre}</span>
        <span className="text-sm text-slate-600">{descripcion}</span>
        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
          <span className="mt-4 bg-slate-100 rounded-full shadow-xl border border-orange-400 text-black px-6 py-2 text-end font-semibold text-lg w-fit">
            ${precio}
          </span>
        {
          promo && (
            <span className="mt-4 bg-yellow-400 animate-pulse rounded-full shadow-xl border border-orange-400 text-black px-6 py-2 text-end font-semibold text-lg w-fit">
            ${promo} x2 Kg
          </span>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Card;
