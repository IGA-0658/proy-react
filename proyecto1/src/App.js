import Header from './Header'

function App() {
  return (
  <div className="App">
    <Header username="Nacho" role="admin"/>
    <Header username="Ceci" role="tenant"/>
    <Header username="Coco" role="admin"/>
    <p>Hola soy una funcion</p>
  </div>
  )
}

export default App;