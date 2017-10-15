import React from 'react';

export default ({ image, name }) => {
    return (
        <div>
            <img src={image} />
            <span className="cardText">{name}</span>
        </div>
    );
};
