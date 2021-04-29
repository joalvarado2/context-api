import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriaContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);
  // console.log(categorias);

  const { setBuscarRecetas, setConsultar } = useContext(RecetasContext);

  // funcion para leer los contenidos
  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // funcion para guardar los datos al darle submit
  const guardarDatos = (e) => {
    e.preventDefault();
    setBuscarRecetas({ busqueda });
    setConsultar(true);
  };

  return (
    <form className="col-12" onSubmit={guardarDatos}>
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
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
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
  );
};

export default Formulario;
