import LatestApplicationsCard from "../components/latestApplicationsCard";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import AppsGraph from "../components/applicationsGraph";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../store/baseurl";
import Axios from "axios";

const Applications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [start_date_applications, setStartDateApplications] = useState("");
  const [end_date_applications, setEndDateApplications] = useState("");
  // const [bootcamp_type, setBootcampType] = useState("");
  // const [bootcamp_location, setBootcampLocation] = useState("");
  const [applicationsData, setLatestApplications] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);

  useEffect(() => {
    getLatestApplications();
    getApplicationsGraphData();
    getApplicationsGraphDataFiltered();
  }, []);

  const getLatestApplications = async () => {
    const response = await Axios(`${baseurl}applications/latest/5`);
    setLatestApplications(response.data);
  };

  const getApplicationsGraphData = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`
    );
    setApplicationsGraphData(response.data);
    console.log(applicationsGraphData);
  };

  const getApplicationsGraphDataFiltered = async () => {
    const response = await Axios.post(
      `${baseurl}applications/graph_data/dashboard/`,
      { filtered: "1" }
    );
    setApplicationsGraphDataFiltered(response.data);
    console.log(applicationsGraphDataFiltered);
  };

  return (
    <div className="flex  w-full h-screen border-green-800 border-4">
      <div className="flex flex-col w-full border-blue-600 border-2 border-solid">
        <div className="flex border-2 w-full  h-2/4  border-red-700 border-solid">
          {/* <form>
        <label>
          Start Date Range:
          <input
            name="start_date"
            type="date"
            value={start_date_applications}
            onChange={(e) => setStartDateApplications(e.target.value)}
          />
        </label>
      </form> */}

          <div className="flex h-full w-full border-yellow-300  border-solid border-2 justify-evenly items-center">
            {applicationsData.map((item) => (
              <LatestApplicationsCard data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="flex h-1/2 w-full border-black border-2 border-solid">
          <AppsGraph
            data={applicationsGraphData}
            filteredData={applicationsGraphDataFiltered}
          />
        </div>
      </div>
    </div>
  );
};

export default Applications;
