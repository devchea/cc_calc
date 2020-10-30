import "./StockNameCard.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";

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

  console.log(stocks);
  return (
    <div>
      <h1>SNC</h1>
      <Container>
        <CardColumns className="cardColumn">
          {stocks.map((stockObj) => (
            <Card key={stockObj.name} className="card">
              <Card.Title>{stockObj.name}</Card.Title>
              <Card.Text>
                {stockObj.sharesOwned
                  ? `Shares: ${stockObj.sharesOwned}`
                  : `No shares owned`}
              </Card.Text>
              <Card.Text>
                {stockObj.purchasePrice
                  ? `Shares: $${stockObj.purchasePrice}`
                  : `No shares owned`}
              </Card.Text>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default StockNameCard;
