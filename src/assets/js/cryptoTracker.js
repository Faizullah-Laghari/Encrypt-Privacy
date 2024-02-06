import React, { useEffect, useState } from "react";
import axios from "axios";
import './cryptoTracker.css';

const CryptoPriceTracker = () => {
  const [cryptoData, setCryptoData] = useState({
    BTC: null,
    ETH: null,
    DOGE: null,
    XRP: null,
    SHIB: null
  });
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,XRP,SHIB&tsyms=USD")
        .then((response) => {
          const data = response.data.DISPLAY;
          setCryptoData({
            BTC: data.BTC.USD,
            ETH: data.ETH.USD,
            DOGE: data.DOGE.USD,
            XRP: data.XRP.USD,
            SHIB: data.SHIB.USD
          });
          setLastUpdated((new Date()).toLocaleString());
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const renderRow = (symbol, data) => {
    if (!data) return null; // Check if data is loaded

    return (
      <tr>
        <td className="iocn_symbol"><img src={`https://cryptocompare.com${data.IMAGEURL}`} alt={symbol} /><strong>{symbol}</strong> {data.FROMSYMBOL}</td>
        <td>{data.PRICE}</td>
        <td className={data.CHANGEPCT24HOUR && data.CHANGEPCT24HOUR.includes('-') ? 'negative' : 'positive'}>
          {data.CHANGEPCT24HOUR}%</td>
        <td>{data.VOLUME24HOUR}</td>
        <td>{data.MKTCAP}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1 className="mb-4 text-start">Crypto Price Tracker</h1>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th className="text-start">Coin</th>
              <th>Price</th>
              <th>24h %</th>
              <th>24h Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cryptoData).map(([key, value]) => renderRow(key, value))}
          </tbody>
        </table>
      </div>
      <p style={{ paddingTop: '5px' }}>Updated: {lastUpdated}</p>
    </div>
  );
};

export default CryptoPriceTracker;
