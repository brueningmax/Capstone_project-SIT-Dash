import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from './../tailwind.config.js'
// const twFullConfig = resolveConfig(tailwindConfig)

// console.log(twFullConfig.theme.colors['serious'])

function BootcampPieChart(props) { 
  
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const colors = {
        serious: "#96F98B",
        not_serious: "#ff0a54",
        to_review: "#f5d151",
        enrolled: "#6085c9",
        dropped_out: "#cd13ae",
        accepted: "#09ae7d",
        total: "#000000",
        background: "#f1f0fa",
      }
    

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
          if (key === "total" || key === "else") {}
          else {
        chartData.push({
          id: data[index],
          value: value
        //   color: colors
        })
          }
      }
      console.log(chartData)
    return chartData;
  }
  
  const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
        let total = 0
        dataWithArc.forEach(datum => {
            total += datum.value
        })
    
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '52px',
                    fontWeight: 500,
                }}
            >
                {total}
            </text>
        )
    }
    

  return (
  <div style={{width: "100%", height: "170px" }}>
    <ResponsivePie
        data={chartData}
        margin={{
            top: 10,
            bottom: 10,
                       
        }}
        valueFormat=" >-"
        innerRadius={0.6}
        padAngle={0.7}
        // cornerRadius={3}
        activeOuterRadiusOffset={8}
        // borderWidth={1}
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
            // {
            //     match: {
            //         id: 'enrolled'
            //     },
            //     id: 'dots'
            // },
            // {
            //     match: {
            //         id: 'accepted'
            //     },
            //     id: 'dots'
            // },
            // {
            //     match: {
            //         id: 'serious'
            //     },
            //     id: 'dots'
            // },
            // {
            //     match: {
            //         id: 'not_serious'
            //     },
            //     id: 'lines'
            // },
            // {
            //     match: {
            //         id: 'to_review'
            //     },
            //     id: 'lines'
            // }
        ]}
        // legends={[
        //     {
        //         data: chartData.map((item, index) => {
        //             return {
        //                 id: item.id
        //             }
        //         }),
        //         anchor: 'bottom',
        //         direction: 'column',
        //         toggleSerie: true,
        //         justify: false,
        //         translateX: 0,
        //         translateY: 0,
        //         itemWidth: 108,
        //         itemHeight: 33,
        //         itemsSpacing: 0,
        //         symbolSize: 24,
        //         itemDirection: 'left-to-right'
        //     }
        // ]}
        
        layers={[
            'arcs',
            'arcLabels',
            'arcLinkLabels', 
            'legends',
            CenteredMetric,
          ]}
    />
    </div>
)
}   
export default BootcampPieChart;