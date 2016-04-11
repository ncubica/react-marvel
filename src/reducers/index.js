import { combineReducers } from 'redux';
import reducer_hero from './reducer_hero';
import reducer_player from './reducer_player';

const rootReducer = combineReducers({
  currentHero : reducer_hero,
  myPlayers : reducer_player
});

export default rootReducer;
