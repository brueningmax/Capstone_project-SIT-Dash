import React, { Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import { ResponsiveLine } from "@nivo/line";
import { closedCurvePropKeys } from "@nivo/core";
import { Defs } from "@nivo/core";
import { line } from "d3-shape";

 
const AppsGraph = (props) => {

  const [requestedData, setRequestedData] = useState(null);

  // const requestedData = props.data;
  console.log(requestedData)

  // const getApplicationData = (requestedData) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         requestedData
  //       })
  //     }, 1500)
  //   })
  // }

 
    
  useEffect(() => {
    // props.data
    //   .then(data =>
    //     setRequestedData(data)


    const fetchData = async () => {
      await props.fetchData()
          }
    fetchData();
  }, [])


  function getChartData(requestedData) {
    const data = ["short_courses", "immersive_bootcamps", "part_time_bootcamps", "total"].map(function (item, index) {
    const monthData = []

    for (const key in requestedData) {
      const obj = { x: `${requestedData[key].month} ${requestedData[key].year}`, y: requestedData[key][item] };
      monthData.push(obj)
    }
  
    return (
    {
    id: item,
    data: monthData
    }
  )
  })
  return data;
}
  const data = getChartData(requestedData);

  // const data = [
  //   {
  //     id: "Japan",
  //     data: [
  //       {
  //         x: "jan",
  //         y: 291
  //       },
  //       {
  //         x: "feb",
  //         y: 58
  //       },
  //       {
  //         x: "mar",
  //         y: 281
  //       },
  //       {
  //         x: "apr",
  //         y: 204
  //       },
  //       {
  //         x: "may",
  //         y: 72
  //       },
  //       {
  //         x: "jun",
  //         y: 228
  //       },
  //       {
  //         x: "jul",
  //         y: 105
  //       },
  //       {
  //         x: "aug",
  //         y: 15
  //       },
  //       {
  //         x: "sep",
  //         y: 161
  //       },
  //       {
  //         x: "oct",
  //         y: 209
  //       }
  //     ]
  //   },
  //   {
  //     id: "France",
  //     data: [
  //       {
  //         x: "jan",
  //         y: 49
  //       },
  //       {
  //         x: "feb",
  //         y: 105
  //       },
  //       {
  //         x: "mar",
  //         y: 124
  //       },
  //       {
  //         x: "apr",
  //         y: 43
  //       },
  //       {
  //         x: "may",
  //         y: 79
  //       },
  //       {
  //         x: "jun",
  //         y: 48
  //       },
  //       {
  //         x: "jul",
  //         y: 251
  //       },
  //       {
  //         x: "aug",
  //         y: 244
  //       },
  //       {
  //         x: "sep",
  //         y: 12
  //       },
  //       {
  //         x: "oct",
  //         y: 61
  //       }
  //     ]
  //   },
  //   {
  //     id: "US",
  //     // color: "hsl(1, 83%, 69%)",
  //     data: [
  //       {
  //         x: "jan",
  //         y: 151
  //       },
  //       {
  //         x: "feb",
  //         y: 160
  //       },
  //       {
  //         x: "mar",
  //         y: 64
  //       },
  //       {
  //         x: "apr",
  //         y: 23
  //       },
  //       {
  //         x: "may",
  //         y: 232
  //       },
  //       {
  //         x: "jun",
  //         y: 295
  //       },
  //       {
  //         x: "jul",
  //         y: 19
  //       },
  //       {
  //         x: "aug",
  //         y: 224
  //       },
  //       {
  //         x: "sep",
  //         y: 139
  //       },
  //       {
  //         x: "oct",
  //         y: 282
  //       }
  //     ]
  //   },
  //   {
  //     id: "Germany",
  //     // color: "hsl(43, 100%, 60%)",
  //     data: [
  //       {
  //         x: "jan",
  //         y: 122
  //       },
  //       {
  //         x: "feb",
  //         y: 95
  //       },
  //       {
  //         x: "mar",
  //         y: 60
  //       },
  //       {
  //         x: "apr",
  //         y: 89
  //       },
  //       {
  //         x: "may",
  //         y: 164
  //       },
  //       {
  //         x: "jun",
  //         y: 15
  //       },
  //       {
  //         x: "jul",
  //         y: 212
  //       },
  //       {
  //         x: "aug",
  //         y: 248
  //       },
  //       {
  //         x: "sep",
  //         y: 187
  //       },
  //       {
  //         x: "oct",
  //         y: 253
  //       }
  //     ]
  //   },
  //   {
  //     id: "Norway",
  //     // color: "hsl(153, 36%, 55%)",
  //     data: [
  //       {
  //         x: "jan",
  //         y: 271
  //       },
  //       {
  //         x: "feb",
  //         y: 16
  //       },
  //       {
  //         x: "mar",
  //         y: 23
  //       },
  //       {
  //         x: "apr",
  //         y: 69
  //       },
  //       {
  //         x: "may",
  //         y: 99
  //       },
  //       {
  //         x: "jun",
  //         y: 22
  //       },
  //       {
  //         x: "jul",
  //         y: 281
  //       },
  //       {
  //         x: "aug",
  //         y: 52
  //       },
  //       {
  //         x: "sep",
  //         y: 102
  //       },
  //       {
  //         x: "oct",
  //         y: 86
  //       }
  //     ]
  //   }
  // ];
 
  const originalColors = ["#82c91e", "#228be6", "#fa5252", "#000000", "#868e96"]
  const [chartColors, setChartColors] = useState(originalColors)
  const [selData, setSelData] = useState(data[0])
  const [chartData, setChartData] = useState([])

  console.log(chartData)

  useEffect(() => {
    setChartColors(originalColors);
    setChartData(data);
    // setSelData(data[0]);
  }, []);
  
  return (
    <div>
      {data === [] ? (
        <p>loading...</p>
      ) : (
    <div style={{ height: "500px", width: "100%" }}>
        <ResponsiveLine
          data={chartData}
          curve="monotoneX"
          // blendMode="multiply"
          margin={{
            top: 100,
            right: 50,
            bottom: 50,
            left: 50
          }}
          
          // colors={{ scheme: "nivo"}}
          colors={data.map((c, index) => chartColors[index])}
          // lineWidth={2}
          lineWidth={0}
          
        
          xScale={{
            type: "point"
          }}
        
          yScale={{
            type: "linear",
            min: "auto",
            max: "10"
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
        
          // dotSize={10}
          // dotColor="inherit:darker(0.9)"
          // dotBorderWidth={1}
          // dotBorderColor="#ffffff"
          // dotLabel="y"
          // dotLabelYOffset={0}
          // pointLabelYOffset={0}
          
          pointSize={0}
          enableArea={true}
          areaOpacity={.7}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[]}
          useMesh={true}
          isInteractive={true}
          pointLabelYOffset={0}

          onMouseEnter={(point, event) => {
            console.log(point)

            ////set color of selected graph to red
            // const selectedIndex = data.findIndex(item => item.id === point.serieId)
            // const selectedColor = "red"
            ////
            
            // const selectedIndex = chartColors[index].value
            
            //set color of non-selected graphs to grey
            const selectedIndex = data.findIndex(item => item.id === point.serieId)
            const selectedColor = chartColors[selectedIndex]


            //resorting data to place selected chart at index 0 so the chart appears in front of all other charts.
            // const newSortedData = [...chartData]
            const newSortedData = []
            // newSortedData.unshift(newSortedData.splice(selectedIndex, 1)[0])
            newSortedData.push(chartData[selectedIndex])
            setChartData(newSortedData)
            //
            
            // console.log(chartData)
            // console.log(newSortedData)
            
            ////resorting colors to place the color of the selected chart at index 0 of chartColors to match the newSortedData

            //OPTION 1: change color of selected chart and make it appear in front of other charts
            // const newColors = [...chartColors]
            // newColors.splice(selectedIndex, 1)
            // newColors.unshift(selectedColor)
            // setChartColors(newColors);
            
            //OPTION 2: keep color of selected chart but make all others grey
            // const newColors = [...chartColors]
            // newColors.splice(selectedIndex, 1)
            // newColors.unshift(selectedColor)
            // setChartColors(newColors);

            const newColors = [selectedColor, "grey", "grey", "grey","grey"]
            setChartColors(newColors);

            const newData =  data[selectedIndex]
            // console.log(newData)
            setSelData(newData)
            console.log(selData)
            // selData = selData
        }}
          onMouseLeave={(point, event) => {

            setChartColors(originalColors)
            setChartData(data)
            console.log(chartColors)
            setSelData([])
            // setSelData([])
        }}

        layers={[
          'grid',
          'markers',
          'axes',
          'areas',
          // Line,
          // SecondGraph,
          'crosshair',
          'lines',
          'slices',
          'points',
          'legends',
          'mesh',
          // selData,
          ]}
        />
        </div>
        )}
    </div>

  )

}
export default AppsGraph;


// const SecondGraph = ({selData, xScale, yScale, innerHeight }) => {
//     // const newData = selData;
//   const newData = [
//     {
//       id: "Norway",
//       // color: "hsl(153, 36%, 55%)",
//       data: [
//         {
//           x: "jan",
//           y: 271
//         },
//         {
//           x: "feb",
//           y: 16
//         },
//         {
//           x: "mar",
//           y: 23
//         },
//         {
//           x: "apr",
//           y: 69
//         },
//         {
//           x: "may",
//           y: 99
//         },
//         {
//           x: "jun",
//           y: 22
//         },
//         {
//           x: "jul",
//           y: 281
//         },
//         {
//           x: "aug",
//           y: 52
//         },
//         {
//           x: "sep",
//           y: 102
//         },
//         {
//           x: "oct",
//           y: 86
//         }
//       ]
//     }
//   ]
//     const [data, setData] = useState(newData);
  
  
//     const myFunction = () => {
//       setData(newData)
//     }
    
//     console.log(data)
  
//     useEffect(() => {
//       myFunction();
//       return () => {
//         setData(newData);
//       }
//     }, []);
    
  
//   console.log(data)  
//   const lineGenerator = line()
//      .defined(d => d.data)
//       .x(d => xScale(d.data.x))
//       .y(d => yScale(d.data.y))
//       // .style("monotoneX")
  
//     return (
//       <>
//        <Fragment>
//         <path
//           d={lineGenerator(newData[0])}
//           fill="black"
//           fillOpacity={0.6}
//           stroke="#3daff7"
//           strokeWidth={2}
//           style={{ pointerEvents: "none" }}
//           />
//        </Fragment>
//       </>
//     );
//   };

