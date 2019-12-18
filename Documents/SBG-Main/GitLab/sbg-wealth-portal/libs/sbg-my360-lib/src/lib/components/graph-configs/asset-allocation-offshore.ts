export function assetAllocationOffshoreGraphConfig() {
  return {
    chart: {
      type: 'pie'
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
        }
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      width: 300,
      height: 235,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      enabled: true,
      itemMarginTop: 5,
      itemMarginBottom: 10,
      symbolRadius: 6,
      navigation: {
        enabled: false
      }
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
              y: -105,
              align: 'center',
              verticalAlign: 'middle'
            }
          }
        }
      ]
    },
    series: [
      {
        name: 'Inner',
        data: [],
        size: '32%',
        innerSize: '85%',
        dataLabels: {
          enabled: false
        }
      },
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
