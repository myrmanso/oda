import React, {Component} from 'react'
import Texto from '../Components/Texto'

class Tarefas extends Component{

    constructor(props){
        super(props)
        this.state = {
            tarefas: '',
        }
    }
    render(){
        return(
            <div className="container--flex" >
                <div className="img--inicio">
                    <img className="img" src={require('../assets/img/tarefas-bg.jpg')}/>  
                </div>
                <section className="container--metade">
                    <div className="container">
                            <Texto 
                                titulo = 'Quais são as suas tarefas de hoje e quanto tempo pra cada?'
                                descricao = 'Escreva tudo o que você está pensando. TUDO MESMO! Isso ajuda a cabeça processar melhor todas as informações. Escreva todas as tarefas com um verbo de ação.'
                            />
                            <div className="container">
                            <form className="container--flex" onSubmit = {this.handleSubmit}>
                                <div>
                                    <div>
                                        <label className = 'label'>Horas</label>
                                    </div>
                                        <input 
                                            className= 'texto'
                                            name = 'tempoDisponivel'
                                            type = 'text'
                                            id= 'tempo'
                                            onChange={(event) => {
                                                this.setState({ tarefas: event.target.value })
                                                console.log('valor', event.target.value)
                                            }}
                                            value= {this.state.tarefas} 
                                            name= 'tempo'
                                        />
                                </div>
                                <div>
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
                                </div>         
                                <div>
                                    <button type='submit' >Enviar</button>
                                </div>
                            </form>
                        </div>    
                        <div>
                            <form>
                                <input type="checkbox" />
                                <input type="text" />
                                <input type = "text" />
                                
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Tarefas