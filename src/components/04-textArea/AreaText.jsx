import React, { useRef, useState } from 'react';

export const Areatext = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]); 
  const areaTextRef = useRef(null);

  const handleTextChange = () => {
    const newText = areaTextRef.current.value;
    setText(newText);
  };

  const listarElementos = () => {
   
    setList([...list, text]);
    
    setText(''); 
  };

  return (
    <>
      <h1>Listar</h1>
      <textarea
        ref={areaTextRef}
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        onChange={handleTextChange} 
        value={text} 
      />
      <div className='p-14'>
        <button
          className='text-black bg-sky-600 w-24 h-9'
          onClick={listarElementos}
        >
          Ingresar
        </button>
        <ul className='bg-slate-400 m-6'> 
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
