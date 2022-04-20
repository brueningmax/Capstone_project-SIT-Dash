import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import '../style/toggle.css';

 
function AppsGraph(props) {

  const [requestedData, setRequestedData] = useState([]);
  const [chartData, setChartData] = useState([])
  const originalColors = ["#bdbdbd", "#fbb4ae", "#b3cde3", "#ccebc5"]
  const [chartColors, setChartColors] = useState(originalColors)
  const [toggleValue, setValue] = useState(true);

  //checking the toggle value to show all or only filtered values
  useEffect(() => {
    toggleValue ? setRequestedData(props.filteredData) : setRequestedData(props.data);
    toggleValue ? setChartData(getChartData(props.filteredData)) : setChartData(getChartData(props.data));
  }, [props, toggleValue])

  //function to convert API data into a format that can be used by Nivo Charts
  function getChartData(requestedData) {

    const data = ["part_time_bootcamps", "short_courses", "immersive_bootcamps", "total"].map(function (item, index) {
      
    const courseNames = ["Part-time Bootcamps", "Short Courses", "Immersive Bootcamps", "Total"]

    const monthData = []

    for (const key in requestedData) {
      const obj = { x: `${requestedData[key].month} ${requestedData[key].year}`, y: requestedData[key][item] };
      monthData.push(obj)
    }
    return (
    {
    id: courseNames[index],
    data: monthData
    }
      )
    })
    return data;
  }
  
  const data = getChartData(requestedData);

  //toggle component for filtering data
  const Switch = ({ isOn, handleToggle, onColor }) => {
    return (
      <>
        <p>Total</p>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
        <p>Enrolled</p>
      </>
    );
  };
 
  return (
    <>
    <div className="app">
      <Switch
        isOn={toggleValue}
        onColor="#ccebc5"
        handleToggle={() => setValue(!toggleValue)}
      />
    </div>
    <div style={{ height: "500px", width: "100%" }}>
        <ResponsiveLine
          data={chartData}
          curve="monotoneX"
          // blendMode="multiply"
          margin={{
            top: 100,
            right: 100,
            bottom: 50,
            left: 50
          }}
          colors={chartData.map((c, index) => chartColors[index])}
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
            tickSize: 10,
            tickPadding: 15,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 10,
          }}

          pointSize={0}
          enableArea={true}
          enableGridX={false}
          areaOpacity={1}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[]}
          useMesh={true}
          isInteractive={true}
          pointLabelYOffset={0}
          tooltip={({ point }) => {
            return (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 10px',
                        border: '2px solid #ccc',
                        fontSize: '20px',
                    }}
                >
                    <div>{point.serieId}</div>
                    <div>{point.data.x}: {point.data.y}</div>
                </div>
            )
        }}

          onMouseEnter={(point, event) => {

            //get index of selected chart and get corresponding color
            const selectedIndex = chartData.findIndex(item => item.id === point.serieId)
            const selectedColor = chartColors[selectedIndex]

            //create new array of only the selected chart
            const newSortedData = []
            newSortedData.push(chartData[selectedIndex])
            setChartData(newSortedData)

            // set chart color as the selected color
            setChartColors([selectedColor]);
        }}
          onMouseLeave={(point, event) => {

            //revert the data and chart colors to the original state
            setChartColors(originalColors)
            setChartData(data)
        }}

        layers={[
          'grid',
          'markers',
          'axes',
          'areas',
          'crosshair',
          'lines',
          'slices',
          'points',
          'legends',
          'mesh',
          ]}
        />
    </div>
    </>
  )
}
export default AppsGraph;

