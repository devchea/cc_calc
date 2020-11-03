import "./Dashboard.css";
import data from './data.json'
import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import StockNameCard from './StockNameCard'



const Dashboard = () => {

  const url = data
  const [stocks, setStocks] = useState([null]);
  
  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
      .then(resp => console.log(resp))
    }
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
