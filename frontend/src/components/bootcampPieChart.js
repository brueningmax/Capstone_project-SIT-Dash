import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";

function BootcampPieChart(props) { 
  
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setData(props.data);
    setChartData(getChartData(props.data))
  }, [props])

  function getChartData(requestedData) {
    const data = [
      "Dropped Out",
      "Enrolled",
      "Accepted",
      "Serious",
      "Not Serious",
      "To Review",
    ]
    const chartData = []
    for (const [index, [key, value]] of Object.entries(Object.entries(requestedData))) {
        chartData.push({
          id: key,
          label: data[index],
          value: value
        })
    }
    return chartData;
  }


  return (
  <div style={{width: "100%", height: "100px" }}>
    <ResponsivePie
        data={chartData}
        margin={{}}
        valueFormat=" >-"
        innerRadius={0.6}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'enrolled'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'accepted'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'serious'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'not_serious'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'to_review'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
    </div>
)
}   
export default BootcampPieChart;