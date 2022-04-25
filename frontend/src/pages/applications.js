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

  const [start_date, setStartDate] = useState("");
  const [status, setStatus] = useState("");
  const [bootcamp_location, setBootcampLocation] = useState("");

  const [applicationsData, setLatestApplications] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);
  
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations();
    getLatestApplications();
    getApplicationsGraphData();
    getApplicationsGraphDataFiltered();
  }, [start_date, status, bootcamp_location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const response = Axios.post(
    //   `${baseurl}applications/filter/`,
    //   { start_date, bootcamp_location, status}
    // );
    // setLatestApplications(response.data);
  };

  const getLocations = async () => {
    const response = await Axios(`${baseurl}locations/all/`);
    setLocations(response.data);
  };

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
    <div className="flex flex-col w-full h-screen bg-background ">
      <form className="flex w-full h-ten items-center justify-between mt-4 px-20">
Filters:
  
  <label>
    Location:
    <select
      name="bootcamp_location"
      value={bootcamp_location}
      onChange={e => setBootcampLocation(e.target.value)}>
      <option value=""key="">All</option>
      {locations.map(function (item) {
        return <option value={item.id} key={item.id}>{item.location}</option>
      })}
    </select>
  </label>
  
  <label>
    Start Date:
    <input
      name="start_date"
      type="date"
      value={start_date}
      onChange={e => setStartDate(e.target.value)} />
  </label>

  <label>
    Status:
    <select
      name="status"
      value={status}
      onChange={e => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="enrolled">Enrolled</option>
        <option value="serious">Serious</option>
        <option value="accepted">Accepted</option>
        <option value="to_review">To Review</option>
        <option value="dropped_out">Dropped Out</option>
        <option value="not_serious">Not Serious</option>
    </select>
  </label>
  
  <button
    type='onSubmit'
    onClick={handleSubmit}
    className="text-indigo-300 bg-indigo-900 py-2 px-4 rounded"
  > Filter </button>         
</form>


      <div className="flex flex-col w-full h-full">
        <div className="flex  w-full  h-fortyP  justify-center">
       
          <div className="flex h-full w-cardsWidth2 justify-between items-center">
            {applicationsData.map((item) => (
              <LatestApplicationsCard2 data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="flex h-sixteyP items-center justify-center  ">
          <div className="flex h-5/6 w-cardsWidth2 bg-white shadow-lg rounded-lg opacity-75">
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
