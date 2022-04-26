import React from "react";
import BootcampPieChart from "./bootcampPieChart";

const UpComingBootcampsCard = (props) => {

  return (
    // <div className="h-1/2 w-full flex flex-row  shadow-lg rounded-lg bg-white items-center m-3">
    //   <div className="flex flex-col w-1/4 pl-8">
    //     <div className="flex flex-col">
    //       <p className="text-2xl">{props.data.name}</p>
    <div className="h-cardsHeight w-cardWidth4 flex flex-col  shadow-lg rounded-lg bg-white items-center  justify-center  p-8">
      <div className="h-1/5 w-full m-0 p-0">
        <div className="flex">
          <p>{props.data.name}</p>
        </div>
        {/* <div className="flex justify-between"> */}
          <p>{props.data.bootcamp_location}</p>
          <p>{props.data.start_date}</p>
        {/* </div> */}
      </div>
      
      <div className="h-full w-3/4  m-0 p-0">
        <BootcampPieChart data={props.data.applications}/>
      </div>
    </div>
  );
};

export default UpComingBootcampsCard;
