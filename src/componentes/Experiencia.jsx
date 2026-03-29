function Experiencia({ experienciaGuardog }) {
  return (
    <section className="experiencia seccion" id="experiencia" data-revelar>
      <div className="contenedor">
        <header className="seccion-encabezado">
          <p className="seccion-encabezado__etiqueta">Cómo se vive Guardog</p>
          <h2 className="seccion-encabezado__titulo">
            Un espacio seguro, cómodo y acompañado
          </h2>
        </header>

        <div className="experiencia__lista">
          {experienciaGuardog.map((itemExperiencia) => (
            <article
              key={itemExperiencia.titulo}
              className="experiencia__item"
              aria-label={itemExperiencia.titulo}
            >
              <h3 className="experiencia__titulo">{itemExperiencia.titulo}</h3>
              <p className="experiencia__descripcion">
                {itemExperiencia.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;

