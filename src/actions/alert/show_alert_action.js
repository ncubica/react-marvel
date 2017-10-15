export const ACTION_SHOW_ALERT = 'ACTION_SHOW_ALERT';

export default function(message, thumbnail) {
  let action = {
    type: ACTION_SHOW_ALERT,
    payload: {
      message,
      thumbnail
    }
  };

  return action;
}
