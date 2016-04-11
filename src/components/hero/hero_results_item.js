import React from 'react';
export default (props)=> {
  return (
    <div>
        <img src={props.image} />
        <span>{props.name}</span>
    </div>
  );
};
