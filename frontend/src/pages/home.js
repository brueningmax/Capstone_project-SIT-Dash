import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from 'react'; 
import Axios from 'axios'

const Home = () => {


  const [latestApplications, setLatestApplications] = useState([])

  useEffect(() => {
    fetchLatestApplications();
  }, [])
  
  const fetchLatestApplications = async() => {
    const response = await Axios('https://testest.free.beeceptor.com');
    setLatestApplications(response.data)    
}

  return (
    <div>
      <Header />
      Dashboard

      <div className="latest-applications">
        <div>
          Latest Applications
          {latestApplications}
        </div>
      </div>

      <Footer />
    </div>
) 
}

export default Home;
