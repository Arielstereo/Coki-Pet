import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="container mx-auto">
      <div className="py-16 md:py-32">
        <div className="flex flex-col gap-8 md:gap-12 md:flex-row justify-center mx-6 md:mx-32">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="md:text-lg text-slate-600">Contacto</h3>
              <div className="flex gap-2">
                <i
                  className="icon-[logos--whatsapp-icon] w-7 h-7"
                  role="img"
                  aria-hidden="true"
                ></i>
                <span className="md:text-lg">11 2692-2128</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="md:text-lg text-slate-600">Siguenos en nuestras redes sociales</h3>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex gap-2">
                    <i
                      className="icon-[skill-icons--instagram] w-6 h-6"
                      role="img"
                      aria-hidden="true"
                    ></i>
                    <span className="md:text-lg">@CokiPet</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="md:text-lg text-slate-600">Showroom</h3>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex gap-2">
                  <i className="icon-[f7--placemark] w-8 h-8" role="img" aria-hidden="true"></i>
                    <span className="md:text-lg">Camarones 4950</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/coki.png"
              alt="home"
              width={300}
              height={200}
              className="w-1/3 md:w-3/4 object-cover header-img"
            />
            <span className="text-xl font-bold -mt-6">Coki Pet</span>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4">
        <span className="flex gap-2 md:text-lg text-gray-600 justify-center py-4">
          <i
            className="icon-[meteor-icons--copyright] mt-1 w-6 h-6"
            role="img"
            aria-hidden="true"
          ></i>
          Emprendev 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
