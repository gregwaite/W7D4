import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { receiveOnePokemon, requestOnePokemon } from './actions/pokemon_actions';
import PokemonReducer from './reducers/pokemon_reducer';
import { fetchOnePokemon} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  window.dispatch = store.dispatch;
  window.fetchOnePokemon = fetchOnePokemon;
  window.receiveOnePokemon = receiveOnePokemon;
  window.PokemonReducer = PokemonReducer;
  window.requestOnePokemon = requestOnePokemon;

  ReactDOM.render(<Root store={store}/>, root);
});