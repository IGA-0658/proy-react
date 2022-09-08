import React from 'react';
import PropTypes from 'prop-types';
import Listado from './Listado';


class Main extends React.Component {
    constructor(props){ //props es de solo lectura
        super(props); //hace que este disp dentro de this
        this.state = {
            contador: 0,
            creditos: 0
        }
    }

    render(){
        return(
            <div>
                <h2>{this.props.saludo} {this.props.username} bienvenido!</h2>
                <p>Primer componente externo</p>
                <p>Precio {this.props.precio}</p>
                <p>IVA {this.props.iva}</p>
                {this.props.activo? <p>Activo</p> : <p>Inactivo</p>}
                
                <Listado coleccion ={this.props.colores} />
                <Listado coleccion={["Ene", "Feb", "Mar", "Abr"]} />

                <div>
                    {this.props.datos.matricula}
                </div>
            </div>
        );
    }
}
Main.defaultProps = {
    iva: 21
};

Main.propTypes = {
    iva: PropTypes.number,
    precio: PropTypes.number.isRequired
}

export default Main;