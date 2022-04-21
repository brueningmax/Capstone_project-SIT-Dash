import React from "react";

const EditApplication = () => {
    return(
        <div className=" flex flex-col w-full border border-red-500">
            <div className="flex w-full h-1/4">
                {/* First subbox */}
                <div className="flex flex-col place-content-between w-2/5 border border-black-300 p-5 ">
                    <div className="flex place-content-between">
                        <div className="flex flex-col w-2/5">
                            <label htmlFor="first_name" >First name</label>
                            <input typeof="text" className="w-full border border-black-100" id="first_name"/>
                        </div>
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="last_name" >Last name</label>
                            <input typeof="text" className="w-full border border-black-100" id="last_name"/>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col w-2/5">
                            <label htmlFor="street" >Street</label>
                            <input typeof="text" className="w-full border border-black-100" id="street"/>
                        </div>
                    </div>
                    <div className="flex place-content-between ">
                        <div className="flex flex-col w-2/5">
                            <label htmlFor="city" >City</label>
                            <input typeof="text" className="w-full border border-black-100" id="city"/>
                        </div>
                        <div className="flex flex-col w-2/5">
                            <label htmlFor="zip" >Zip/Postal code</label>
                            <input typeof="text" className="w-full border border-black-100" id="zip"/>
                        </div>
                    </div>
                </div>
                {/* Second subbox */}
                <div className="flex flex-col place-content-between w-2/5 border border-black-300 p-5 ">
                    <div className="flex ">
                        <div className="flex flex-col w-2/5">
                            <label htmlFor="email" >Email</label>
                            <input typeof="text" className="w-full border border-black-100" id="email"/>
                        </div>
                    </div>
                    <div className="flex place-content-between">
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="linkedin-profile" >LinkedIn profile</label>
                            <input typeof="text" className="w-full border border-black-100" id="linkedin-profile"/>
                        </div>
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="cv" >CV</label>
                            <input typeof="text" className="w-full border border-black-100" id="cv"/>
                        </div>
                    </div>
                    <div className="flex place-content-between ">
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="company_name" >Company name</label>
                            <input typeof="text" className="w-full border border-black-100" id="company_name"/>
                        </div>
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="company_email" >Company email</label>
                            <input typeof="text" className="w-full border border-black-100" id="company_email"/>
                        </div>
                    </div>
                </div>
                {/* Third subbox */}
                <div className="items-center flex flex-col place-content-between w-1/5 border border-black-300 p-5">
                    <button className="border border-black-300 bg-green-200 h-1/5 w-4/5">SAVE</button>
                    <button className="border border-black-300 bg-red-300 h-1/5 w-4/5">CANCEL</button>
                    <div className="flex flex-col w-2/5 ">
                        <label htmlFor="status" >Status</label>
                        <select className="w-full border border-black-100" id="status">
                            <option value={"none"}>--------</option>
                            <option value={"not_serious"}>not serious</option>
                            <option value={"serious"}>serious</option>
                            <option value={"enrolled"}>enrolled</option>
                            <option value={"graduated"}>graduated</option>
                            <option value={"dropped_out"}>dropped out</option>
                            <option value={"found_job"}>found job</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-3/4">
                <div className="border w-1/3 border-blue-200"></div>
                <div className="border w-1/3 border-blue-200"></div>
                <div className="border w-1/3 border-blue-200"></div>
            </div>
        </div>
    )
};

export default EditApplication;