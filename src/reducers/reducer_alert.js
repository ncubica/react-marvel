import { ACTION_SHOW_ALERT, ACTION_HIDE_ALERT } from '../actions';
export default function(state = null, action) {
  switch (action.type) {
    case ACTION_SHOW_ALERT:
      if (action.payload) {
        return Object.assign({}, state, {
          alertMessage: action.payload
        });
      }
      return state;
    case ACTION_HIDE_ALERT:
      return Object.assign({}, state, {
        alertMessage: null
      });
    default:
      return state;
  }
}
