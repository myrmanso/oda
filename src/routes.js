import React from 'react'
import  {Switch, Route} from 'react-router-dom'

//PÁGINAS 
import Home from './Pages/Home'
import Terefas from './Pages/Tarefas'
import Tempo from './Pages/Tempo'

const Roteamento = () => {
    return(
        <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route path="/tempo" component = {Tempo}></Route>
            <Route path="/tarefas" component = {Terefas}></Route>
        </Switch>
    )
}

export default Roteamento