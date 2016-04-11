import {ACTION_HERO_FETCH} from '../actions/heroes/hero_search_action';
export default function(state = null, action) {

    switch(action.type) {
        case ACTION_HERO_FETCH:
            if(action.payload) {
                //action.payload.data is already a response data since REACT-PROMISE middleware processed it.
                return action.payload.data.data.results;
            }
            return state;
        default:
            return state;
    }
}