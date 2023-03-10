import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Chart = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars per language',
        decimals: 0,
        theme: 'candy',
        showPercentValues: 0,
        doughnutRadius: '60%',
      },
      data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default Chart
