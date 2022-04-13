import React from "react";
import NarrowContainer from "../style/narrowbar.style"

const NarrowBar = (props) => {
    
    return(
        <NarrowContainer>
            <div>
                <p>{props.firstName} {props.lastName}</p>
                <p>{props.bootcampName}</p>
                <p>{props.bootcampLocation}</p>
                <p>Zurich</p>
            </div>
        </NarrowContainer>
    )
}


export default NarrowBar;