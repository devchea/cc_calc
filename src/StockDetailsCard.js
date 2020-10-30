import React, { useState, useEffect} from 'react'
import firebase from './firebase'

const StockDetailCard = () => {
  const [stocks, setStock] = useState([]);
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("stocks");

  const getStocks = () => {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
    setStock(items)
    setLoading(false)
    })
  }


  return (
    <div className="App">
      <h1>SDC</h1>
      {stocks.map((stock) => (
        <h3>{console.log('hi')}</h3>
      ))}
    </div>
  );
}

export default StockDetailCard