import React from 'react'

const Result = ({puntos, setReset}) => {
  return (
    <div>
        <h1>{puntos}</h1>
        <button onClick={()=>setReset(true)}>No pares, sigue sigue</button>
        </div>
  )
}

export default Result