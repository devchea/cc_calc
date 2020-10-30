import React, { useState } from 'react';
import './App.css';
import firebase from './firebase'
import StockDetailCard from './StockDetailsCard'
import StockNameCard from './StockNameCard';


const App = () => {
  return (
    <div className='App'>
      <StockNameCard/>
      <StockDetailCard/>
    </div>
  )
}

export default App;