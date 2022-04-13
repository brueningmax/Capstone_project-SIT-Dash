import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from "react"; 
import Axios from "axios"
import Graph from "../components/graph"; 
import NarrowBar from "../components/narrowbar";
import MiddleBar from "../components/middlebar";
import MiddleContainer from "../style/middlebar.style";
import { baseurl } from "../store/baseurl";

const Home = () => {

  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  
  useEffect(() => {
    getLatestApplications();
    getLatestBootcamps();
  }, [])
  
  const getLatestApplications = async() => {
    const response = await Axios(`${baseurl}applications/all/`);
    setLatestApplications(response.data)
  }

  const getLatestBootcamps = async() => {
    const response = await Axios(`${baseurl}bootcamps/all/`);
    setLatestBootcamps(response.data)
  }
  
  // const data = [
  //   {
  //     "first_name": "Mike",
  //     "last_name": "Jack",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-04-21T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },
  //   {
  //     "first_name": "Max",
  //     "last_name": "Max",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-04-23T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },
  //   {
  //     "first_name": "Avi",
  //     "last_name": "Avi",
  //     "bootcamp_name": "Full Stack",
  //     "applied": "2022-03-23T18:25:43.511Z",
  //     "bootcamp_location": "Zurich"
  //   },

  // ]

  const bootcampsTable = 
    bootcampsData.map((item) =>
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.bootcamp_location.location}</td>
        <td>{item.start_date}</td>
      </tr>
    )

  const applicationsTable = 
    applicationsData.map((item) =>
      <NarrowBar
        lastName={item.last_name}
        firstName={item.first_name}
        bootcampName={item.bootcamp.name}
        bootcampLocation={item.bootcamp.bootcamp_location}
        key={item.last_name}
      />
    )
  
  console.log(applicationsData)
  console.log(bootcampsData)

  return (
    <div>
    <MainPage>
      <Header />
      {/* <Sidebar /> */}
      Dashboard
      

      <div className="latest-applications">

          <h1>Latest Applications</h1>

            {applicationsTable}
          {/* <table id="applications-table">
            <tbody>
              {applicationsTable}
            </tbody>
          </table> */}
          
          <h1>Upcoming Bootcamps</h1>

          <table id="bootcamps-table">
            <tbody>
              {bootcampsTable}
            </tbody>
          </table>  
          <MiddleBar />
          
      </div>
      <Graph applications={applicationsData} />
      <Footer />
    </div>
) 
}

export default Home;
