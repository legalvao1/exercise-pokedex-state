import React, {Component} from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types'

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

	nextPokemon = () => {
		this.setState((estadoAnterior) => ({
			pokemonIndex: estadoAnterior.pokemonIndex + 1
		}));			
		if(this.state.pokemonIndex 
			=== (this.state.pokemonType === 'all' ? pokemons.length : this.state.renderPokemon.length) - 1) {
			this.setState({ pokemonIndex: 0 })
		}
	}

	filteredPokemon = (target) => {
    if (target !== "all") {
      const pokeFiltered = pokemons.filter((type) => type.type === target);			
      return pokeFiltered;
    }
		return pokemons;
	}

  setPokemonsState({ target }) {
		this.setState({ pokemonType: target.innerHTML, pokemonIndex: 0, renderPokemon: this.filteredPokemon(target.innerHTML)});
  }

	pokemonTypeArray = () => {
		const pokemosSet = new Set(pokemons.map(({type}) => type ));
		return Array.from(pokemosSet);
	}

	render() {
    const { pokemons } = this.props;
    const { pokemonIndex, renderPokemon } = this.state
		return (
			<div >
				<div className="pokedex">
					{<Pokemon key={pokemons.id} pokemon={renderPokemon.length === 0 ? pokemons[pokemonIndex] : renderPokemon[pokemonIndex]} />}
				</div>
				<div className='type-buttons'>
					<button onClick={ this.setPokemonsState}>all</button>
					{this.pokemonTypeArray().map((item) => 
						<button onClick={ this.setPokemonsState }>{item}</button>
						)}
				</div>
				<div className='next-button'>
					<button onClick={this.nextPokemon}> Next Pokemon</button>
				</div>
			</div>
		);
	}
}

Pokedex.propTypes = {
  pok: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pokedex;