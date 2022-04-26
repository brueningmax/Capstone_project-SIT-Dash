import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

function UpcomingBootcampsGraph(props) {
  //   const data = props.data;
  const [chartData, setChartData] = useState([]);
  const [data, setData] = useState([]);
  const [tickValues, setTickValues] = useState([]);
  const [maxTickValue, setMaxTickValue] = useState(0);

  useEffect(() => {
    setData(props.data);
    setChartData(getChartData(props.data));
    setMaxTickValue(getTickValue(props.data) + 1);
  }, [props]);

  function getChartData(data) {
    const chartData = data.map(function (item, index) {
      // const legend = ["Name", "Enrolled", "Accepted", "Serious", "To Review", "Not Serious"]
      return {
        Name: item.name,
        Enrolled: item.applications.enrolled,
        Accepted: item.applications.accepted,
        Serious: item.applications.serious,
        "To Review": item.applications.to_review,
        "Not Serious": item.applications.not_serious,
      };
    });
    return chartData;
  }

  function getTickValue(data) {
    const tickValues = [];
    data.forEach((item) => tickValues.push(parseInt(item.applications.total)));
    return Math.max(...tickValues);
  }



  return (
    <div
      className="flex flex-column align-middle p-4 w-full"
    >
      <h2>Upcoming</h2>
      {maxTickValue === 0 ? (
        <p>Loading...</p>
      ) : (
        <ResponsiveBar
          data={chartData}
          keys={["Not Serious", "To Review", "Serious", "Accepted", "Enrolled"]}
          indexBy="Name"
          margin={{ top: 60, right: 140, bottom: 100, left: 80 }}
          padding={0.7}
          // margin={{ top: 50, right: 100, bottom: 100, left: 20 }}
          // padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#D68D96", "#FDDB93", "#AFDAA3", "#7AB495", "#819FB3"]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 9,
            tickPadding: 7,
            tickRotation: -40,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 4,
          }}
          gridYValues={4}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          //
          legends={[
            {
              dataFrom: "keys",
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 30,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 22,
              toggleSerie: true,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}

export default UpcomingBootcampsGraph;
