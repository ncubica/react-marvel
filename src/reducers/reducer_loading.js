import { ACTION_HERO_FETCH } from '../actions/heroes/hero_search_action';
import { ACTION_START_LOADING } from '../actions/loading/start_loading_action';

export default function(state = null, action) {
    switch (action.type) {
        case ACTION_START_LOADING:
            return true;
        case ACTION_HERO_FETCH:
            return false;
        default:
            return state;
    }
}
