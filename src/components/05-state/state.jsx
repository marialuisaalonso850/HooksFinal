
import React, { useEffect,useState } from 'react'

export const State = () => {

    const classA = 'text-blue-600 text-5x1'
    const classB = 'text-red-600 text-4x1'

  const [count, setCount] = useState(0);
  const [style ,setstyle] =useState(classA);

  useEffect (()=>{
      if (count>=10) {
          setstyle(classB)
      }else{
          setstyle(classA)
      }

  },[count])

  return (
    <>
      <p className={style}>Estado:{count} </p>

      <button className='w-40 text-center text-purple-700 bg-neutral-800 rounded-2xl m-4' onClick={() => setCount(count + 1)}>Incrementar</button>  
      <button className='w-40 text-center text-purple-700 bg-slate-900 rounded-2xl m-4' onClick={() => setCount(count - 1)}>Decrementar</button>      
      <button className='w-40 text-center text-purple-700 bg-slate-900 rounded-2xl m-4' onClick={() => setCount(count - count)}>Valor Inicial</button> 
    </>
    
  )
}