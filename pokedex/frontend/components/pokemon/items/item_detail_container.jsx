import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../../reducers/selectors';
import { requestOnePokemon } from '../../../actions/pokemon_actions'

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const item = selectPokemonItem(state, itemId) || {};
  
  return ({
    item,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);