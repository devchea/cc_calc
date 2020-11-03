import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import StockNameCard from './StockNameCard'
import StockDetailsCard from './StockDetailsCard'




const Dashboard = () => {

  const url = "http://localhost:3000/stocks";
  const [stocks, setStocks] = useState([null]);
  const [details, setDetails] = useState([null])

  const fetchStocks = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setStocks(data))
  }

  useEffect(() => {
    fetchStocks()
  },[])


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
            stocks={stocks} />
          </CardColumns>

          <StockDetailsCard
            stocks={stocks} />
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
