import Card from "./Card";

const Accesories = () => {
  return (
    <div id="accesories" className="bg-white container mx-auto pb-16">
      <div className="text-center mb-4 md:mb-12">
        <h2 className="font-bold text-[25px] lg:text-[35px] leading-none text-slate-800 bg-slate-50 py-2 md:py-4 ">
          Accesorios
        </h2>
      </div>
      <div className="gap-4 mx-2 md:mx-32 mb-32 grid grid-cols-1 md:grid-cols-3">
        <Card
          nombre="Hueso"
          descripcion="Hueso de cuero 4/5"
          precio={1200}
          img="/hueso.webp"
        />
        <Card
          nombre="Golocan 80grs"
          descripcion="Palitos de carne horneados"
          precio={1300}
          img="/palito-carne.webp"
        />
        <Card
          nombre="Porta bolsa"
          descripcion="Porta bolsa de plastico con 1 repuesto"
          precio={2000}
          img="/bolsa.webp"
        />
      </div>
    </div>
  );
};

export default Accesories;
