import React from 'react';

export default function Alert({
  message,
  thumbnail,
  thumbnailMessage,
  onDismiss
}) {
  return (
    <div className="Alert">
      <div className="Alert__img-container">
        <div className="centered-text-container">
          <span className="card-text">{thumbnailMessage}</span>
        </div>
        <img src={thumbnail} alt="Thumbnail" />
      </div>
      <h3>{message}</h3>
      <button onClick={onDismiss}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>
    </div>
  );
}
