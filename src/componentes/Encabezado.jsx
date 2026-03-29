function Encabezado({
  nombreMarca,
  rubroMarca,
  logoMarca,
  enlaceWhatsApp,
}) {
  return (
    <header className="encabezado">
      <div className="encabezado__contenedor contenedor">
        <a className="encabezado__marca" href="#inicio" aria-label="Ir al inicio">
          <img
            className="encabezado__logo"
            src={logoMarca}
            alt={`Logo de ${nombreMarca}`}
            width="56"
            height="56"
            loading="eager"
            decoding="async"
          />
          <div className="encabezado__textos">
            <span className="encabezado__nombre">{nombreMarca}</span>
            <span className="encabezado__rubro">{rubroMarca}</span>
          </div>
        </a>

        <a
          className="boton boton--primario encabezado__cta"
          href={enlaceWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Encabezado;
