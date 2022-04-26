import React, { useState, useEffect } from "react";
import Axios from "axios";
import { baseurl } from "../store/baseurl";
import AppsGraph from "../components/applicationsGraph";
import LatestApplicationsCard from "../components/latestApplicationsCard";
import ApplicationCard from "../components/applicationCard";
import UpComingBootcampsCard from "../components/upcomingBootcampsCard";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";

const Home = () => {
  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);

  const [numLatestApplications, setNumLatestApplications] = useState(100);
  const [numUpcomingBootcamps, setNumUpcomingBootcamps] = useState(100);

  // Axios.defaults.xsrfCookieName = 'csrftoken'
  // Axios.defaults.xsrfHeaderName = 'X-CSRFToken'

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
    <div className="flex w-screen h-full ">
      <div className="flex bg-background  w-full h-full ">
        <div className="flex flex-col w-1/2 h-full  items-center ">
          <div className="flex h-1/2 w-cardsWidth3 justify-center items-center ">
            <div className="flex  w-full h-cardsHeight bg-white shadow-lg rounded-lg bg-opacity-70 ">
              <AppsGraph
                data={applicationsGraphData}
                filteredData={applicationsGraphDataFiltered}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 h-1/2 w-full justify-between overflow-auto items-center">
            {applicationsData.slice(0, 10).map((item) => (
              <ApplicationCard data={item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full border-l-2 ">
          <div className="flex h-1/2 w-full   items-center justify-center">
            <div className="flex w-cardsWidth3  h-cardsHeight bg-white border border-gray-200  shadow-lg rounded-lg bg-opacity-70 ">
              <UpcomingBootcampsGraph data={bootcampsData} />
            </div>
          </div>

          <div className="flex flex-col h-1/2 w-full justify-between  items-center overflow-auto ">
            {bootcampsData.slice(0, 5).map((item) => (
              <UpComingBootcampsCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
