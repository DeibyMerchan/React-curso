import { use, useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const eurosRef = useRef();

  const resultadoRef = useRef();

  const calcular=() => {
    const eurosValor=parseFloat(eurosRef.current.value); 
    const  dolares=eurosValor*1.1 ;

    resultadoRef.current.innerHTML=dolares.toFixed(2) + " $";
  }

  return (

    <div>

      <h1>Comversor de Euro a Dólar</h1>

        <div className="formulario">
          
          <input
            className="contenedor" 
            type="text"
            placeholder="Cantidad en Euros"
            ref={eurosRef}>
          </input>

          <button onClick={calcular}>Convertir</button>
          <div className="contenedor" ref={resultadoRef}></div>

        </div>
    </div>

  )
}

export default App
