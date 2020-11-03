import './StockNameCard.css'
import Card from "react-bootstrap/Card";

const StockNameCard = (props) => {
  const showDetails = props.showDetails
  return (
  
    <div>
      {props.stocks.map((stockObj) => (
        <Card onClick={() => showDetails(stockObj)} key={stockObj.name} className="card">
          <Card.Title>{stockObj.name}</Card.Title>
          <Card.Text>
            {stockObj.sharesOwned
              ? `Shares: ${stockObj.sharesOwned}`
              : `No shares owned`}
          </Card.Text>
          <Card.Text>
            {stockObj.purchasedPrice
              ? `Purchased Price: $${stockObj.purchasedPrice}`
              : null}
          </Card.Text>
        </Card>
      ))}
    </div>
  );

}

export default StockNameCard

