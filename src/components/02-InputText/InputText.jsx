import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const[color , setcolor] = useState("text-blue-600");
  const [width , setwidth]=useState("w-80");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (newText === '') {
      setcolor("black")
      setwidth("w-80")
    }
  }


  const CambioColor = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      setcolor("text-purple-600");
    }
  };
  const [message, setMessage] = useState()
  const [textView, settextView] = useState('');

  

  const getMessage = (e) => {
    settextView(e.target.value)
  }

  const showMessage = () => setMessage(textView)

  
  return (
    <>
    
      <p className={`${color} ${width}`} >Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        value={text}
        onKeyUp={CambioColor}
        onChange={handleTextChange}
      />  
      <div className='p-14'>
        <input
          type="text "
          value={textView}
          onChange={getMessage}
        />
        <p className='text-zinc-100'>Texto : {message}</p>
        <button className='text-black bg-sky-600 w-24 h-9'  onClick={showMessage}>Ingresar</button>
      </div>  
    </>
    
    
  );
}
