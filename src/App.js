import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriaContext';
import './index.css';

function App() {
  return (
   <CategoriasProvider>
     <Header/>

     <div className="container mt-5">
       <div className="row">
         <Formulario/>
       </div>
     </div>
   </CategoriasProvider>
  );
}

export default App;
