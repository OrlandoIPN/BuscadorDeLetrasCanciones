import React from "react";
import Formulario from "./Formulario";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Letra from "./Letra";

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras();
  return (
    <>
      <header>Busqueda de Letras de canciones</header>
      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          "cargando..."
        ) : (
          <p className="text-center">Busca Letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
