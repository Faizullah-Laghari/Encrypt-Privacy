import React, { useEffect } from 'react';

const CryptoConverter = () => {
  useEffect(() => {
    // Ensure the Crypto Converter Widget is available after the script is loaded
    if (window.customElements && !window.customElements.get('crypto-converter-widget')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget@1.5.2/dist/latest.min.js';
      script.async = true;
      script.onload = () => {
        // Widget is ready to use
        console.log('Crypto Converter Widget is loaded and ready.');
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Place a placeholder element for the Crypto Converter Widget */}
      <crypto-converter-widget
        shadow
        symbol
        live
        background-color="#131722"
        border-radius="0.60rem"
        fiat="united-states-dollar"
        crypto="bitcoin"
        amount="1"
        decimal-places="2"
      ></crypto-converter-widget>
    </div>
  );
};

export default CryptoConverter;
