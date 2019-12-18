import { StyleService } from '@sbg/common';

let palette: StyleService;
palette = new StyleService();
const colours = palette.getPalette();

export function netWealthDashboardTileGraphConfig() {
  return {
    chart: {
      type: 'area',
      height: 300
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
        color: colours.graph5
      },
      area: {
        lineColor: colours.graph5,
        lineWidth: 2,
        marker: {
          lineWidth: 1,
          lineColor: colours.graph5
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
          stops: [[0, colours.graph5], [1, (<any>colours.graph5).alpha(0.01)]]
        },
        fillOpacity: 1
      }
    ]
  };
}
