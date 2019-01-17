import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_ONE_POKEMON:
      return merge({}, state, { [action.pokemon.id]: action.pokemon });
    default: 
      return state;
  }
};