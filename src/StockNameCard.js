import './StockNameCard.css'
import Card from "react-bootstrap/Card";

const StockNameCard = (props) => {
  console.log('SNC:', props);
  return (
    <div>
      <Card></Card>
    </div>
  );

}

export default StockNameCard

// {
//   stocks.map((stockObj) => (
//     <Card key={stockObj.name} className="card">
//       <Card.Title>{stockObj.name}</Card.Title>
//       <Card.Text>
//         {stockObj.sharesOwned
//           ? `Shares: ${stockObj.sharesOwned}`
//           : `No shares owned`}
//       </Card.Text>
//       <Card.Text>
//         {stockObj.purchasePrice
//           ? `Shares: $${stockObj.purchasePrice}`
//           : `No shares owned`}
//       </Card.Text>
//     </Card>
//   ));
// }