import React from 'react';
import './App.css';
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