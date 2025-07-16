import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const stockAPI = 'http://localhost:3001/stocks';

function MainContainer() {
  const[stocks, setStocks] = useState([]);
  const[portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch(stockAPI)
    .then(r => r.json())
    .then(data => {setStocks(data)})
    .catch(error => console.error('Error loading stocks...', error))
  }, []);

  function addToPortfolio(pickedStock) {
    const alreadyInPortfolio = portfolio.find((stock) => stock.id === pickedStock.id);

    if(!alreadyInPortfolio) {
      setPortfolio([...portfolio, pickedStock]);
    }
  }

  function handleRemove(stockToRemove) {
    setPortfolio(portfolio.filter((stock) => stock.id !== stockToRemove.id));
  }

  const [sortBy, setSortBy] = useState('');
  const [filter, setFilter] = useState('All');

  const stocksToDisplay = () => {
    let filteredStocks = [...stocks];

    if (filter !== 'All') {
      filteredStocks = filteredStocks.filter(
        (stock) => stock.type === filter
      );
    }

    if (sortBy === 'Price') {
      filteredStocks.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Alphabetically') {
      filteredStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    }

    return filteredStocks;
  };
  

  function handleSort(e) {
    setSortBy(e.target.value);   
  }

  function handleFilterChange(value) {
    setFilter(value);
  }

  return (
    <div>
      <SearchBar onSort={handleSort} sort={sortBy} onFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay()} onAdd={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onRemove={handleRemove}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
