import { useEffect } from "react";
import Encabezado from "./componentes/Encabezado";
import Portada from "./componentes/Portada";
import QuienesSomos from "./componentes/QuienesSomos";
import Beneficios from "./componentes/Beneficios";
import ValorMarca from "./componentes/ValorMarca";
import Experiencia from "./componentes/Experiencia";
import RequisitosIngreso from "./componentes/RequisitosIngreso";
import Ubicacion from "./componentes/Ubicacion";
import LlamadoAccion from "./componentes/LlamadoAccion";
import PiePagina from "./componentes/PiePagina";
import FondoDecorativo from "./componentes/FondoDecorativo";
import {
  datosMarca,
  enlacesNavegacion,
  destacadosPortada,
  historiaMarca,
  beneficiosPrincipales,
  experienciaGuardog,
  informacionIngreso,
  enlaceWhatsApp,
  ENLACE_GOOGLE_MAPS,
  ENLACE_GOOGLE_MAPS_EMBED,
  ENLACE_GOOGLE_MAPS_EMBED_GENERICO,
} from "./datos/guardog";

function activarAnimacionesSuaves() {
  const seccionesRevelables = document.querySelectorAll("[data-revelar]");
  const mostrarSecciones = () => {
    seccionesRevelables.forEach((seccion) => {
      seccion.classList.add("seccion--visible");
    });
  };

  if (seccionesRevelables.length === 0) {
    return () => {};
  }

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    mostrarSecciones();
    return () => {};
  }

  const observadorSecciones = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) {
          return;
        }

        entrada.target.classList.add("seccion--visible");
        observador.unobserve(entrada.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  seccionesRevelables.forEach((seccion) => {
    seccion.classList.add("seccion--revelar-inicio");
    observadorSecciones.observe(seccion);
  });

  // Respaldo para evitar contenido oculto si el observador falla en algún navegador.
  const temporizadorRespaldo = window.setTimeout(() => {
    mostrarSecciones();
  }, 1800);

  return () => {
    window.clearTimeout(temporizadorRespaldo);
    observadorSecciones.disconnect();
  };
}

function Aplicacion() {
  useEffect(() => activarAnimacionesSuaves(), []);

  return (
    <div className="sitio">
      <a className="salto-contenido" href="#contenido-principal">
        Saltar al contenido principal
      </a>

      <FondoDecorativo />

      <Encabezado
        nombreMarca={datosMarca.nombre}
        rubroMarca={datosMarca.rubro}
        logoMarca={datosMarca.logo}
        enlacesNavegacion={enlacesNavegacion}
        enlaceWhatsApp={enlaceWhatsApp}
      />

      <main id="contenido-principal">
        <Portada
          nombreMarca={datosMarca.nombre}
          ubicacion={datosMarca.ubicacion}
          destacadosPortada={destacadosPortada}
          enlaceWhatsApp={enlaceWhatsApp}
        />

        <QuienesSomos
          textoBaseIdentidad={datosMarca.textoBaseIdentidad}
          historiaMarca={historiaMarca}
        />

        <Beneficios beneficiosPrincipales={beneficiosPrincipales} />

        <ValorMarca />

        <Experiencia experienciaGuardog={experienciaGuardog} />

        <RequisitosIngreso
          informacionIngreso={informacionIngreso}
          enlaceWhatsApp={enlaceWhatsApp}
        />

        <Ubicacion
          ubicacion={datosMarca.ubicacion}
          enlaceGoogleMaps={ENLACE_GOOGLE_MAPS}
          enlaceGoogleMapsEmbed={ENLACE_GOOGLE_MAPS_EMBED}
          enlaceGoogleMapsEmbedGenerico={ENLACE_GOOGLE_MAPS_EMBED_GENERICO}
        />

        <LlamadoAccion enlaceWhatsApp={enlaceWhatsApp} />
      </main>

      <PiePagina
        nombreMarca={datosMarca.nombre}
        rubroMarca={datosMarca.rubro}
        ubicacion={datosMarca.ubicacion}
        logoMarca={datosMarca.logo}
        enlaceWhatsApp={enlaceWhatsApp}
      />
    </div>
  );
}

export default Aplicacion;

