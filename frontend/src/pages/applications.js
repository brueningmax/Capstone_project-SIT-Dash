import Footer from "../components/footer";
import Header from "../components/header";
import NarrowBar from "../components/narrowbar";
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
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
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