import React from 'react';
import './App.css';
import logoPCA from './Imagenes/logopca_1.png'
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input , setinput] = useState('');

  const AgregarInput = val =>{
    setinput(input + val);
  }

  const CalcularResultado = () => {
    if(input.length > 0){
      setinput(evaluate(input));
    }else{
      alert("Ingrese valores numericos para realizar alguna operación. ");
    }
    
  };

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img 
          className='logo'
          src={logoPCA}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={AgregarInput}>1</Boton>
          <Boton manejarClic={AgregarInput}>2</Boton>
          <Boton manejarClic={AgregarInput}>3</Boton>
          <Boton manejarClic={AgregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={AgregarInput}>4</Boton>
          <Boton manejarClic={AgregarInput}>5</Boton>
          <Boton manejarClic={AgregarInput}>6</Boton>
          <Boton manejarClic={AgregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={AgregarInput}>7</Boton>
          <Boton manejarClic={AgregarInput}>8</Boton>
          <Boton manejarClic={AgregarInput}>9</Boton>
          <Boton manejarClic={AgregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={CalcularResultado}>=</Boton>
          <Boton manejarClic={AgregarInput}>0</Boton>
          <Boton manejarClic={AgregarInput}>.</Boton>
          <Boton manejarClic={AgregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={() => setinput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
