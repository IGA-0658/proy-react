//App --> primer componente creado como funcion flecha

import { Component } from "react";
/* function App() {
  return (
  <div className="App">
    Hola soy una funcion
  </div>
  )
} */

console.dir(Component);

class App extends Component {
  constructor (){
    super();
  }
  render(){
  return (
    <div className="App">
      Hola soy una clase
    </div>
    )
  }
}

export default App;
