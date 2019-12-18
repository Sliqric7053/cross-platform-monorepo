export function assetAllocationOffshoreGaugeGraphConfig() {
  return {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent'
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: '<div></div>',
      useHTML: true,
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
      }
    },
    tooltip: {
      enabled: false
    },
    series: [
      {
        name: 'Inner',
        data: [{ y: 0, color: '#b34fc5' }, { y: 0, color: '#ededed' }],
        size: '95%',
        innerSize: '75%',
        dataLabels: {
          enabled: false
        }
      }
    ]
  };
}
