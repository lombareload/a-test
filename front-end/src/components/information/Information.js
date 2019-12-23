import React from 'react';
import './Information.scss';

function Information({description = {}, pricing = {}}) {
  let {title} = description;
  let {currentPrice} = pricing;
  return (
    <div className="information">
      <h1>{title}</h1>
      <span>${currentPrice}</span>
    </div>
  );
}

export default Information;