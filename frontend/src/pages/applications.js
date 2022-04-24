import LatestApplicationsCard2 from "../components/latestApplicationsCard2";
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
    <div className="flex  w-full h-screen bg-background ">
      <div className="flex flex-col w-full ">
        <div className="flex  w-full  h-fortyP   justify-center">
       
          <div className="flex h-full w-cardsWidth2 justify-between items-center">
            {applicationsData.map((item) => (
              <LatestApplicationsCard2 data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="flex h-sixteyP items-center justify-center ">
          <div className="flex h-5/6 w-cardsWidth2 bg-white shadow-lg rounded-lg opacity-75 border-2 border-gray-200">
            <AppsGraph
              data={applicationsGraphData}
              filteredData={applicationsGraphDataFiltered}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
