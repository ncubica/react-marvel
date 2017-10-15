import React from 'react';
export default (props)=> {
  return (
    <div>
        <img src={props.image} />
        <span className="cardText">{props.name}</span>
    </div>
  );
};
