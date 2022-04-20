import React from "react";

const LatestApplicationsCard = (props) => {
  return (
    <div className="h-1/4 w-4/5 flex flex-col border-red-600 border-2 border-solid items-center justify-center">
      <p>
        {props.data.first_name} {props.data.last_name}
      </p>
      <p>{props.data.bootcamp.name}</p>
      <p>{props.data.bootcamp.start_date}</p>
      <p>{props.data.bootcamp.bootcamp_location.location}</p>
    </div>
  );
};

export default LatestApplicationsCard;
