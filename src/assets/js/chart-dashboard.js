// var options = {
//   series: [
//     {
//       name: "Down",
//       data: [31, 40, 28, 51, 42, 109, 100, 102, 52, 65, 87, 62],
//     },
//     {
//       name: "Upgrade",
//       data: [11, 32, 65, 32, 34, 52, 41, 52, 32, 25, 57, 22],
//     },
//   ],
//   chart: {
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//     height: 500,
//     zoom: {
//       enabled: false,
//     },
//   },
//   legend: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   grid: {
//     borderColor: "#212224",
//     strokeDashArray: 2,
//   },

//   colors: ["#EA6130", "#2AA517"],

//   yaxis: {
//     labels: {
//       style: {
//         colors: "#7F8083",
//         fontSize: "16px",
//         cssClass: "font-montserrat",
//       },
//     },
//   },
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mrc",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     labels: {
//       style: {
//         colors: "#7F8083",
//         fontSize: "16px",
//         cssClass: "font-montserrat",
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   stroke: {
//     width: 1.5,
//     curve: "smooth",
//   },
// };

// const options2 = {
//   chart: {
//     type: "donut",
//     width: 390,
//   },

//   labels: ["Security Score Done", "Security Score Not Done"],
//   legend: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: false,
//   },
//   colors: ["#EA6130", "#443632"],
//   plotOptions: {
//     pie: {
//       // customScale: 1.2,
//       donut: {
//         size: "80%",
//         labels: {
//           show: true,

//           value: {
//             show: true,
//             fontSize: "36px",

//             fontWeight: 400,
//             color: "#fff",
//             label: "80%",
//             offsetY: 16,
//             cssClass: "db-sans",
//             formatter: function (val) {
//               return val;
//             },
//           },
//           total: {
//             show: true,
//             showAlways: false,
//             label: "Security Score",
//             fontSize: "22px",
//             fontWeight: 400,
//             color: "#7F8083",
//             cssClass: "font-montserrat",
//             formatter: function (w) {
//               return w.globals.seriesTotals.reduce((a, b) => {
//                 return a + b;
//               }, 0);
//             },
//           },
//         },
//       },
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart1"), options);
// var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
// chart.render();
// chart2.render();

//3333333333333333333333333333333333333333333333333333333333333333333

import React, { useEffect } from 'react';
import './chart-data.css';

const CryptoChart = () => {
  useEffect(() => {
    // Proxy script to load TradingView library
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

    // Function to check if TradingView script is loaded
    const checkScriptLoaded = () => {
      if (window.TradingViewScriptLoaded) {
        // TradingView script is loaded, initialize the widget
        new window.TradingView.widget({
          width: '100%',
          // height: window.innerHeight,
          height:'500',
          symbol: 'COINBASE:BTCUSD',
          interval: '1',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          studies: ['BB@tv-basicstudies', 'Volume@tv-basicstudies', 'VWAP@tv-basicstudies'],
          container_id: 'tradingview_0b60e',
        });
      } else {
        // Script not loaded yet, wait and check again
        setTimeout(checkScriptLoaded, 100);
      }
    };

    // Check if the TradingView script is loaded
    checkScriptLoaded();
  }, []);

  return (
    <div id="tradingview_0b60e" className="tradingview-widget-container h-[500px] rounded-md">
      {/* Container for TradingView Widget */}
    </div>
  );
};

export default CryptoChart;
