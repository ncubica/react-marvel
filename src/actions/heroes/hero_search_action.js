import axios from 'axios';
import appConfig from '../../config';

export const ACTION_HERO_FETCH = "HERO_FETCH";

export default function(character) {

    let action = {
        type : ACTION_HERO_FETCH,
        payload : null
    };

    if(character) {
        // if(character.length > 2) { //if we want to wait for min characters :P
            let characterParam = `characters?nameStartsWith=${character}`;
            let query = `${appConfig.API_URL}${characterParam}${appConfig.API_KEY}`;
            action.payload  = axios.get(query);
            return action;
        // }
    }
    
    return action;
}

