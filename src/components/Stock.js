import React from "react";

function Stock({stock, onAdd, onRemove}) {
  const {ticker, name, price} = stock;

  function handleClick() {
    if (onAdd) {
      onAdd(stock);
    } else if (onRemove) {
      onRemove(stock);
    }
  }
  
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker} : {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
