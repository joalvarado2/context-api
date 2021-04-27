import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

// Crear context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    // crear el state  del context
    const [categorias, setCategorias] = useState([]);

    // ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink"
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }
        obtenerCategorias()
    },[])

    return(
        <CategoriasContext.Provider
            value = {{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;