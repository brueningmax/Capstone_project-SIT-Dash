import React, { useState, useEffect } from "react";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import LatestApplicationsCard2 from "../components/latestApplicationsCard2";
import AppsGraph from "../components/applicationsGraph";

const Applications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [start_date_applications, setStartDateApplications] = useState("");
  const [end_date_applications, setEndDateApplications] = useState("");
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
    const response = await Axios(`${baseurl}applications/latest/100`);
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
    <div className="flex  w-full h-screen bg-background ">
      <div className="flex flex-col w-full ">
        <div className="flex  w-full  h-1/2   justify-center">
          <div className="flex h-full w-cardsWidth2 bg-white shadow-lg rounded-lg opacity-75">
            <AppsGraph
              data={applicationsGraphData}
              filteredData={applicationsGraphDataFiltered}
            />
          </div>
        </div>
        <div className="flex  h-1/2 items-center haha justify-center  ">
          <div className="flex flex-wrap  h-full w-cardsWidth2  justify-start gap-10 overflow-auto">
            {applicationsData.map((item) => (
              <LatestApplicationsCard2 data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
