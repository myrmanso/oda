import Reaact, {Fragment} from 'react'

const Texto = () => {
    return(
        <Fragment>
            <h2 className="tituloH2">{props.titulo}</h2>
            <h3 className = "subtitulo">{props.descricao}</h3>
        </Fragment>
    )
}

export default Texto