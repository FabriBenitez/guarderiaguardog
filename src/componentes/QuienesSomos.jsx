function QuienesSomos({ textoBaseIdentidad, historiaMarca }) {
  const parrafosHistoria = textoBaseIdentidad.split("\n\n");

  return (
    <section className="quienes-somos seccion" id="quienes-somos" data-revelar>
      <div className="contenedor">
        <header className="seccion-encabezado">
          <p className="seccion-encabezado__etiqueta">Quiénes somos</p>
          <h2 className="seccion-encabezado__titulo">
            Más de una década cuidando peludos con compromiso real
          </h2>
        </header>

        <div className="quienes-somos__grilla">
          {historiaMarca.map((bloque) => (
            <article key={bloque.titulo} className="quienes-somos__tarjeta">
              <h3 className="quienes-somos__titulo">{bloque.titulo}</h3>
              <p className="quienes-somos__descripcion">{bloque.descripcion}</p>
            </article>
          ))}
        </div>

        <article className="quienes-somos__relato">
          {parrafosHistoria.map((parrafo) => (
            <p key={parrafo} className="quienes-somos__parrafo">
              {parrafo}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default QuienesSomos;

