import { ACTION_SHOW_ALERT } from '../actions/alert/show_alert_action';
import { ACTION_HIDE_ALERT } from '../actions/alert/hide_alert_action';

const initialState = {
    alertData: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION_SHOW_ALERT:
            if (action.payload) {
                return Object.assign({}, state, {
                    alertData: action.payload
                });
            }
            return state;
        case ACTION_HIDE_ALERT:
            return Object.assign({}, state, {
                alertData: null
            });
        default:
            return state;
    }
}
