function Portada({ nombreMarca, ubicacion, destacadosPortada, enlaceWhatsApp }) {
  const destacadosVisuales = destacadosPortada.slice(0, 3);

  return (
    <section className="portada seccion" id="inicio" data-revelar>
      <div className="contenedor portada__contenedor">
        <article className="portada__contenido">
          <p className="portada__antetitulo">{ubicacion}</p>
          <h1 className="portada__titulo">Cuidamos a tu mascota como en casa</h1>
          <p className="portada__descripcion">
            En {nombreMarca} ofrecemos un espacio seguro, amoroso y acompañado
            para tu peludo. Guardería canina con atención, cariño y supervisión
            durante todo el año.
          </p>

          <ul className="portada__destacados" aria-label="Diferenciales de Guardog">
            {destacadosPortada.map((destacado) => (
              <li key={destacado} className="portada__destacado">
                {destacado}
              </li>
            ))}
          </ul>

          <div className="portada__acciones">
            <a
              className="boton boton--primario"
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultanos por WhatsApp
            </a>
            <a className="boton boton--secundario" href="#quienes-somos">
              Conocé quiénes somos
            </a>
          </div>
        </article>

        <figure className="portada__visual">
          <div className="portada__panel">
            <div className="portada__marca-visual">
              <img
                className="portada__logo-sello"
                src="/logo-guardog.jpg"
                alt="Sello de Guardog"
                width="78"
                height="78"
                loading="eager"
                decoding="async"
              />
              <div className="portada__marca-textos">
                <p className="portada__marca-titulo">Guardog</p>
                <p className="portada__marca-subtitulo">Guardería canina</p>
              </div>
            </div>

            <ul className="portada__lista-cuidado" aria-label="Cuidado diario en Guardog">
              {destacadosVisuales.map((itemVisual) => (
                <li key={itemVisual} className="portada__item-cuidado">
                  {itemVisual}
                </li>
              ))}
            </ul>
          </div>

          <div className="portada__estadisticas">
            <article className="portada__dato portada__dato--verde">
              <h2 className="portada__dato-titulo">+10 años</h2>
              <p className="portada__dato-descripcion">Acompañando familias con experiencia.</p>
            </article>
            <article className="portada__dato portada__dato--azul">
              <h2 className="portada__dato-titulo">24 hs</h2>
              <p className="portada__dato-descripcion">Supervisión y presencia constante.</p>
            </article>
            <article className="portada__dato portada__dato--completo">
              <h2 className="portada__dato-titulo">Todo el año</h2>
              <p className="portada__dato-descripcion">
                Un lugar seguro, cómodo y acompañado para tu peludo.
              </p>
            </article>
          </div>

          <figcaption className="portada__frase">
            Guardog transmite confianza, calidez y cuidado profesional.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Portada;