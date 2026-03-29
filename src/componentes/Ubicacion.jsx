function Ubicacion({
  ubicacion,
  enlaceGoogleMaps,
  enlaceGoogleMapsEmbed,
  enlaceGoogleMapsEmbedGenerico,
}) {
  const enlacePersonalizado = enlaceGoogleMaps !== "ENLACE_GOOGLE_MAPS";
  const enlaceGoogleMapsFinal = enlacePersonalizado
    ? enlaceGoogleMaps
    : "https://www.google.com/maps/search/?api=1&query=La+Reja+Moreno";

  const enlaceMapaEmbedFinal =
    enlaceGoogleMapsEmbed !== "ENLACE_GOOGLE_MAPS_EMBED"
      ? enlaceGoogleMapsEmbed
      : enlaceGoogleMapsEmbedGenerico;

  return (
    <section className="ubicacion seccion" id="ubicacion" data-revelar>
      <div className="contenedor ubicacion__contenedor">
        <header className="seccion-encabezado ubicacion__encabezado">
          <p className="seccion-encabezado__etiqueta">Ubicación</p>
          <h2 className="seccion-encabezado__titulo">
            Estamos en {ubicacion}, acompañando peludos todo el año
          </h2>
        </header>

        <div className="ubicacion__grilla">
          <article className="ubicacion__tarjeta">
            <h3 className="ubicacion__titulo">La Reja - Moreno</h3>
            <p className="ubicacion__descripcion">
              Guardería canina con atención durante todo el año para brindar
              tranquilidad, bienestar y compañía.
            </p>
            <ul className="ubicacion__lista" aria-label="Información de ubicación">
              <li className="ubicacion__item">Zona de referencia: La Reja - Moreno</li>
              <li className="ubicacion__item">Acceso por Google Maps disponible</li>
            </ul>
          </article>

          <article className="ubicacion__mapa" aria-label="Mapa de referencia en Google Maps">
            <iframe
              className="ubicacion__iframe"
              src={enlaceMapaEmbedFinal}
              title="Mapa de La Reja - Moreno"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="ubicacion__mapa-pie">
              <a
                className="boton boton--secundario ubicacion__enlace-mapa"
                href={enlaceGoogleMapsFinal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar en Google Maps
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;