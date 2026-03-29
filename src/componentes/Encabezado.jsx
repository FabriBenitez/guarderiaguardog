import { useEffect, useState } from "react";

function Encabezado({
  nombreMarca,
  rubroMarca,
  logoMarca,
  enlacesNavegacion,
  enlaceWhatsApp,
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function alternarMenu() {
    setMenuAbierto((estadoAnterior) => !estadoAnterior);
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  function navegarASeccion(evento, idSeccion) {
    evento.preventDefault();

    const seccionDestino = document.getElementById(idSeccion);

    if (!seccionDestino) {
      cerrarMenu();
      return;
    }

    seccionDestino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${idSeccion}`);
    }

    cerrarMenu();
  }

  useEffect(() => {
    function manejarCambioPantalla() {
      if (window.innerWidth >= 960) {
        cerrarMenu();
      }
    }

    window.addEventListener("resize", manejarCambioPantalla);

    return () => {
      window.removeEventListener("resize", manejarCambioPantalla);
    };
  }, []);

  return (
    <header className="encabezado">
      <div className="encabezado__contenedor contenedor">
        <a
          className="encabezado__marca"
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={(evento) => navegarASeccion(evento, "inicio")}
        >
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

        <button
          type="button"
          className={`encabezado__boton-menu ${
            menuAbierto ? "encabezado__boton-menu--abierto" : ""
          }`}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label={
            menuAbierto
              ? "Cerrar menú de apartados"
              : "Abrir menú de apartados"
          }
          onClick={alternarMenu}
        >
          <span className="encabezado__icono-menu" aria-hidden="true">
            <span className="encabezado__linea-menu encabezado__linea-menu--uno" />
            <span className="encabezado__linea-menu encabezado__linea-menu--dos" />
            <span className="encabezado__linea-menu encabezado__linea-menu--tres" />
          </span>
          <span className="encabezado__texto-menu">Menú</span>
        </button>

        <nav
          id="menu-principal"
          className={`encabezado__navegacion ${
            menuAbierto ? "encabezado__navegacion--abierta" : ""
          }`}
          aria-label={"Navegaci\u00f3n principal"}
        >
          <ul className="encabezado__lista">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.id} className="encabezado__item">
                <a
                  className="encabezado__enlace"
                  href={`#${enlace.id}`}
                  onClick={(evento) => navegarASeccion(evento, enlace.id)}
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
