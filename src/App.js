import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((result) => result.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
        // console.log(data);
      });
    // console.log(coins);
  }, []);

  return (
    <div>
      <h1>hello coins</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coins.map((item) => (
          <li>
            {item.name} ({item.symbol} : ${item.quotes.USD.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
