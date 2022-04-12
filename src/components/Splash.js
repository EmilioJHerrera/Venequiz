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
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 300"><path fill="#0099ff" fillOpacity="1" d="M0,128L18.5,122.7C36.9,117,74,107,111,85.3C147.7,64,185,32,222,58.7C258.5,85,295,171,332,224C369.2,277,406,299,443,261.3C480,224,517,128,554,122.7C590.8,117,628,203,665,218.7C701.5,235,738,181,775,138.7C812.3,96,849,64,886,42.7C923.1,21,960,11,997,58.7C1033.8,107,1071,213,1108,213.3C1144.6,213,1182,107,1218,90.7C1255.4,75,1292,149,1329,176C1366.2,203,1403,181,1422,170.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
           
    {!gameOver && 
            <Preguntas setPuntos={setPuntos} puntos={puntos} setGameOver={setGameOver} />
    }
    {gameOver && 
            <Result puntos={puntos} setReset={setReset}/>
    }
{/* 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

    </div>
  )
}

export default Splash