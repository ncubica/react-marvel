export const ACTION_PLAYER_ADD = "ACTION_PLAYER_ADD";

export default function(hero) {
    let action = {
        type : ACTION_PLAYER_ADD,
        payload : null
    };

    if(hero) {
        action.payload = hero;
        return action;
    }

    return action;
}

