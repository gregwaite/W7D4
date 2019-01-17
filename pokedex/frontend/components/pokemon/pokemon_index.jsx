import React from 'react';

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon()
  }

  render() {
    const allPokemon = this.props.pokemon.map((pokemon) => (
      <li key={pokemon.id}>
        <a href="#">
          <p>{pokemon.id}</p>
          <img src={pokemon.image_url} height="20px" width="20px"/>
          <p>
            {pokemon.name}
          </p>
        </a>
      </li>
    ));
    return (
      <ul className="pokemon-index-container">
        {allPokemon}
      </ul>
    )
  }
}