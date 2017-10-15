import React from 'react';
import './styles/image_card.css';

export default ({ image, text }) => {
    return (
        <div className="ImageCard">
            <div className="centeredTextContainer">
                <span className="cardText">{text}</span>
            </div>
            <img src={image} alt="Card" />
        </div>
    );
};
