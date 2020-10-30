import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import StockNameCard from './StockNameCard'


const Dashboard = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("stocks").get();
      setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  console.log('DB:', stocks);
  return (
    <div>
      <h1>SNC</h1>
      <Container>
        <CardColumns className="cardColumn">
          <StockNameCard {...stocks}/>
        </CardColumns>
      </Container>
    </div>
  );
};

export default Dashboard;
