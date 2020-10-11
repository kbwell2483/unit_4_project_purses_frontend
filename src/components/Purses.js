import React from 'react';

export default function Purses (props) {
  return(
    <div>
      {
        props.purses.map(purse =>{
          return(
            <div key={purse.id}
                className="purse">
            <h3>{purse.brand}</h3>
            <h3>{purse.name}</h3>
            <p>{purse.description}</p>
            <small>{purse.price}</small>
            </div>
          )
        })
      }
    </div>
  );
}