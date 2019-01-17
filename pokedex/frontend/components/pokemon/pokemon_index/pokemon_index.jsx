import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from '../pokemon_detail/pokemon_detail_container';
import { Route } from 'react-router-dom';

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon()
  }

  render() {
    const allPokemon = this.props.pokemon.map((pokemon) => <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>);
    return (
      <div className="pokedex">
        <ul className="pokemon-index-container">
          {allPokemon}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    )
  }
}