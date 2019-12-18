export function assetAllocationDashboardTileGraphConfig() {
  return {
    chart: {
      type: 'pie',
      height: 300
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: '<div></div><div></div>',
      useHTML: true,
      margin: 0,
      x: -155,
      y: 0,
      align: 'center',
      verticalAlign: 'middle'
    },
    yAxis: {
      title: {
        text: null
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
      },
      series: {
        states: {
          hover: {
            enabled: false
          }
        },
        point: {
          events: {
            legendItemClick: function() {
              return false;
            }
          }
        }
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      width: 300,
      height: 250,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      enabled: true,
      itemMarginTop: 5,
      itemMarginBottom: 10,
      symbolRadius: 6
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
              navigation: {
                enabled: false
              }
            },
            title: {
              margin: 0,
              x: 0,
              y: -110,
              align: 'center',
              verticalAlign: 'middle',
              fontSize: '10px'
            }
          }
        }
      ]
    },
    series: [
      {
        name: 'Outer',
        data: [],
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    ]
  };
}
