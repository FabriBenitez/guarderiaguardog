function Beneficios({ beneficiosPrincipales }) {
  return (
    <section className="beneficios seccion" id="beneficios" data-revelar>
      <div className="contenedor">
        <header className="seccion-encabezado">
          <p className="seccion-encabezado__etiqueta">Beneficios</p>
          <h2 className="seccion-encabezado__titulo">
            Cuidado real, atención y cariño en cada momento
          </h2>
        </header>

        <div className="beneficios__grilla">
          {beneficiosPrincipales.map((beneficio, indiceBeneficio) => (
            <article
              key={beneficio.titulo}
              className={`beneficios__tarjeta ${
                indiceBeneficio === 0 ? "beneficios__tarjeta--destacada" : ""
              }`}
            >
              <h3 className="beneficios__titulo">{beneficio.titulo}</h3>
              <p className="beneficios__descripcion">{beneficio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;

