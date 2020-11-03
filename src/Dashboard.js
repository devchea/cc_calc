import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import StockNameCard from './StockNameCard'




const Dashboard = () => {

  const url = ('http://localhost:3000/stocks')
  const [stocks, setStocks] = useState([null]);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
      .then(resp => resp.json())
      .then(stockObj => {
        setStocks(stockObj)
      })
    }
    console.log(stocks[0].contracts);
    fetchData()
  }, [])


  return (
    <div>
      {(stocks[0] === null
      ) ? (
        <h2>
          Loading...
        </h2>
      ) : (
        <Container>
          <CardColumns className="cardColumn">
          <StockNameCard 
            {...stocks} />
          </CardColumns>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
