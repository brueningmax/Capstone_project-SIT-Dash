import React, { useState, useEffect } from "react";
import { baseurl } from "../store/baseurl"; 
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";

function Graph(props) {

  const data = props.applications;

  // const data = [
  //   {
  //     "first_name": "Mike",
  //     "last_name": "Jack",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-04-21T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },
  //   {
  //     "first_name": "Max",
  //     "last_name": "Max",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-04-23T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },
  //   {
  //     "first_name": "Avi",
  //     "last_name": "Avi",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-03-23T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },

  // ]

  function getChartData(array) {
    const chartData = [];

    data.forEach(element => {
      chartData.push(monthName(element.applied.substring(5, 7)))
    });

    const newArr = [...new Set(chartData)].map(function(val, index){
    return {month:val, count:chartData.filter(x => x==val).length};
    })
    
    return newArr;
  }

  function monthName(mon) {
    return ["Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec"][mon - 1];
  }
  
  const chartData = getChartData(data);

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} Applications: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }

  return (
    <div>
      <BarChart
        width={730}
        height={250}
        data={chartData}
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        }}
      >
        
        <CartesianGrid strokeDasharray="4 5" />
        <XAxis dataKey="month"/>
        <YAxis label={{ value: "Applications", position: "top" }}/>
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Graph;