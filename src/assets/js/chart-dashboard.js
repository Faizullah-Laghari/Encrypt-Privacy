var options = {
  series: [
    {
      name: "Down",
      data: [31, 40, 28, 51, 42, 109, 100, 102, 52, 65, 87, 62],
    },
    {
      name: "Upgrade",
      data: [11, 32, 65, 32, 34, 52, 41, 52, 32, 25, 57, 22],
    },
  ],
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    height: 500,
    zoom: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#212224",
    strokeDashArray: 2,
  },

  colors: ["#EA6130", "#2AA517"],

  yaxis: {
    labels: {
      style: {
        colors: "#7F8083",
        fontSize: "16px",
        cssClass: "font-montserrat",
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mrc",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#7F8083",
        fontSize: "16px",
        cssClass: "font-montserrat",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  stroke: {
    width: 1.5,
    curve: "smooth",
  },
};

const options2 = {
  chart: {
    type: "donut",
    width: 390,
  },

  labels: ["Security Score Done", "Security Score Not Done"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  colors: ["#EA6130", "#443632"],
  plotOptions: {
    pie: {
      // customScale: 1.2,
      donut: {
        size: "80%",
        labels: {
          show: true,

          value: {
            show: true,
            fontSize: "36px",

            fontWeight: 400,
            color: "#fff",
            label: "80%",
            offsetY: 16,
            cssClass: "db-sans",
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Security Score",
            fontSize: "22px",
            fontWeight: 400,
            color: "#7F8083",
            cssClass: "font-montserrat",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart.render();
chart2.render();
