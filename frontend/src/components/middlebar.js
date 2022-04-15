import React from "react";
import MiddleContainer from "../style/middlebar.style";

const MiddleBar =(props) =>{
    
    // console.log('propsy');
    // console.log(props);
    // console.log('koniec propsów');

    return(
        
        <MiddleContainer>
            <div>
                <p>{props.shortBootcampName}</p>
                <p>{props.bootcampLocation.location}</p>
                <p>{props.bootcampStartDate}</p>
                <div className="enrolled">
                    <h5>Enrolled</h5>
                    <p>7</p>
                </div>
                <div className="serious">
                    <h5>Serious</h5>
                    <p>8</p>
                </div>
                <div className="serious">
                    <h5>Non Serious</h5>
                    <p>4</p>
                </div>
                <div className="serious">
                    <h5>Total</h5>
                    <p>19</p>
                </div>
                
                <p>Zurich</p>
            </div>
        </MiddleContainer>

        




    )
}


export default MiddleBar;