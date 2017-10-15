import {ACTION_PLAYER_ADD} from '../actions/players/player_add_action';
import {ACTION_PLAYER_REMOVE} from '../actions/players/player_remove_actions';

export default function(state = {}, action) {
    switch(action.type) {
        case ACTION_PLAYER_ADD:
            let hero = action.payload;
            // Must do the below- Redux assumes state will not be directly mutated.
            // This allows it to do an aggesssive componentShouldUpdate pattern
            // If we mutate state directly, may lead to hard-to-discover bugs
            return Object.assign({}, state, { [hero.id]: action.payload })

        case ACTION_PLAYER_REMOVE:
            let id = action.payload;
            delete state[id]; //remove property from object
            return Object.assign({}, state); //new fresh copy, this will not work if we return only state;

        default:
            return state;
    }
}