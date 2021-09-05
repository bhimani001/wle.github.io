let chart = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21'],
    datasets: [{
      label: "student's",
      data: [1000, 2000, 3000, 5000, 10000, 15000],
      backgroundColor: [
        'rgba(253,0,54,0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  },
  options: {
    title: {
      display: true,
      text: "student's of W.L. Education",
      fontSize: 25
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: true
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//
// <script>
//   const {Chart} = require("chart.js");
//   let chart = document.getElementById('myChart').getContext('2d');
//   let my = new Chart(chart, {
//   type: 'bar',
//   data: {
//   labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//   datasets: [
// {
//   label: "Population (millions)",
//   backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//   data: [2478,5267,734,784,433]
// }
//   ]
// },
//   options: {
//   legend: { display: false },
//   title: {
//   display: true,
//   text: 'Predicted world population (millions) in 2050'
// }
// }
// });
//
// </script>
