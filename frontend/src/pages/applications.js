import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import MainPageStyle from "../style/main.style";
import MiddleContainer from "../style/middlebar.style";



const Applications = () => {

  return (
    <div>

      <Header />
      <MainPageStyle>
        <div className="sidebarleft">
          <Sidebar />
        </div>
        <div className="mainbarright">
          <MiddleContainer />
          <MiddleContainer />
          <MiddleContainer />
          <MiddleContainer />
          Applications
        </div>
      </MainPageStyle>
      <Footer />
    </div>
) 
}

export default Applications;