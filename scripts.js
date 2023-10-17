// Bar Chart

var barChartOptions = {
    series: [{
    data: [150, 110, 220, 170, 190, 68, 196, 240, 222, 182, 166, 184]
  }],
    chart: {
    type: 'bar',
    height: 250,
    toolbar:{
        show: true
    },
  },
  colors: [
    "grey",
    "grey",
    "grey", 
    "grey", 
    "grey",
    "grey", 
    "grey", 
    "orange", 
    "grey",
    "grey", 
    "grey", 
    "grey"
    ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    enabled : false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  // Doughnut Chart

  var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    labels: ["Total New Customers"],

    series: [65],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#000000"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 1.5
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "10px"
          },
          value: {
            color: "#fe0",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#BA55D3"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
   
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  