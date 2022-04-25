import React, { useState, useEffect } from "react";
import Axios from "axios";
import { baseurl } from "../store/baseurl";
import AppsGraph from "../components/applicationsGraph";
import LatestApplicationsCard from "../components/latestApplicationsCard";
import UpComingBootcampsCard from "../components/upcomingBootcampsCard";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";

const Home = () => {
  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);

  const [numLatestApplications, setNumLatestApplications] = useState(3);
  const [numUpcomingBootcamps, setNumUpcomingBootcamps] = useState(10);

  useEffect(() => {
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
    console.log(bootcampsData)
  };

  const getApplicationsGraphData = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`
    );
    setApplicationsGraphData(response.data);
  };

  const getApplicationsGraphDataFiltered = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`,
      { filtered: "1" }
    );
    setApplicationsGraphDataFiltered(response.data);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex bg-background flex-col w-full h-full">
        <div className="flex w-full h-2/4 justify-start items-center mt-4">
          <div className="flex flex-col h-cardsHeight w-2/4 justify-between py-2  items-center">
            {applicationsData.map((item) => (
              <LatestApplicationsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-cardsHeight  w-cardsWidth bg-white shadow-lg rounded-lg bg-opacity-70 border border-gray-200">
            <AppsGraph
              data={applicationsGraphData}
              filteredData={applicationsGraphDataFiltered}
            />
          </div>
        </div>
        <div
          className="flex w-full h-2/4 justify-start items-center mb-4
        "
        >
          <div className="flex h-full px-3 w-1/2  justify-evenly  items-center">
            {bootcampsData.slice(0,3).map((item) => (
              <UpComingBootcampsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-cardsHeight w-cardsWidth bg-white border border-gray-200  shadow-lg rounded-lg bg-opacity-70 ">
            <UpcomingBootcampsGraph data={bootcampsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
