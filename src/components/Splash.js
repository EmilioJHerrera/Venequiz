import React, { useEffect, useState } from 'react'
import Preguntas from './Preguntas';
import Result from './Result';

const Splash = () => {
 const [puntos, setPuntos] = useState(0);
 const [gameOver, setGameOver]= useState(false);
 const [reset, setReset]= useState(false)
 
 useEffect( ()=>{
     setPuntos(0);
     setReset(false)
     setGameOver(false)
 },[reset] );
    return (
    <div>

    {!gameOver && 
            <Preguntas setPuntos={setPuntos} puntos={puntos} setGameOver={setGameOver}/>
    }
    {gameOver && 
            <Result puntos={puntos} setReset={setReset}/>
    }
    </div>
  )
}

export default Splash