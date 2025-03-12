const Incentives = () => {
  return (
    <section className="relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="p-6">
          <div className="grid grid-cols-12 text-center">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-6xl">
                    <i
                      className="icon-[material-symbols--delivery-truck-speed-rounded]"
                      role="img"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">
                    Entregas sin cargo
                  </h3>
                  <p className="text-sm opacity-70">
                    * para compras mayor a $10.000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-6xl">
                  <i className="icon-[simple-icons--mercadopago]" role="img" aria-hidden="true"></i>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">
                    Medios de pago
                  </h3>
                  <p className="text-sm opacity-70">
                    * Efectivo, mercado pago y transferencia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-6xl">
                  <i className="icon-[akar-icons--percentage]" role="img" aria-hidden="true"></i>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">
                    Promociones
                  </h3>
                  <p className="text-sm opacity-70">
                    * Descuentos por cantidad!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
