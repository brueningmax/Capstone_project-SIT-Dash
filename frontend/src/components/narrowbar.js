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


// const NarrowBar = (props) => {
//     console.log(props.data.item)
//     const data = props.data.item
    
//     return(
//         <NarrowContainer>
//             <div>
//                 <p>{data.status}</p>

//                 <p>{data.first_name} {data.last_name}</p>
//                 <p>{data.bootcamp.name}</p>

//                 <p>{data.applied}</p>

//                 <p>{data.bootcamp.bootcamp_type}</p>

//                 <p>{data.bootcamp.bootcamp_location}</p>

//                 <p>{data.bootcamp.startdate}</p>
//                 <p>Zurich</p>
//             </div>
//         </NarrowContainer>
//     )
// }
