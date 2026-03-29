function PiePagina({ nombreMarca, rubroMarca, ubicacion, logoMarca, enlaceWhatsApp }) {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <div className="contenedor pie-pagina__contenedor">
        <div className="pie-pagina__marca">
          <img
            className="pie-pagina__logo"
            src={logoMarca}
            alt={`Logo de ${nombreMarca}`}
            width="72"
            height="72"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="pie-pagina__nombre">{nombreMarca}</p>
            <p className="pie-pagina__rubro">{rubroMarca}</p>
          </div>
        </div>

        <div className="pie-pagina__datos">
          <p className="pie-pagina__texto">
            {ubicacion} | Guardería canina con atención durante todo el año.
          </p>
          <a
            className="pie-pagina__enlace"
            href={enlaceWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <p className="pie-pagina__copy">
        © {anioActual} {nombreMarca}. Cuidamos a los peludos como en casa.
      </p>
    </footer>
  );
}

export default PiePagina;

