import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

function UpcomingBootcampsGraph(props) {
  console.log(props.data);

  //   const data = props.data;
  const [chartData, setChartData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
    setChartData(getChartData(props.data));
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

  // setChartData(getChartData(data))
  //   console.log(chartData)

  return (
    <div
      className="flex flex-column align-middle p-4 "
      style={{ width: "100%" }}
    >
      {chartData === [] ? (
        <p>Loading...</p>
      ) : (
        <ResponsiveBar
          data={chartData}
          keys={["Not Serious", "To Review", "Serious", "Accepted", "Enrolled"]}
          indexBy="Name"
          margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
          padding={0.3}
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
            tickRotation: 0,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            //   tickValues: {[0, 1, 2, 3, 4]}
          }}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          //   gridYValues={[0, 1, 2, 3, 4]}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
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
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
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

          // role="application"
          // ariaLabel="Nivo bar chart demo"
          // barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
      )}
    </div>
  );
}

export default UpcomingBootcampsGraph;
