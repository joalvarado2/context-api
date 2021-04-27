import React, {useContext, useState} from 'react'
import { CategoriasContext } from '../context/CategoriaContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: "",
        categoria:""
    });

    const {categorias} = useContext(CategoriasContext);
    console.log(categorias);

    // funcion para leer los contenidos
    const obtenerDatosReceta = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="busca un ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria">
                    <option value="">-- Seleccione categoria --</option>
                    {categorias.map(categoria => (
                        <option
                            key={categoria.idDrink}
                            value={categoria.strDrink}
                        >{categoria.strDrink}</option>
                    ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        onChange={obtenerDatosReceta}
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
