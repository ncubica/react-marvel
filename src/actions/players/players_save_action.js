import axios from 'axios';

export const ACTION_PLAYERS_SAVE = 'ACTION_PLAYERS_SAVE';

export default function(players) {
    let action = {
        type: ACTION_PLAYERS_SAVE,
        payload: null
    };

    if (players.length > 0) {
        // Here we would assemble our query for the Rails backend
        let query = '';
        action.payload = axios.post(query, {
            items: players
        });
        return action;
    }

    return action;
}
