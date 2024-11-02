import React from 'react';
import '../style/partials/Card.scss';

function Card(props){
  return (
    <div className ="card-container">
      <div className = "card-header">
        <h2>{props.title}</h2>
      </div>
      <div className = "card-body">
        <p>{props.description}</p>
      </div>
      <div className = "card-footer">
        <button className = "card-button">Fun Card Button</button>
      </div>
    </div>
  )
}

export default Card;