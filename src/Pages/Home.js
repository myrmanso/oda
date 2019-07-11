import React from "react";
// import {Link} from 'react-router-dom'
import '../assets/style/style.scss'

// containerFlex = 
// img = 
// containerMetade = 
// btn = 
// tituloBorder = 
// titulo = 

const  Home = () => {
    return(
        <div className="container--flex" >
            <div className="img--inicio">
               <img className="img" src={require('../assets/img/bg1.jpg')}/>  
            </div>
            <div className = "container--metade bg--roxo">
                <div className="container">
                    <h1 className="tituloH1--border">oda</h1>
                    <h2 className = "tituloH1">Organização Diária da Atenção</h2>
                    <h3 className = "subtitulo amarelo">
                    Uma ferramente que está aqui para você quando não esta se sentindo capaz de fazer nem 01 lista
                    </h3>
                    <div>
                        <p className="link amarelo">começar</p>
                        {/* <Link to="/tempo"><img href="" />></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default Home