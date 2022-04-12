import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from 'react'; 
import Axios from 'axios'
import NarrowBar from "../components/narrowbar";
import MiddleBar from "../components/middlebar";
import Sidebar from "../components/sidebar";
import MainPage from "../style/main.style";

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
    <MainPage>
      <Header />
      {/* <Sidebar /> */}
      Dashboard
      <NarrowBar />
      <NarrowBar />
      <NarrowBar />
      <NarrowBar />
      <MiddleBar />
    </MainPage>

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
