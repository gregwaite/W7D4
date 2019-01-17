import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Route, Link } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  componentDidMount() {
    // debugger
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(this.props.match.params.pokemonId);
    }
  } 

  render() {
    // debugger
    const pokemon = this.props.pokemon;
    const items = pokemon.items === undefined ? "" : pokemon.items.map(item => (
     <li key={item}>
        <Link to={`/pokemon/${pokemon.id}/items/${item}`}>
          <img src={this.props.items[item].image_url} alt={this.props.items[item].name}
          width="150px" height="150px"/>
        </Link>
     </li> 
    ));
    // debugger
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name}/>
        </figure>
        <h2>{pokemon.name}</h2>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves === undefined ? "None" : pokemon.moves.join(", ")}</li>
        </ul>
        <section className="pokemon-items-container">
          <h2>Items</h2>
          <ul className="pokemon-items">
            {items}
          </ul>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </section>
      </section>

    );
  }
}