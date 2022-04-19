import React from "react";
import MiddleContainer from "../style/middlebar.style";

const MiddleBar =(props) =>{

    return(
        
        <MiddleContainer>
            <div>
                <p>{props.data.name}</p>
                <p>{props.data.bootcampLocation}</p>
                <p>{props.data.start_date}</p>
                <div className="enrolled">
                    <h5>Enrolled</h5>
                    <p>{props.data.applications.enrolled}</p>
                </div>
                <div className="enrolled">
                    <h5>Accepted</h5>
                    <p>{props.data.applications.accepted}</p>
                </div>
                <div className="serious">
                    <h5>Serious</h5>
                    <p>{props.data.applications.serious}</p>
                </div>
                <div className="serious">
                    <h5>Non Serious</h5>
                    <p>{props.data.applications.not_serious}</p>
                </div>
                <div className="serious">
                    <h5>to review</h5>
                    <p>{props.data.applications.to_review}</p>
                </div>
                <div className="serious">
                    <h5>Total</h5>
                    <p>{props.data.applications.total}</p>
                </div>
                
                <p>Zurich</p>
            </div>
        </MiddleContainer>

        




    )
}


export default MiddleBar;