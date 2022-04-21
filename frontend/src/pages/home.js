import React, { useState, useEffect } from "react";
import Axios from "axios";
import Graph from "../components/graph";
import Sidebar from "../components/sidebar";
import LatestApplicationsCard from "../components/latestApplicationsCard";
import UpComingBootcampsCard from "../components/upcomingBootcampsCard";

import { baseurl } from "../store/baseurl";
// import MainPageStyle from "../style/main.style";
import AppsGraph from "../components/applicationsGraph";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";
import { Line } from "../components/applicationsGraph";

const Home = () => {
  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [applicationsGraphDataFiltered, setApplicationsGraphDataFiltered] =
    useState([]);

  const [numLatestApplications, setNumLatestApplications] = useState(3);
  const [numUpcomingBootcamps, setNumUpcomingBootcamps] = useState(5);

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
      {/* <div className="flex h-full w-1/8">
        <Sidebar />
      </div> */}

      <div className="flex flex-col w-full border-blue-600 border-2 border-solid">
        <div className="flex w-full h-2/4 border-green-600 border-solid border-4">
          <div className="flex flex-col h-full w-2/4 border-yellow-300  border-solid border-2 justify-evenly items-center">
            {applicationsData.map((item) => (
              <LatestApplicationsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-full w-2/4 border-black border-2 border-solid">
            <AppsGraph
              data={applicationsGraphData}
              filteredData={applicationsGraphDataFiltered}
            />
          </div>
        </div>
        <div className="flex w-full h-2/4 border-blue-400 border-solid border-4">
          <div className="flex h-full w-2/4 border-yellow-300  border-solid border-2 justify-evenly items-center">
            {bootcampsData.map((item) => (
              <UpComingBootcampsCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex h-full w-2/4 border-black border-2 border-solid">
            <UpcomingBootcampsGraph data={bootcampsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
