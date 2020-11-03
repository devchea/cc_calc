import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import StockNameCard from './StockNameCard'
import ProgressBar from "react-bootstrap/ProgressBar";


const Dashboard = () => {
  const [stocks, setStocks] = useState([null]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("stocks").get();
      setStocks(data.docs.map((doc) => ({...doc.data()})));
    };
    fetchData();
  }, []);

  return (
    <div>
      {(stocks[0] === null
      ) ? (
        <h2>
          Loading...
          <ProgressBar animated now={80} />
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
