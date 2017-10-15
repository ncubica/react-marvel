import { combineReducers } from 'redux';
import reducer_hero from './reducer_hero';
import reducer_player from './reducer_player';
import reducer_alert from './reducer_alert';
import reducer_loading from './reducer_loading';

const rootReducer = combineReducers({
  currentHero : reducer_hero,
  myPlayers : reducer_player,
  alert: reducer_alert,
  loading: reducer_loading
});

export default rootReducer;
