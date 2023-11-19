//BAR CHART CODE

var barChartOptions = {
    series: [
    {
        name: 'TOTAL REGISTERED COMPLAINTS',
        data: [76,85,101,98,87,105,81,114,94]
    },{
        name: 'INFORMED COMPLAINTS',
        data: [70,83,100,90,86,100,79,113,92]
    },{
        name: 'REJECTED COMPLAINTS',
        data: [6,2,1,8,2,5,2,1,2]
    }
],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false,
    },
  },
  colors: [
    '#2962ff',
    '#2e7d32',
    '#d50000',
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke:{
    show: true,
    width:2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug','Sep', 'Oct'],
  },
  yaxis: {
    title:{
        text:'COMPLAINTS',
    },
    labels:{

    },
  },
  fill:{
    opacity: 1
  },
  grid:{
    borderColor:"#474747",
    yaxis:{
        lines:{
            show: true,
        },
    },
    xaxis:{
        lines:{
            show: true,
        },
    },
  },
  legend:{
    show: true,
    position: "bottom",
  },
  tooltip:{
    y:{
        formatter: function (val){
            return '' + val + ''
        }
    }
  }
};

  var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barchart.render();



 //***************//
  // AREA CHART
  //***************//


  var areaChartOptions = {
    series: [{
        name: "INFORMED COMPLAINTS",
        data: [70,83,100,90,86,100,79,113,92],
    }, {
        name: "PENDING TO INFORM",
        data: [6,2,1,8,2,5,2,1,2],
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar:{
          show: false,
        },
    },
    colors:["#00ab57","#d50000"],
    labels:["Jan", "Feb","Mar","Apr","May","Jun","Jul"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient:{
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity:1,
        stops:[0,100],
        type: "vertical",
      },
      type: "gradient",
    },
    grid: {
      borderColor:"#474747",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    markers: {
      size: 6,
      strokeColors: "#1b2635",
      strokeWidth: 3,
    },
    stroke: {
      curve:"smooth",
    },
    xaxis: {
      axisBorder: {
        color: "#55596e",
        show: true,
      },
      axisTicks: {
        color: "#55596e",
        show: true,
      },
      labels: {
        offsetY: 5,

      },
    },
    yaxis: 
    [
      {
        title: {
          text: "TOTAL COMPLAINTS",
        },
      },
      {
        opposite: true,
        title: {
          text: "INFORMED COMPLAINTS",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();


  //***************//
// AREA2 CHART
//***************//
var area2ChartOptions = {
  series: [{
  name: 'COMPLAINTS INFORMED',
  data: [44, 55, 31, 47, 31, 43, 26]
}, {
  name: 'PENDING TO INFORM',
  data: [55, 69, 45, 61, 43, 54, 37]
}],
  chart: {
      height: 350,
      type: 'area',
      toolbar: {
          show: false,
      },
  },
  colors: ["#4f35a1","#246dec"],
  dataLabels: {
      enabled: false,
  },


stroke: {
  curve: 'smooth'
},

labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul"],
markers: {
  size: 0
},
yaxis: [
  {
    title: {
      text: 'INFORMED COMPLAINTS',
    },
  },
  {
    opposite: true,
    title: {
      text: 'PENDING TO INFORM',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
}
};

var area2Chart = new ApexCharts(document.querySelector("#area2-chart"), area2ChartOptions);
area2Chart.render();

//***************//
// BAR2 CHART
//***************//
var bar2Chartoptions = {
  series: [{
  data: [10, 8, 6, 4]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
      show: false
  },
},
colors: [
  "#246dec",
  "#cc3c43",
  "#367952",
  "#f5b74f",
  "#4f35a1"
],
plotOptions: {
  bar: {
    distributed : true,  
    borderRadius: 4,
    vertical: false,
    columnWidth: '40%',
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  categories: ["TOTAL COMPLAINTS", "COMPLAINTS INFORMED", "REJECTED COMPLAINTS", "PENDING TO INFORM"],
},
yaxis: {
  title: {
      text: "YEARLY"
  }
}
};

var bar2Chart = new ApexCharts(document.querySelector("#bar2-chart"), bar2Chartoptions);
bar2Chart.render();


//***************//
// PIE CHART
//***************//
const ctx = document.getElementById('pieChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['EMPLOYEES', 'TOTAL COMPLAINTS'],
      datasets: [{
        label: 'TOTAL',
        data: [8, 9],
        backgroundColor: [
            'rgba(41,155,99,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(120,46,139,1)'
        ],
        borderColor: [
            'rgba(41,155,99,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(120,46,139,1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true
    }
  });

//***************//
// DOUGHNUT CHART
//***************//
const dou = document.getElementById('doughChart');

  new Chart(dou, {
    type: 'polarArea',
    data: {
      labels: ['COMPLAINTS INFORMED', 'REJECTED COMPLAINTS', 'PENDING TO INFORM'],
      datasets: [{
        label: 'TOTAL',
        data: [19,2,4],
        backgroundColor: [
            'rgba(41,155,99,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(120,46,139,1)'
        ],
      }]
    },
    options: {
        responsive: true
    }
  });