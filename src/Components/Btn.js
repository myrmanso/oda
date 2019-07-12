import React, {Fragment, Component} from 'react'
import Link from 'react-dom'

class Btn extends Component{
    return(){
        render(
            <Fragment>
                <Link className="link" to={this.props.voltar}>voltar</Link>
                <Link className="link" to={this.props.proxima}>próxima</Link>
            </Fragment>
        )
    }
}

export default Btn