function LlamadoAccion({ enlaceWhatsApp }) {
  return (
    <section className="llamado-accion seccion" id="contacto" data-revelar>
      <div className="contenedor">
        <article className="llamado-accion__caja">
          <p className="llamado-accion__etiqueta">Guardería canina Guardog</p>
          <h2 className="llamado-accion__titulo">
            Tu peludo merece cuidado, atención y cariño
          </h2>
          <p className="llamado-accion__descripcion">
            Escribinos y conocé Guardog. Estamos para acompañarte con confianza
            y calidez.
          </p>
          <a
            className="boton boton--primario llamado-accion__boton"
            href={enlaceWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </a>
        </article>
      </div>
    </section>
  );
}

export default LlamadoAccion;

