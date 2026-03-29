function FondoDecorativo() {
  const huellasDecorativas = ["uno", "dos", "tres", "cuatro"];
  const huesosDecorativos = ["uno", "dos"];
  const arcosDecorativos = ["uno", "dos", "tres"];
  const lineasDecorativas = ["uno", "dos", "tres"];

  return (
    <div className="fondo-decorativo" aria-hidden="true">
      <span className="fondo-decorativo__mancha fondo-decorativo__mancha--uno" />
      <span className="fondo-decorativo__mancha fondo-decorativo__mancha--dos" />
      <span className="fondo-decorativo__mancha fondo-decorativo__mancha--tres" />

      {huellasDecorativas.map((huella) => (
        <div
          key={huella}
          className={`fondo-decorativo__huella fondo-decorativo__huella--${huella}`}
        >
          <span className="fondo-decorativo__huella-dedo fondo-decorativo__huella-dedo--uno" />
          <span className="fondo-decorativo__huella-dedo fondo-decorativo__huella-dedo--dos" />
          <span className="fondo-decorativo__huella-dedo fondo-decorativo__huella-dedo--tres" />
          <span className="fondo-decorativo__huella-dedo fondo-decorativo__huella-dedo--cuatro" />
          <span className="fondo-decorativo__huella-centro" />
        </div>
      ))}

      {huesosDecorativos.map((hueso) => (
        <span
          key={hueso}
          className={`fondo-decorativo__hueso fondo-decorativo__hueso--${hueso}`}
        />
      ))}

      {arcosDecorativos.map((arco) => (
        <span
          key={arco}
          className={`fondo-decorativo__arco fondo-decorativo__arco--${arco}`}
        />
      ))}

      {lineasDecorativas.map((linea) => (
        <span
          key={linea}
          className={`fondo-decorativo__linea fondo-decorativo__linea--${linea}`}
        />
      ))}
    </div>
  );
}

export default FondoDecorativo;

