import React, { useEffect } from 'react';

const DifferentTradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        width: '100%',
        height: window.innerHeight,
        symbol: 'NASDAQ:AAPL', // Change the symbol to a different stock or cryptocurrency
        interval: 'D', // Change the interval (e.g., 'D' for daily)
        timezone: 'Etc/UTC',
        theme: 'dark', // Use a different theme ('light' or 'dark')
        style: '2', // Use a different chart style (e.g., '1' or '2')
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        studies: ['RSI@tv-basicstudies', 'MACD@tv-basicstudies'], // Add or remove studies as needed
        container_id: 'different_tradingview_widget' // Change the container ID
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="different_tradingview_widget" />; // Change the div ID
};

export default DifferentTradingViewWidget;
