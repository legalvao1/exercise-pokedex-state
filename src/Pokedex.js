import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			pokemonIndex: 0,
			pokemonType:'all',
      renderPokemon: [],
		}

		this.nextPokemon = this.nextPokemon.bind(this);
		this.filteredPokemon = this.filteredPokemon.bind(this);
    this.setPokemonsState = this.setPokemonsState.bind(this);

	}

  // componentDidMount() {
  //   console.log('Aqui')
  //   const { pokemons } = this.props;
  //   this.setState({ renderPokemon: pokemons })
  // }

	nextPokemon = () => {
		this.setState((estadoAnterior) => ({
			pokemonIndex: estadoAnterior.pokemonIndex + 1
		}))
		if(this.state.pokemonIndex === pokemons.length - 1) {
			this.setState({ pokemonIndex: 0 })
		}
	}

	filteredPokemon = () => {
    const { pokemonType, pokemonIndex } = this.state
    if (pokemonType !== "all") {
      const pokeFiltered = pokemons.filter((type) => type.type === pokemonType);
      return pokeFiltered[pokemonIndex];
    }
    return pokemons[pokemonIndex];
	}

  setPokemonsState({ target }) {
    this.setState({ pokemonType: target.innerHTML, pokemonIndex: 0 });
    console.log(target.innerHTML)
    console.log(this.state.pokemonType);
    // const { pokemonType } = this.state
    // if (target.innerHTML !== pokemonType){
    // }
  }

	render() {
    const { pokemons } = this.props;
    const { pokemonIndex, renderPokemon } = this.state
		return (
			<div >
				<div className="pokedex">
					{<Pokemon key={pokemons.id} pokemon={this.filteredPokemon()} />}
				</div>
				<div className='type-buttons'>
					<button onClick={ this.setPokemonsState}>Fire</button>
					<button onClick={ this.setPokemonsState}>Psychic</button>
				</div>
				<div className='next-button'>
					<button onClick={this.nextPokemon}> Next Pokemon</button>
				</div>
			</div>
		);
	}
}

export default Pokedex;