import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

function AppsGraph(props) {
  const [requestedData, setRequestedData] = useState(props.filteredData);
  const [chartData, setChartData] = useState([]);
  const originalColors = ["#78C1C2", "#F3A5BC", "#4D94D0", "#F5CF89"];
  const [chartColors, setChartColors] = useState(originalColors);
  const [toggleValue, setValue] = useState(true);

  //checking the toggle value to show all or only filtered values
  useEffect(() => {
    toggleValue
      ? setRequestedData(props.filteredData)
      : setRequestedData(props.data);
    toggleValue
      ? setChartData(getChartData(props.filteredData))
      : setChartData(getChartData(props.data));
  }, [props, toggleValue]);

  //function to convert API data into a format that can be used by Nivo Charts
  function getChartData(requestedData) {
    const data = [
      "part_time_bootcamps",
      "short_courses",
      "immersive_bootcamps",
      "total",
    ].map(function (item, index) {
      const courseNames = [
        "Part-time Bootcamps",
        "Short Courses",
        "Immersive Bootcamps",
        "Total",
      ];

      const monthData = [];

      for (const key in requestedData) {
        const obj = {
          x: `${requestedData[key].month} ${requestedData[key].year}`,
          y: requestedData[key][item],
        };
        monthData.push(obj);
      }
      return {
        id: courseNames[index],
        data: monthData,
      };
    });
    return data;
  }

  const data = getChartData(requestedData);

  //toggle component for filtering data

  const Switch = ({ isOn, handleToggle, onColor }) => {
    return (
      <div className="p-5 flex flex-column items-center h-tenP border-red-500  border-2">
        <span className="ml-2 text-base text-gray-800 px-3 ">Total</span>
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer"
            checked={isOn}
            onChange={handleToggle}
          />
          <div className="h-6 bg-gray-200 border-2 border-toggelButton rounded-full w-11 after:absolute after:top-0.5 after:left-0.5 after:bg-toggelBackgroud after:border after:border-gray-300 after:h-5 after:w-5 after:shadow-sm after:rounded-full peer-checked:after:translate-x-full peer-checked:after:border-toggelBackgroud  peer-checked:bg-backgroud peer-checked:border-toggelButton after:transition-all after:duration-300"></div>
          <span className="ml-2 text-base text-gray-800">Enrolled</span>
        </label>
      </div>
    );
  };

  return (
    <>
      {chartData === [] ? (
        <p>Loading...</p>
      ) : (
        <div
          className="flex flex-col   h-full 
           pb-30 border-blue-500  border-2 w-full"
        >
          <div className="flex h-tenP items-center justify-end border-green-500  border-2">
            <Switch
              isOn={toggleValue}
              handleToggle={() => setValue(!toggleValue)}
            />
          </div>
          <ResponsiveLine
            data={chartData}
            curve="monotoneX"
            // blendMode="multiply"
            margin={{
              top: 50,
              right: 50,
              bottom: 50,
              left: 60,
            }}
            colors={chartData.map((c, index) => chartColors[index])}
            lineWidth={0}
            xScale={{
              type: "point",
            }}
            yScale={{
              type: "linear",
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: (v) => {
                return v.substring(0, 3) === "Jan" ? v : v.substring(0, 3);
              },
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // legend: 'students',
              // legendOffset: -40,
              // legendPosition: 'middle'
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
                    background: "white",
                    padding: "9px 10px",
                    border: "2px solid #ccc",
                    fontSize: "20px",
                  }}
                >
                  <div>{point.serieId}</div>
                  <div>
                    {point.data.x}: {point.data.y}
                  </div>
                </div>
              );
            }}
            onMouseEnter={(point, event) => {
              //get index of selected chart and get corresponding color
              const selectedIndex = chartData.findIndex(
                (item) => item.id === point.serieId
              );
              const selectedColor = chartColors[selectedIndex];

              //create new array of only the selected chart
              const newSortedData = [];
              newSortedData.push(chartData[selectedIndex]);
              setChartData(newSortedData);

              // set chart color as the selected color
              setChartColors([selectedColor]);
            }}
            onMouseLeave={(point, event) => {
              //revert the data and chart colors to the original state
              setChartColors(originalColors);
              setChartData(data);
            }}
            layers={[
              "grid",
              "markers",
              "axes",
              "areas",
              "crosshair",
              "lines",
              "slices",
              "points",
              "legends",
              "mesh",
            ]}
          />
        </div>
      )}
    </>
  );
}
export default AppsGraph;
