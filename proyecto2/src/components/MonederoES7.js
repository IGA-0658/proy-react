import { Component} from 'react'

class Monedero extends Component { //shot--> cc
    algo = 99.9;
    state = {
      saldo: 100,
      gastos: [],
      bonus: 20,
    }
  
    render() { 
      return (
        <>
          <h2>Monedero ES7 de {this.props.nombre}</h2>
          <button onClick={this.disminuir}>-</button>
          <span>{this.state.saldo}</span>
          <button onClick={this.aumentar}>+</button>
          <footer>{this.algo} {this.state.bonus}</footer>
        </>
      );
    }
  
    aumentar = () => {
      let suma =  this.state.saldo + 1;
      this.setState({ saldo: suma });//pongo lo que quiero modificar
    }
    
    disminuir = () => {
        this.setState({ saldo: this.state.saldo - 1, bonus: 88, alias: "Power"});
        console.log("Disminuido", this.state.saldo);
    }  
}
 
export default Monedero;