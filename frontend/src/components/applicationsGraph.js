import React, { Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import { ResponsiveLine } from "@nivo/line";
import { closedCurvePropKeys } from "@nivo/core";






  // const [lineColor, setColor] = useState('');

  
// export const Line = props => (layerProps) => {
//   console.log(layerProps);
//   // const { centerX, centerY } = layerProps;
//   const selectedData = [].push(data[0])
  
//   return (
//     // <text
//     //   // x={centerX}
//     //   // y={centerY}
//     //   textAnchor="middle"
//     //   dominantBaseline="central"
//     //   style={{
//     //     fontSize: "52px",
//     //     fontWeight: "600"
//     //   }}
//     // >
//     //   'hello'
//     // </text>
    
//     <Line
//       labelYOffset={0}
//       width={100}
//       height={100}
//       data={selectedData}
//       curve="monotoneX"
//       margin={{
//         top: 50,
//         right: 50,
//         bottom: 50,
//         left: 50
//       }}
      
//       xScale={{
//         type: "point"
//       }}
      
//       yScale={{
//         type: "linear",
//         min: "auto",
//         max: "auto"
//       }}
//     />
//   )
// }


 
const AppsGraph = () => {

  
  const data = [
    {
      id: "Japan",
      // color: "hsl(237, 37%, 54%)",
      data: [
        {
          x: "jan",
          y: 291
        },
        {
          x: "feb",
          y: 58
        },
        {
          x: "mar",
          y: 281
        },
        {
          x: "apr",
          y: 204
        },
        {
          x: "may",
          y: 72
        },
        {
          x: "jun",
          y: 228
        },
        {
          x: "jul",
          y: 105
        },
        {
          x: "aug",
          y: 15
        },
        {
          x: "sep",
          y: 161
        },
        {
          x: "oct",
          y: 209
        }
      ]
    },
    {
      id: "France",
      // color: "hsl(178, 65%, 46%)",
      data: [
        {
          x: "jan",
          y: 49
        },
        {
          x: "feb",
          y: 105
        },
        {
          x: "mar",
          y: 124
        },
        {
          x: "apr",
          y: 43
        },
        {
          x: "may",
          y: 79
        },
        {
          x: "jun",
          y: 48
        },
        {
          x: "jul",
          y: 251
        },
        {
          x: "aug",
          y: 244
        },
        {
          x: "sep",
          y: 12
        },
        {
          x: "oct",
          y: 61
        }
      ]
    },
    {
      id: "US",
      // color: "hsl(1, 83%, 69%)",
      data: [
        {
          x: "jan",
          y: 151
        },
        {
          x: "feb",
          y: 160
        },
        {
          x: "mar",
          y: 64
        },
        {
          x: "apr",
          y: 23
        },
        {
          x: "may",
          y: 232
        },
        {
          x: "jun",
          y: 295
        },
        {
          x: "jul",
          y: 19
        },
        {
          x: "aug",
          y: 224
        },
        {
          x: "sep",
          y: 139
        },
        {
          x: "oct",
          y: 282
        }
      ]
    },
    {
      id: "Germany",
      // color: "hsl(43, 100%, 60%)",
      data: [
        {
          x: "jan",
          y: 122
        },
        {
          x: "feb",
          y: 95
        },
        {
          x: "mar",
          y: 60
        },
        {
          x: "apr",
          y: 89
        },
        {
          x: "may",
          y: 164
        },
        {
          x: "jun",
          y: 15
        },
        {
          x: "jul",
          y: 212
        },
        {
          x: "aug",
          y: 248
        },
        {
          x: "sep",
          y: 187
        },
        {
          x: "oct",
          y: 253
        }
      ]
    },
    {
      id: "Norway",
      // color: "hsl(153, 36%, 55%)",
      data: [
        {
          x: "jan",
          y: 271
        },
        {
          x: "feb",
          y: 16
        },
        {
          x: "mar",
          y: 23
        },
        {
          x: "apr",
          y: 69
        },
        {
          x: "may",
          y: 99
        },
        {
          x: "jun",
          y: 22
        },
        {
          x: "jul",
          y: 281
        },
        {
          x: "aug",
          y: 52
        },
        {
          x: "sep",
          y: 102
        },
        {
          x: "oct",
          y: 86
        }
      ]
    }
  ];
    // const originalColors = '({id, data}) => data[`${id}Color`]'
    // const [chartColors, setChartColors] = useState(originalColors)
    // console.log(chartColors);
  const originalColors = ["green", "yellow", "blue", "pink", "orange"]
  const [chartColors, setChartColors] = useState(originalColors)
  const [selData, setSelData] = useState(data[0])
  const [chartData, setChartData] = useState([])

  console.log(chartData)

  useEffect(() => {
    setChartColors(originalColors);
    setChartData(data);
  }, []);
  
  return (
  <div>
    <div style={{ height: "500px", width: "100%" }}>
        <ResponsiveLine
          data={chartData}
          curve="natural"
          // blendMode="multiply"
          margin={{
            top: 100,
            right: 50,
            bottom: 50,
            left: 50
          }}
          
          // colors={{ scheme: "nivo"}}
          colors={data.map((c, index) => chartColors[index])}
          // colors={colors}
          // colors={}

          scheme={'nivo'}

          // colorBy="index"
          lineWidth={0}
        
          xScale={{
            type: "point"
          }}
        
          yScale={{
            type: "linear",
            min: "auto",
            max: "300"
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "top",
            tickSize: 10,
            tickPadding: 15,
            tickRotation: 0,
            legend: "",
            legendOffset: 36
          }}
          axisLeft={{
            orient: "right",
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
            legend: "",
            legendOffset: 0
          }}
        
          dotSize={10}
          dotColor="inherit:darker(0.9)"
          dotBorderWidth={1}
          dotBorderColor="#ffffff"
          dotLabel="y"
          dotLabelYOffset={0}
          pointLabelYOffset={0}
          
          enableArea={true}
          areaOpacity={0.7}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[]}
          useMesh={true}
          isInteractive={true}

        
        
          // pointSize={10}
          // pointColor="white"
          // pointBorderWidth={2}
          // pointBorderColor={{ from: 'serieColor' }}
          // pointLabel="y"
          // pointLabelYOffset={-12}
          
          
        
          // 
          // enableArea={true}
          // motionStiffness={90}
          // motionDamping={15}
          // legends={[]}
          // isInteractive={true}
        
          onMouseEnter={(point, event) => {
            console.log(point)

            const selectedIndex = data.findIndex(item => item.id === point.serieId)
            // const selectedIndex = chartColors[index].value
            const selectedColor = "red"
            // const newColors = chartColors.map((color, index) => {
            //   if (selectedIndex == index) {
            //     return "hsl(0, 100%, 50%)"
            //   }
            //   return color
            // })
            const newSortedData = [...chartData]
            newSortedData.unshift(newSortedData.splice(selectedIndex, 1)[0])
            setChartData(newSortedData)
            console.log(chartData)
            console.log(newSortedData)
            

            const newColors = [...chartColors]
            // newColors[selectedIndex] = selectedColor;
            newColors.splice(selectedIndex, 1)
            newColors.unshift(selectedColor)
            setChartColors(newColors);
            // const newData =  data[selectedIndex]
            // console.log(newData)
            // setSelData(newData)
            // console.log(selData)
        }}
          onMouseLeave={(point, event) => {

            setChartColors(originalColors)
            setChartData(data)
            console.log(chartColors)
            // setSelData([])
        }}

        layers={[
          'grid',
          'markers',
          'axes',
          'areas',
          // Line,
          'crosshair',
          'lines',
          'slices',
          'points',
          'legends',
          'mesh',
          ]}
        />
      </div>
      
      <div className="secondGraph">
        <SecondGraph selectedData={selData}/>
        </div>
    </div>

  )

}

export default AppsGraph;

const SecondGraph = (props) => {
  const data = props.selectedData
  return (
    <ResponsiveLine
      
     curve="natural"
          margin={{
            top: 100,
            right: 50,
            bottom: 50,
            left: 50
          }}
    
          // colors={["red"]}

          lineWidth={3}
        
          xScale={{
            type: "point"
          }}
        
          yScale={{
            type: "linear",
            min: "auto",
            max: "300"
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
        
          enableGridY={false}

    />
  );
};