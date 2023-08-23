import React, { useState, useRef, useEffect } from 'react';

export const PapelOtijeraOpiedra = () => {
  const classA = 'text-blue-600 text-xl';
  const classB = 'text-red-600 text-lg';

  const Piedra = useRef(null);
  const Papel = useRef(null);
  const Tijera = useRef(null);

  const arreglo = ['Tijera', 'Papel', 'Piedra']; 



  const [text, setText] = useState(null);
  const [style, setStyle] = useState(classA);
  const [resultado, setResultado] = useState(null); 
  const [final , setfinal]= useState('')

  useEffect(() => {
    if (text !== null) {
      const randomIndex = Math.floor(Math.random() * arreglo.length);
      const elementoAleatorio = arreglo[randomIndex];
      setResultado(elementoAleatorio);
    }
  }, [text]);
 
useEffect (()=>{
   if (text != '' && resultado!=null) {
     if (text == 'piedra' && resultado == 'Tijera') {
       setfinal("Gana")   
     }else if (resultado == 'Piedra' && text == 'Tijera') {
      setfinal("pierde")
     }else if (text == 'Papel' && resultado == 'Tijera') {
      setfinal("pierde")
     }else if (text == 'Tijera' && resultado == 'Papel') {
       setfinal("Gana")
     }else if (text == 'Papel' && resultado == 'Piedra') {
       setfinal("Gana")
     }else if (text == 'Piedra' && resultado == 'Papel') {
       setfinal("Pierde")
     }else if (text == 'Piedra' && resultado == 'Piedra' ||text == 'Papel' && resultado == 'Papel' || text == 'Tijera' && resultado == 'Tijera' ) {
       setfinal("Empate")
     }{     
     }
     
   }

})

  return (
    <>
      <h1 className='text-blue-600 text-6xl'> piedra papel o tijera</h1>
      <p>Usuario Eligio {text}</p>
      <p>CPU Eligio {resultado}</p>

      <h1>El Usuario : {final} </h1>

      <button
        className={`w-40 text-center ${style} bg-neutral-800 rounded-2xl m-4`}
        ref={Piedra}
        onClick={() => setText('Piedra')}>
        Piedra
      </button>
      <button
        className={`w-40 text-center ${style} bg-slate-900 rounded-2xl m-4`}
        ref={Papel}
        onClick={() => setText('Papel')}
      >
        Papel
      </button>
      <button
        className={`w-40 text-center ${style} bg-slate-900 rounded-2xl m-4`}
        ref={Tijera}
        onClick={() => setText('Tijera')}
      >
        Tijera
      </button>
    </>
  );
};
