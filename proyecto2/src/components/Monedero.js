import { Component} from 'react'

class Monedero extends Component { //shot--> cc
    constructor(props){
        super(props);
        this._aumentar = this.aumentar.bind(this);
        this._disminuir = this.disminuir.bind(this);

        this.algo = 99.9;
        this.state = {
            saldo: 100,
            gastos: [],
            bonus: 20,
        }
    }
    render() { 
        return (
            <>
            <h2>Monedero de {this.props.nombre}</h2>
            <button onClick={this._disminuir}>-</button>
            <span>{this.state.saldo}</span>
            <button onClick={this._aumentar}>+</button>
            <footer>{this.algo}</footer>
            </>
        );
    }

    aumentar(){
        //this.state.saldo++;
        
        this.setState({ saldo: this.state.saldo + 1 }); //pongo lo que quiero modificar
        console.log("Aumentado", this.state.saldo);
    }
    disminuir(){
        //this.state.saldo--;
        this.setState({ saldo: this.state.saldo - 1 });
        console.log("Disminuido", this.state.saldo);
    }
}
 
export default Monedero;