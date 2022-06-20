import React, {useState, useEffect, useRef} from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const myRef = useRef(null);

  function agregaSegundos(){
    let ref = myRef.current.value
    setSegundos(ref)
  }

  function toggle(){
    setActivo(!activo)
  }

  function reset(){
    setActivo(false)
    setSegundos(0)
    myRef.current.value = ''
  }

  function cambioTipo(){
    if (tipo === 'Contador') setTipo(tipo => 'Cuenta Regresiva')
    if (tipo === 'Cuenta Regresiva') setTipo(tipo => 'Contador')
  }

  useEffect(()=>{
    let intervalo = null;

    if (activo && tipo === 'Contador') {
      intervalo = setInterval(()=> {
        setSegundos (segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva'){
      intervalo = setInterval(()=>{
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva'){
      reset();
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo);
  },[activo, segundos, tipo])

  return (
    <div className="app">
      <div className="time">
        {segundos} segundos
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? `active` : `inactive`}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos}placeholder="Ingresa Segundos" autoComplete="off"/>}
      
    </div>
  );
};

export default Timer;