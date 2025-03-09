const Footer = () => {
  return (
    <div id="contact" className="py-16 md:py-32 container mx-auto justify-center">
      <div className="flex flex-col gap-6 md:flex-row md:justify-around mx-2 md:mx-32">
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
  );
};

export default Footer;
