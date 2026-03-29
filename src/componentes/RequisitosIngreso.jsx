function RequisitosIngreso({ informacionIngreso, enlaceWhatsApp }) {
  const { aptos, documentacion } = informacionIngreso;

  return (
    <section className="requisitos seccion" id="requisitos" data-revelar>
      <div className="contenedor">
        <header className="seccion-encabezado">
          <p className="seccion-encabezado__etiqueta">Ingreso y requisitos</p>
          <h2 className="seccion-encabezado__titulo">
            Información importante para una estadía cuidada y tranquila
          </h2>
        </header>

        <div className="requisitos__grilla">
          <article className="requisitos__tarjeta requisitos__tarjeta--aptos">
            <span className="requisitos__insignia" aria-hidden="true">
              Aptos
            </span>
            <h3 className="requisitos__titulo">{aptos.titulo}</h3>
            <p className="requisitos__resumen">{aptos.resumen}</p>
            <p className="requisitos__detalle">{aptos.detalle}</p>
          </article>

          <article className="requisitos__tarjeta requisitos__tarjeta--documentacion">
            <span className="requisitos__insignia" aria-hidden="true">
              Documentación
            </span>
            <h3 className="requisitos__titulo">{documentacion.titulo}</h3>
            <ul className="requisitos__lista" aria-label="Documentación requerida">
              {documentacion.requisitos.map((requisito) => (
                <li key={requisito} className="requisitos__item">
                  {requisito}
                </li>
              ))}
            </ul>
            <p className="requisitos__detalle">{documentacion.instruccion}</p>
            <a
              className="boton boton--primario requisitos__boton"
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar por WhatsApp
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default RequisitosIngreso;

