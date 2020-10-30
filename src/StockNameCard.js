import React from 'react'
import firebase from './firebase';

const docRefStocks = firebase
  .firestore()
  .collection('stocks')
  .doc('AMD');

const StockNameCard = () => {
  //get all stocks owned to show in name card
  const getStocks = () => {
    docRefStocks.get()
    .then(function(doc) {
      if (doc.exists) {
        console.log('doc data:', doc.data());
      } else {
        console.log('no such doc');
      }
    })
    .catch(function(error) {
      console.log('error getting document:', error);
    })
  }
  
  getStocks()
  return(
    <div>
      <h1>SNC</h1>
    </div>
  )

}

export default StockNameCard