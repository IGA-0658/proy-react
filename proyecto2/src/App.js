import Main from './components/Main';
import Botonera from './components/Botonera';
/* import Monedero from './components/Monedero'; */
import Monedero from './components/MonederoES7';
import Reloj from './components/Reloj';
import ListadoUsuarios from './components/ListaUsuarios';
import { useState } from 'react';

function App() {

  const [ existe, setExiste ] = useState (true);
  

  return (
    <>
  <header>Header</header>
   {/*  <Main 
      username="Nacho" 
      saludo="Hola"
      precio={23.99} /* lo puedo sacar igual funciona por el propTypes */
      /* IVA={21}*/
      /*activo={false}/* {true} */
      /*colores={["red", "green", "blue"]} 
      datos={{matricula: 1234, direccion: "Lobos 45"}} //azul llave de interpolacion y el amarillo es el objeto
    /> 
      <Botonera nombre="lucas"/>*/} 
      
      {/*<Monedero nombre="Laura"/> comentado para la clase 05*/}

      {/* { existe ? <Reloj/> : null } */}

      <button onClick={e => setExiste(!existe)}>Toggle Reloj</button>

      <ListadoUsuarios/>

      <footer>Footer</footer>
    </>
  )
}

export default App;