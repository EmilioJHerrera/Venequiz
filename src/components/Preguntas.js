import React, {useEffect, useState} from 'react'
import data from '../data/data'
import { animate, motion } from 'framer-motion'
import crearArray from '../helpers/crearArray'
import shuffle from '../helpers/shuflleArray'

const Preguntas = ({puntos, setPuntos, setGameOver}) => {
    
    const generar = ()=>{
        return shuffle( crearArray(data.length) )
    }


    
    const random = (min, max) =>{
       
        return Math.floor(Math.random() * (max - min)) + min;
    } 
    
    const [list, setList]= useState(generar())
    const [numero, setNumero] = useState(list[0]); //define el numero de la pregunta
    const [mensaje, setMensaje] = useState(); //define el mensaje en la pantalla
    const [isCliked, setIsCliked] = useState(false)


    const handleSolution = (respuesta) =>{
        console.log('esta es la pregunta numero: ',numero)
        setIsCliked(true);
        
        if (respuesta === data[numero].respuesta){
            setMensaje("Si vaaa")
            setPuntos(puntos +1)
            
            setTimeout(() => {
                setNumero(list[puntos+1])
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
    <div className='m-4 flex flex-col align-middle justify-center'>

{console.log('Este es el orden de las preguntas:',list)}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{duration:2}}
>
      
        <h1 className='text-center text-4xl font-bold '>{data[numero].pregunta}</h1>

        </motion.div>

        <motion.div 
        animate={{scale:1}}
        className='m-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
            {data[numero].respuestas.map(
                (respuesta,index) =>
                <button 
                
                className=' bg-blue-500 text-white hover:bg-blue-700 font-bold rounded-full py-4 my-4 text-xl sm:my-0
                '
                key={index}
                onClick={()=>{handleSolution(respuesta)}}
                >{respuesta}
                </button>
            )}
            
        </motion.div>
        <div>
            { isCliked&& <h3 className='text-center text-2xl mx-auto'>{mensaje}</h3> }    
            {/* <button>{data[0].respuestas[0]}</button> */}
            </div>
    </div>
  )
}

export default Preguntas