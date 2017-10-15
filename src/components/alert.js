import React from 'react';
import './styles/alert.css'

// Made this as generic as possible to open the door to reusing it for different messages down the line.
// Could have used the HeroItem component to display the thumbnail, but would've restricted this component's flexibility.
export default function Alert({
    message,
    thumbnail,
    thumbnailMessage,
    onDismiss
}) {
    return (
        <div className="Alert">
            <div className="Alert__imgContainer">
                <div className="centeredTextContainer">
                    <span className="cardText">{thumbnailMessage}</span>
                </div>
                <img src={thumbnail} alt="Thumbnail" />
            </div>
            <h3>{message}</h3>
            <button onClick={onDismiss} className="redRemove">
                <i className="fa fa-times" aria-hidden="true" />
            </button>
        </div>
    );
}
