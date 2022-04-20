import React, { Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import { ResponsiveLine } from "@nivo/line";
import { closedCurvePropKeys } from "@nivo/core";
import { Defs } from "@nivo/core";
import { line } from "d3-shape";

function AppsGraph(props) {
  const [requestedData, setRequestedData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const originalColors = [
    "#82c91e",
    "#228be6",
    "#fa5252",
    "#000000",
    "#868e96",
  ];
  const [chartColors, setChartColors] = useState(originalColors);

  useEffect(() => {
    setRequestedData(props.data);
    setChartData(getChartData(props.data));
  }, [props.data]);

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
  console.log(data);
  console.log(chartData);
  console.log(requestedData);

  return (
    <div style={{ height: "400px", width: "700px" }}>
      <ResponsiveLine
        data={chartData}
        curve="monotoneX"
        // blendMode="multiply"
        margin={{
          top: 100,
          right: 50,
          bottom: 50,
          left: 50,
        }}
        colors={chartData.map((c, index) => chartColors[index])}
        lineWidth={0}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "10",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "top",
          tickSize: 10,
          tickPadding: 15,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisLeft={{
          orient: "right",
          tickSize: 5,
          tickPadding: 10,
          tickRotation: 0,
          legend: "",
          legendOffset: 0,
        }}
        pointSize={0}
        enableArea={true}
        areaOpacity={0.7}
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
          ////set color of selected graph to red
          // const selectedIndex = data.findIndex(item => item.id === point.serieId)
          // const selectedColor = "red"
          ////

          // const selectedIndex = chartColors[index].value

          //set color of non-selected graphs to grey
          const selectedIndex = chartData.findIndex(
            (item) => item.id === point.serieId
          );
          const selectedColor = chartColors[selectedIndex];

          //resorting data to place selected chart at index 0 so the chart appears in front of all other charts.
          // const newSortedData = [...chartData]
          const newSortedData = [];
          // newSortedData.unshift(newSortedData.splice(selectedIndex, 1)[0])
          newSortedData.push(chartData[selectedIndex]);
          setChartData(newSortedData);
          //

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

          // const newColors = [selectedColor, "grey", "grey", "grey","grey"]
          // setChartColors(newColors);
          // const newData =  data[selectedIndex]
          setChartColors([selectedColor]);
        }}
        onMouseLeave={(point, event) => {
          setChartColors(originalColors);
          setChartData(data);
        }}
        layers={[
          "grid",
          "markers",
          "axes",
          "areas",
          // Line,
          "crosshair",
          "lines",
          "slices",
          "points",
          "legends",
          "mesh",
        ]}
      />
    </div>
  );
}
export default AppsGraph;
