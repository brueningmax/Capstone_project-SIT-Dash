import React, { useState, useEffect } from "react";
import Axios from "axios";
import Graph from "../components/graph";

import LatestApplicationsCard from "../components/latestApplicationsCard";
import UpComingBootcampsCard from "../components/upcomingBootcampsCard";

import { baseurl } from "../store/baseurl";
// import MainPageStyle from "../style/main.style";
import AppsGraph from "../components/applicationsGraph";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";
import { Line } from "../components/applicationsGraph";

const Home = () => {
  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps, setBootcamps] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);

  const [numLatestApplications, setNumLatestApplications] = useState(3);
  const [numUpcomingBootcamps, setNumUpcomingBootcamps] = useState(3);

  useEffect(() => {
    getBootcamps();
    getLatestApplications();
    getLatestBootcamps();
    getApplicationsGraphData();
    getApplicationsGraphDataFiltered();
  }, []);

  const getLatestApplications = async () => {
    const response = await Axios(
      `${baseurl}applications/latest/${numLatestApplications}`
    );
    setLatestApplications(response.data);
  };

  const getLatestBootcamps = async () => {
    const response = await Axios(
      `${baseurl}bootcamps/upcoming/${numUpcomingBootcamps}`
    );
    setLatestBootcamps(response.data);
  };

  const getApplicationsGraphData = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`
    );
    setApplicationsGraphData(response.data);
  };

  const getBootcamps = async () => {
    const response = await Axios(`${baseurl}bootcamps/upcoming/10`);
    console.log(response.data);
    setBootcamps(response.data);
  };

  const getApplicationsGraphDataFiltered = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`,
      { filtered: "1" }
    );
    setApplicationsGraphDataFiltered(response.data);
  };

  // const bootcampsTable =
  //   bootcampsData.map((item) =>
  //     <MiddleBar
  //       data={item}
  //       key={item.id}

  // shortBootcampName={item.name}
  // bootcampLocation={item.bootcamp_location}
  // bootcampStartDate={item.start_date}
  // />

  //   <tr key={item.name}>
  //     <td>{item.name}</td>
  //     <td>{item.bootcamp_location.location}</td>
  //     <td>{item.start_date}</td>
  //   </tr>
  // )

  // const applicationsTable =
  //   applicationsData.map((item) =>
  //     <NarrowBar
  //       data={item}
  //       key={item.id}
  //     />
  //   )

  // console.log(applicationsGraphData)
  // console.log(bootcampsData)

  return (
    <div className="flex w-full h-screen">
      <div className="flex bg-background flex-col w-full ">
        <div className="flex w-full h-2/4 justify-start items-center">
          <div className="flex flex-col h-full w-2/4 justify-around py-2  items-center">
            {applicationsData.splice(0, 3).map((item) => (
              <LatestApplicationsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-cardsHeight  w-cardsWidth bg-white shadow-lg rounded-lg bg-opacity-70 border border-gray-400">
            <AppsGraph
              data={applicationsGraphData}
              filteredData={applicationsGraphDataFiltered}
            />
          </div>
        </div>
        <div className="flex w-full h-2/4 justify-start items-center">
          <div className="flex h-full w-2/4  justify-evenly items-center ">
            {bootcampsData.map((item) => (
              <UpComingBootcampsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-cardsHeight w-cardsWidth bg-white border border-gray-400shadow-lg rounded-lg bg-opacity-70">
            <UpcomingBootcampsGraph data={bootcampsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
