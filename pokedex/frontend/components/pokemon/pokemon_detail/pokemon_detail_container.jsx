import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const pokemonId = ownProps.match.params.pokemonId;
  const pokemon = state.entities.pokemon[pokemonId] || {};
  return {
    pokemon,
    items: state.entities.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);