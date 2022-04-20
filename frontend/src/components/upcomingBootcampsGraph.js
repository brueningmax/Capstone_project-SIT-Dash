import React, { Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import { ResponsiveBar } from "@nivo/bar";
import { closedCurvePropKeys } from "@nivo/core";
import { Defs } from "@nivo/core";

function upcomingBootcampsGraph(props) {
  
  const [requestedData, setRequestedData] = useState([]);
  const [chartData, setChartData] = useState([])
  const originalColors = ["#82c91e", "#228be6", "#fa5252", "#000000", "#868e96"]
  const [chartColors, setChartColors] = useState(originalColors)
  const [toggleValue, setValue] = useState(true);


}

export default upcomingBootcampsGraph;