import React, { createContext, useState, useEffect } from "react";
import axios from "axios"
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setGuardarRecetas] = useState([]);

  const [Buscar, setBuscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, setConsultar] = useState(false);
  const { nombre, categoria } = Buscar;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}?g=${categoria}`;
        console.log(url)
       
        const resultado = await axios.get(url);
         console.log(resultado.drinks);
        setGuardarRecetas(resultado.drinks)
      };
      obtenerRecetas();
    }
  }, [Buscar]);

  return (
    <RecetasContext.Provider
      value={{
        setBuscarRecetas,
        setConsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
