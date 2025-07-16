import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAdd}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return(
        <Stock key={stock.id} stock={stock} onAdd={onAdd}/>
        );
      })}
    </div>
  );
}

export default StockContainer;
