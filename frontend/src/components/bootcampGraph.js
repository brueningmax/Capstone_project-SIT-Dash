import React, { useState, useEffect } from "react";
import { baseurl } from "../store/baseurl"; 
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BootcampGraph(props) {

  // const data = props.bootcamps;

  const data = [
    {
      name: "full stack",
      location: "Zurich",
      start_date: "2022-04-13",
      enrolled: 5,
      serious: 2,
      nonserious: 3,
      total: 10
    },

    {
      name: "data science",
      location: "munich",
      start_date: "2022-05-13",
      enrolled: 2,
      serious: 1,
      nonserious: 6,
      total: 9
    },

    {
      name: "crypto",
      location: "zurich",
      start_date: "2022-07-13",
      enrolled: 10,
      serious: 2,
      nonserious: 1,
      total: 13
    }
  ]
  

  return (
    <ResponsiveContainer width={'99%'} height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="enrolled" stackId="a" fill="#8884d8" />
        <Bar dataKey="serious" stackId="a" fill="#82ca9d" />
        <Bar dataKey="nonserious" stackId="a" fill="#ffc658" />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BootcampGraph;