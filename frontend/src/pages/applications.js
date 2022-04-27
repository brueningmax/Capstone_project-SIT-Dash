import React, { useState, useEffect } from "react";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import CollapsableApplicationCard from "../components/collapsableApplicationCard";
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

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    getLocations();
    getLatestApplications();
    getApplicationsGraphData();
    getApplicationsGraphDataFiltered();
    return () => {
      abortController.abort();
  }
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
    if (bootcamp_location === "" && start_date === "" && status === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`);
      setLatestApplications((response.data));
    }
    else if (bootcamp_location === "" && start_date === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
      { status: status }
      );
      setLatestApplications((response.data));
    }
    else if (bootcamp_location === "" && status === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
      { start_date: start_date }
      );
      console.log(response.data)
      setLatestApplications((response.data));
    }
    else if (start_date === "" && status === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
      { bootcamp_location: bootcamp_location }
      );
      setLatestApplications((response.data));
    }
    else if (start_date === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
        {
          bootcamp_location: bootcamp_location,
          status: status
        }
      );
      setLatestApplications((response.data));
    }
    else if (bootcamp_location === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
        {
          start_date: start_date,
          status: status
        }
      );
      setLatestApplications((response.data));
    }
    else if (status === "") {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
        {
          start_date: start_date,
          bootcamp_location: bootcamp_location
        }
      );
      setLatestApplications((response.data));
    }
    else {
      const response = await Axios.post(
        `${baseurl}applications/filter/`,
        {
          start_date: start_date,
          bootcamp_location: bootcamp_location,
          status : status
        }
      );
      setLatestApplications((response.data));
    }
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
    <div className="flex flex-col w-full h-full bg-background ">
      <div className="flex  h-cardsT ">
        <form className="flex w-full h-full  items-center justify-between  px-20">
          Filters:
          <label>
            Location:
            <select
              name="bootcamp_location"
              value={bootcamp_location}
              onChange={(e) => setBootcampLocation(e.target.value)}
            >
              <option value="" key="">
                All
              </option>
              {locations.map(function (item) {
                return (
                  <option value={item.location} key={item.id}>
                    {item.location}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Start Date:
            <input
              name="start_date"
              type="date"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="enrolled">Enrolled</option>
              <option value="serious">Serious</option>
              <option value="accepted">Accepted</option>
              <option value="to_review">To Review</option>
              <option value="dropped_out">Dropped Out</option>
              <option value="not_serious">Not Serious</option>
            </select>
          </label>
        </form>
      </div>

      <div className="flex  w-full  h-cardsF    justify-center">
        <div className="flex h-full w-cardsWidth2 bg-offwhite shadow-lg rounded-lg opacity-75">
          <AppsGraph
            data={applicationsGraphData}
            filteredData={applicationsGraphDataFiltered}
          />
        </div>
        
      </div>
      <div className="flex mt-6 w-full h-cardsFF justify-center items-center">
        <div className="flex h-full w-cardsWidth2">
          <div className="grid grid-cols-3 h-full w-full gap-y-4 overflow-auto">
            {applicationsData.map((item) => (
              <CollapsableApplicationCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
