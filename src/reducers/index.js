import { combineReducers } from 'redux';
import reducer_hero from './reducer_hero';
import reducer_player from './reducer_player';
import reducer_alert from './reducer_alert';

const rootReducer = combineReducers({
  currentHero : reducer_hero,
  myPlayers : reducer_player,
  alert: reducer_alert
});

export default rootReducer;
