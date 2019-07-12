import React from 'react'

const InputTempo = (props) => {

    return(
            <input 
                className= 'texto'
                name = 'tempoDisponivel'
                type = 'number'
                id= 'tempo'
                value= {props.value} 
                name= 'tempo'
                onChange = {props.onChange}
            />
    )
    
}


export default InputTempo