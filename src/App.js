import React, { useState } from 'react';
import './App.css';
import firebase from './firebase'


const App = () => {
  const [stock, setStock] = useState([])

  const ref = firebase.firestore().collection("stocks")

  return (
    <div className="App">
      <h1>CC Calc</h1>
    </div>
  );
}

export default App;