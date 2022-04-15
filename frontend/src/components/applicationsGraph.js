import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import { ResponsiveLine } from "@nivo/line";



  const data = [
    {
      id: "Japan",
      color: "hsl(237, 37%, 54%)",
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
      color: "hsl(178, 65%, 46%)",
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
      color: "hsl(1, 83%, 69%)",
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
      color: "hsl(43, 100%, 60%)",
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
      color: "hsl(153, 36%, 55%)",
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

  // const [lineColor, setColor] = useState('');

  
export const Line = props => (layerProps) => {
  console.log(layerProps);
  // const { centerX, centerY } = layerProps;
  const selectedData = [].push(data[0])
  
  return (
    // <text
    //   // x={centerX}
    //   // y={centerY}
    //   textAnchor="middle"
    //   dominantBaseline="central"
    //   style={{
    //     fontSize: "52px",
    //     fontWeight: "600"
    //   }}
    // >
    //   'hello'
    // </text>
    
    <Line
      labelYOffset={0}
      width={100}
      height={100}
      data={selectedData}
      curve="monotoneX" 
      margin={{
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      }}
      
      xScale={{
        type: "point"
      }}
      
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto"
      }}
    />
  )
}

 
  const AppsGraph = () => {
  return (
  <div>
    <div style={{ height: "400px", width: "100%" }}>
      <ResponsiveLine
        data={data}
        curve="monotoneX" 
        // blendMode="multiply"
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50
          }}
          
        // colors={({id, data}) => data[`${id}Color`]}
        
        xScale={{
          type: "point"
        }}
        
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto"
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "top",
          tickSize: 5,
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
          
        enableArea={true}
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
        
        onMouseEnter={(_data, event) => {
          event.target.style.fill = '#ffffff';
        }}
          onMouseLeave={(_data, event) => {
          console.log(event.target.style.fill)
          event.target.style.fill = '#FFFFFF';
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
  </div>
  )

}

export default AppsGraph;