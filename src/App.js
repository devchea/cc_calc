import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import StockNameCard from './StockNameCard';


const App = () => {
  return (
    <div className='App'>
      <StockNameCard/>
      <Dashboard/>
    </div>
  )
}

export default App;