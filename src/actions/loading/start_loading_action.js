export const ACTION_START_LOADING = 'ACTION_START_LOADING';

export default function() {
    let action = {
        type: ACTION_START_LOADING,
        payload: null
    };

    return action;
}
