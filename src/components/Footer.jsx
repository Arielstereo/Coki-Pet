const Footer = () => {
  return (
    <footer>
      <div id="contact" className="py-16 md:py-32">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between mx-2 md:mx-32">
          <div>
            <h3 className="text-center">Contacto</h3>
            <div className="flex justify-center gap-2 md:gap-4 md:mt-4">
              <i
                className="icon-[logos--whatsapp-icon] w-7 h-7"
                role="img"
                aria-hidden="true"
              ></i>
              <span className="text-xl">11 2692-2128</span>
            </div>
          </div>
          <div>
            <h3 className="text-center">Siguenos en nuestras redes sociales</h3>
            <div className="flex justify-center gap-4 mt-2 md:mt-4">
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
                  <span className="text-xl">@CokiPet</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4">
        <span className="flex gap-2 text-lg text-gray-600 justify-center py-4">
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
