import React from 'react';
export default (props)=> {
  return (
    <div>
        <img src={props.image} />
        <span className="card-text">{props.name}</span>
    </div>
  );
};
