import { Component } from "react";

function saludar(e){
    console.log(e.nativeEvent);
    alert("Hola gente!");
}

class Botonera extends Component {
    constructor(props){
        super(props);
        this._despedir = this.despedir.bind(this); //creo el alias o metodo bindeado
       
    }
    render(){
        return (
          <main>
            <h2>Botonera de {this.props.nombre}</h2>
            <button onClick={saludar}>Saludar</button>{/* asi no, se recomienda usar el this */}
            <button onClick={this._despedir}>Despedir</button>
        <button onClick={this.mensajear.bind(this)}>Mensajear</button>
      </main>
    )
  }
  despedir(){
    console.log(this);
    alert("chau " + this.props.nombre);
  }
  mensajear(){
    console.log("Mensaje a ", this.props.nombre);
  }
}

export default Botonera;

/* class User {
    constructor(n){
        this.nombre = n
    }
    saludar(){
        console.log('Yo soy ' + this.nombre);
        despedir();
    }
    despedir(){
        console.log('chau')
    }
}

const usr1 = new User('Lucas');
const usr2 = new User('Ana');

usr2.saludar(); //yo soy ana */