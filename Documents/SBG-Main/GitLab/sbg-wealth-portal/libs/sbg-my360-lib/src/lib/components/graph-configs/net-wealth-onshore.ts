import { StyleService } from '@sbg/common';

let palette: StyleService;
palette = new StyleService();
const colours = palette.getPalette();

export function onshoreGraphColor() {
  return colours.graph11;
}

export function onshoreGraphConfig() {
  return {
    chart: {
      type: 'area',
      height: 350
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: true,
        formatter: function() {
          return '';
        }
      },
      tickColor: 'transparent',
      tickInterval: 1,
      minPadding: 0,
      maxPadding: 0,
      startOnTick: true,
      endOnTick: true
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      }
    },
    tooltip: {
      backgroundColor: colours.whiteColor,
      crosshairs: true,
      style: {
        color: colours.fontDarkColor
      },
      borderColor: colours.fontDarkColor,
      borderRadius: 6,
      borderWidth: 1,
      shape: 'square',
      shadow: false,
      formatter: function() {
        return (
          '<div>R ' +
          this.y.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') +
          '</div>'
        );
      }
    },
    plotOptions: {
      series: {
        color: colours.graph11,
        marker: {
          enabled: false
        }
      },
      area: {
        lineColor: colours.graph11,
        lineWidth: 2,
        marker: {
          lineWidth: 1,
          lineColor: colours.graph11
        }
      }
    },
    legend: {
      enabled: false
    },
    series: [
      {
        data: [],
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [[0, colours.graph11], [1, colours.graph11.alpha(0.1)]]
        },
        fillOpacity: 1
      }
    ]
  };
}

export function onshoreGaugeConfig() {
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
      margin: 0,
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
        data: [{ y: 0, color: colours.graph11 }, { y: 0, color: '#ededed' }],
        size: '95%',
        innerSize: '75%',
        dataLabels: {
          enabled: false
        }
      }
    ]
  };
}
