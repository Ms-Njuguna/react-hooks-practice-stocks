import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onRemove}) {
  return (
    <div >
      <h2>My Portfolio</h2>
      {
        portfolio.map((pf) => {
          return(
            <Stock key={pf.id} stock={pf} onRemove={onRemove}/>
          );
        })
      }
    </div>
  );
}

export default PortfolioContainer;
