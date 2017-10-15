import React from 'react';

export default function Alert({ message, thumbnail, onDismiss }) {
  return (
    <div className="Alert">
      <img src={thumbnail} alt="Thumbnail" />
      <h3>{message}</h3>
      <button onClick={onDismiss}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>
    </div>
  );
}