export const ACTION_PLAYER_REMOVE = "ACTION_PLAYER_REMOVE";

export default function(id) {
    let action = {
        type : ACTION_PLAYER_REMOVE,
        payload : null
    };

    if(id) {
        action.payload = id;
        return action;
    }

    return action;
}

