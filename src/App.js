import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from "./context/RecetasContext"
import './index.css';

function App() {
  return (
   <CategoriasProvider>
   <RecetasProvider>
     <Header/>

     <div className="container mt-5">
       <div className="row">
         <Formulario/>
       </div>
     </div>
     
     </RecetasProvider>
   </CategoriasProvider>
  );
}

export default App;
