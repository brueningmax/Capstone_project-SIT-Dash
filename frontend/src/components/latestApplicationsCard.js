import React from "react";

const LatestApplicationsCard = (props) => {
  return (
    <div className="h-cardsHeight2 w-cardsWidth2 flex flex-col bg-white shadow-lg rounded-lg items-center justify-center">
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
