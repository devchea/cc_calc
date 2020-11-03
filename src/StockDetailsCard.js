import React from 'react'

const StockDetailCard = (props) => {
  console.log(props);


  return (
    <div className="App">
      <h1>Details</h1>
      {
        props.stocks.map((stockObj) => (
          ``
        ))
      }
    </div>
  );
}

export default StockDetailCard