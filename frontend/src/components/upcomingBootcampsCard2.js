import { BiExpandAlt } from "react-icons/bi";
import BootcampPieChart from "./bootcampPieChart";
import React, { useState, useEffect } from "react";
import {BsArrowDownCircle, BsArrowUpCircle} from "react-icons/bs";
const UpComingBootcampsCard2 = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (props.status === true) {
      setCollapsed(true)
    } 
  }, [props]);

  return (
    <div className="flex flex-col w-3/4   shadow-lg rounded-lg bg-white items-center  justify-start ">
      <div className="flex  h-24 w-full items-center justify-between rounded-lg bg-lavender">
        <button onClick={() => setCollapsed(!collapsed)} className={props.status ? "" : "hidden" }>{collapsed ? <BsArrowDownCircle className="w-6 h-6 color-blue-200"/> : <BsArrowUpCircle className="w-6 h-6 color-blue-200"/>}</button>
        {/*<button*/}
        {/*  onClick={() => setCollapsed(!collapsed)}*/}
        {/*  className={props.status ? "border rounded-sm border-black" : "hidden"}*/}
        {/*>*/}
        {/*  <BiExpandAlt className="w-6 h-6 " />*/}
        {/*</button>*/}
        <div className="flex h-1/3 w-1/3  justify-center">
          <p>{props.data.name}</p>
        </div>
        <div className="flex h-1/3 w-1/3 justify-center">
          <p>{props.data.bootcamp_location}</p>
        </div>
        <div className="flex h-1/3 w-1/3 justify-center">
          <p>{props.data.start_date}</p>
        </div>
      </div>

      <div className={collapsed ? "hidden" : "flex p-6 h-3/4 w-full "}>
        <BootcampPieChart data={props.data.applications} />
      </div>
    </div>
  );
};

export default UpComingBootcampsCard2;
