export const ACTION_SHOW_ALERT = 'ACTION_SHOW_ALERT';

export default function(message) {
  let action = {
    type: ACTION_SHOW_ALERT,
    payload: message
  };

  return action;
}
