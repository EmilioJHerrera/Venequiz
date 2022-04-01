import React, {useEffect, useState} from 'react'
import data from '../data/data'
import { animate, motion } from 'framer-motion'

const Preguntas = ({puntos, setPuntos, setGameOver}) => {
    
    const random = (min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
    } 
    
    
    const [numero, setNumero] = useState(random(1,10)); //define el numero de la pregunta
    const [mensaje, setMensaje] = useState(); //define el mensaje en la pantalla
    const [isCliked, setIsCliked] = useState(false)


    const handleSolution = (respuesta) =>{
        setIsCliked(true);
        
        if (respuesta === data[numero].respuesta){
            setMensaje("Si vaaa")
            setPuntos(puntos +1)
            
            setTimeout(() => {
                setNumero(random(1,10))
                setIsCliked(false);  
            }, 1500);
        } else {
            setMensaje('Tu eres gafo muchacho!!')
            setTimeout(() => {
                  
                setGameOver(true)
            }, 1500);
        }
    }


//     useEffect(()=>{
// console.log('cambio numero')
//     },[numero])
  const variants = {
      visible: {opacity:1},
      hidden: {opacity:0}
  }
    return (
    <div>

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{duration:2}}
>
      
        <h1>{data[numero].pregunta}</h1>

        </motion.div>

        <motion.div animate={{scale:1}}>
            {data[numero].respuestas.map(
                (respuesta,index) => <button key={index}
                onClick={()=>{handleSolution(respuesta)}}
                >{respuesta}</button>
            )}

            {isCliked && <h3>{mensaje}</h3> }    
            {/* <button>{data[0].respuestas[0]}</button> */}
            
        </motion.div>
    </div>
  )
}

export default Preguntas