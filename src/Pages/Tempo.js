import React, {Component} from 'react'
import Texto from '../Components/Texto'
import {Link} from 'react-router-dom'

class Tempo extends Component{

    constructor(props){
        super(props)
        this.state = {
            tempo: '',
        }
        
    }

    handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.valor);
    event.preventDefault();
    }


    render() {
        return (
            <div className="container--flex" >
            <div className="img--inicio">
               <img className="img" src={require('../assets/img/time-bg.jpg')}/>  
            </div>
            <div className = "container--metade ">
                <div className="container">
                    <Texto 
                        titulo = 'Quanto tempo voce tem disponivel hoje?'
                        descricao = 'Uma ferramente que está aqui para você quando não esta se sentindo capaz de fazer nem 01 lista'
                    />
                    <div>
                        <form onSubmit = {this.handleSubmit}>
                            <div>
                                <label className = 'label'>Horas</label>
                            </div>
                            <input 
                                className= 'texto'
                                name = 'tempoDisponivel'
                                type = 'time'
                                id= 'tempo'
                                onChange={(event) => {
                                    this.setState({ tempo: event.target.value })
                                    console.log('valor', event.target.value)
                                }}
                                value= {this.state.tempo} 
                                name= 'tempo'
                            />
                            <button type='submit' ><Link to = '/tarefas'>Enviar</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Tempo