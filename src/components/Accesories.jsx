import Card from "./Card";

const Accesories = () => {
  return (
    <div id="accesories" className="bg-slate-50 container mx-auto pb-16">
      <div className="flex gap-4 justify-center items-center">
        <h2 className="text-center py-16 md:py-32 text-3xl md:text-5xl font-semibold text-slate-900">
          Accesorios
        </h2>
        <i
          className="icon-[fa-solid--paw] mt-0 w-10 h-10 md:w-16 md:h-16"
          role="img"
          aria-hidden="true"
        ></i>
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
