import React from "react";
import MiddleContainer from "../style/middlebar.style";

const MiddleBar =() =>{
    return(
        <MiddleContainer>
            <div>
                <p>FS</p>
                <p>Zurich</p>
                <p>12.01.2022</p>
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