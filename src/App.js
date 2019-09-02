import React from 'react';
import './App.css';
import Home from './views/home/Home';
import List from './views/list/List';
import Desafio1 from './views/desafio1/Desafio1';
import Desafio2 from './views/desafio2/Desafio2';
import Desafio3 from './views/desafio3/Desafio3';
import Cliente from './components/clientes/Cliente'


function App() {
  return (
    <div className="App">
      
      <Desafio2/> 
    </div>
  );
}

export default App;


/*
funcion

function a(n1, n2) {
  return n1 + n2;
}

funcion flecha refactorizada
const a = (n1, n2) => {
  return n1 + n2;
};

funcion
[1,2,3,4,5].map(function(e) {
  return {
    numero: e,
  };
})

funcion flecha refactorizada
[1,2,3,4,5].map(e => ({ numero: e }))
*/

/**
 * <Home
        parametroEjemplo="Una propiedad de tipo string"
        nombre = "Clara"
        altura="3 metros"
        peso = "4 kilos"
        edad = "30 años"
      />
 */
