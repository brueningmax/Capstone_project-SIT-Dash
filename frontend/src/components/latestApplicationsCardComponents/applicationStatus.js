import React from "react"


const ApplicationStatus =(props)=>{
    return(
        <div>
            <p>{props.data.status}</p>
        </div>

    );
}

export default ApplicationStatus;