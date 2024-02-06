// tradingview-proxy.js
window.TradingViewScriptLoaded = false;

function loadTradingViewScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/tv.js';
  script.async = true;
  script.onload = () => {
    window.TradingViewScriptLoaded = true;
  };

  document.body.appendChild(script);
}

loadTradingViewScript();
