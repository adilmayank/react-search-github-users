import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Chart = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked',
        yAxisName: 'Forked',
        xAxisName: 'Repos',
        yAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',
      },
      data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default Chart
