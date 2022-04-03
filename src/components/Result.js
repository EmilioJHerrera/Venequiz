import React from 'react'

const Result = ({puntos, setReset}) => {
  return (
    <div className='m-4 flex flex-col justify-center '>
        <p className='text-center text-2xl'>Puntuación:</p>
        <h1 className='text-center text-2xl font-bold'>{puntos}</h1>
        <button 
        onClick={()=>setReset(true)}
        className='mx-auto text-2xl bg-transparent font-semibold border text-blue-500 border-blue-500 rounded-full p-4 my-12
        hover:bg-blue-500 hover:text-white'>No pares, sigue sigue</button>
        </div>
  )
}

export default Result