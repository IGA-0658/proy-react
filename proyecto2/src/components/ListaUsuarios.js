import { Component } from 'react';

class ListadoUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemons: []
    }
  }
  render() { 
    return (
      <>
        {this.state.pokemons.length === 0 ? 
          <p>Cargando...</p>
        :
          <ul>
            {this.state.pokemons.map(p => (
              <li key={p.id}>
                <img src={p.avatar} alt={p.name} />
                <strong>{p.name}</strong>
              </li>
            )
            )}
          </ul>
        }
      </>
    );
  }
  async componentDidMount(){
    const r = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const response = await r.json();
    const urls = response.results.map(p => p.url);
    const promesas = urls.map(u => fetch(u).then(r => r.json()) );
    const data = await Promise.all(promesas);
    const pokemons = data.map(({id, name, sprites}) => ({ id, name, avatar: sprites.front_default }));
    //console.log(pokemons)
    this.setState({ pokemons });
  }
}
 
export default ListadoUsuarios;