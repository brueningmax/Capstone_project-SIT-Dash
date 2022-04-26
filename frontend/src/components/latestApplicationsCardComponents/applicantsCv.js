import React, {useEffect} from "react"
import { AiOutlineFileText } from "react-icons/ai";


const ApplicantsCv =(props)=>{

    useEffect(() => {
        console.log(props.cv)
    },[])

    return(
        <>
            { props.cv === undefined || props.cv === "" ?
            <div onClick={props.function} className="flex w-6 h-6 bg-gray-300 rounded text-white font-bold justify-center items-center border border-gray-400 cursor-not-allowed">
                <AiOutlineFileText/>
            </div>
                :
            <div onClick={props.function} className="flex w-6 h-6 bg-lime-500 rounded text-white font-bold justify-center items-center border border-lime-700 cursor-pointer">
                <AiOutlineFileText/>
            </div>}
        </>
    );
}

export default ApplicantsCv;