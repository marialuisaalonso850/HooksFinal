import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <p className='text-4xl text-white '>Contador: {count}</p>
      <button className='w-40 text-center text-purple-700 bg-neutral-800 rounded-2xl m-4' onClick={() => setCount(count + 1)}>Incrementar</button>  
      <button className='w-40 text-center text-purple-700 bg-slate-900 rounded-2xl m-4' onClick={() => setCount(count - 1)}>Decrementar</button>      
      <button className='w-40 text-center text-purple-700 bg-slate-900 rounded-2xl m-4' onClick={() => setCount(count - count)}>Valor Inicial</button> 
    </>
    
  )
}

