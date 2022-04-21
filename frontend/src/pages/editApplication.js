import React from "react";

const EditApplication = () => {
    return(
        <div className=" flex flex-col w-full ">
            <div className="flex flex-col w-full h-1/4 border border-b-[2px] border-black-200 p-5">
                <div><p className="text-lg font-medium">Personal Data</p></div>
                <div className="flex place-content-between pt-5">
                    <div className="w-1/5">
                        <div className="flex place-content-between">
                            <div className="flex flex-col w-2/5">
                                <label htmlFor="first_name" >First name</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="first_name"/>
                            </div>
                            
                        </div>
                        <div className="flex ">
                            <div className="flex flex-col w-2/5">
                                <label htmlFor="street" >Street</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="street"/>
                            </div>
                        </div>
                        <div className="flex place-content-between ">
                            <div className="flex flex-col w-2/5">
                                <label htmlFor="city" >City</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="city"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-1/5 flex flex-col place-content-between">
                            <div className="flex flex-col w-2/5 ">
                                <label htmlFor="last_name" >Last name</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="last_name"/>
                            </div>
                            <div className="flex flex-col w-2/5">
                                <label htmlFor="zip" >Zip/Postal code</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="zip"/>
                            </div>
                    </div>
                    <div className="w-1/5">
                        <div className="flex ">
                            <div className="flex flex-col w-2/5">
                                <label htmlFor="email" >Email</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="email"/>
                            </div>
                        </div>
                        <div className="flex place-content-between">
                            <div className="flex flex-col w-2/5 ">
                                <label htmlFor="linkedin-profile" >LinkedIn profile</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="linkedin-profile"/>
                            </div>
                            
                        </div>
                        <div className="flex place-content-between ">
                            <div className="flex flex-col w-2/5 ">
                                <label htmlFor="company_name" >Company name</label>
                                <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="company_name"/>
                            </div>
                            
                    </div>
                    </div>
                    <div className="w-1/5 flex flex-col place-content-between">
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="cv" >CV</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="cv"/>
                        </div>
                        <div className="flex flex-col w-2/5 ">
                            <label htmlFor="company_email" >Company email</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="company_email"/>
                        </div>
                    </div>
                    <div className="w-1/5 flex flex-col place-content-between">
                            <button className="border border-black-300 bg-green-200 w-4/5">SAVE</button>
                            <button className="border border-black-300 bg-red-300 w-4/5">CANCEL</button>
                            <div className="flex flex-col w-2/5 ">
                                <label htmlFor="status" >Status</label>
                                <select className="w-full border border-black-100 bg-gray-100" id="status">
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
            </div>
            <div className="flex w-full h-3/4">
                <div className="flex flex-col gap-5 w-1/3 p-5">
                    <p className="text-lg font-medium">Application Data</p>
                    <div className="flex flex-col h-5/6">
                        <label htmlFor="applied" >Applied</label>
                        <input typeof="date" className="w-full border border-black-100 bg-gray-100" id="applied"/>
                        <label htmlFor="coding" >Coding</label>
                        <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="coding"/>
                        <label htmlFor="goal" >Goal</label>
                        <input typeof="text" className="w-full border border-black-300 h-1/2 bg-gray-100" id="goal"/>
                        <label htmlFor="how_you_found_us" >How you found us</label>
                        <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="how_you_found_us"/>
                        <label htmlFor="status" >Remote</label>
                            <select className="w-full border border-black-100 bg-gray-100" id="status">
                                <option value={"none"}>--------</option>
                                <option value={"yes"}>yes</option>
                                <option value={"no"}>no</option>
                            </select>
                        <label htmlFor="referral_code" >Referral code</label>
                        <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="referral_code"/>
                    </div>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex w-full h-full">
                        <div className=" flex flex-col gap-5 p-5 w-1/2">
                            <p className="text-lg font-medium">Personal Interview</p>
                            <div className="flex flex-col h-5/6">
                                <div className="flex place-content-between">
                                    <div>
                                        <label htmlFor="p_date" >Date</label>
                                        <input typeof="date" className="w-full border border-black-100 bg-gray-100" id="p_date"/>
                                    </div>
                                    <div>
                                        <label htmlFor="p_time" >Time</label>
                                        <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="p_time"/>
                                    </div>
                                </div>
                                <label htmlFor="p_passed" >Personal passed</label>
                                <select className="w-full border border-black-100 bg-gray-100" id="p_passed">
                                    <option value={"none"}>--------</option>
                                    <option value={"yes"}>yes</option>
                                    <option value={"no"}>no</option>
                                </select>
                                <label htmlFor="p_comments" >Personal interview comments</label>
                                <input typeof="text" className="w-full border border-black-100 h-1/2 bg-gray-100" id="p_comments"/>
                            </div>


                    
                        
                        </div>
                        <div className="flex flex-col gap-5 p-5 w-1/2">
                            <p className="text-lg font-medium">Technical Interview</p>
                                <div className="flex flex-col h-5/6">
                                    <div className="flex place-content-between">
                                        <div>
                                            <label htmlFor="t_date" >Date</label>
                                            <input typeof="date" className="w-full border border-black-100 bg-gray-100" id="t_date"/>
                                        </div>
                                        <div>
                                            <label htmlFor="t_time" >Time</label>
                                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="t_time"/>
                                        </div>
                                    </div>
                                    <label htmlFor="t_passed" >Technical passed</label>
                                        <select className="w-full border border-black-100 bg-gray-100" id="p_passed">
                                            <option value={"none"}>--------</option>
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                    <label htmlFor="t_comments" >Technical interview comments</label>
                                    <input typeof="text" className="w-full border border-black-100 h-1/2 bg-gray-100" id="t_comments"/>
                                </div>
                        </div>
                    </div>
                    <div className="flex w-full h-1/3">
                        <div className="w-1/2 flex flex-col gap-5 p-5">
                            <div className=" flex place-content-between" >
                                <div className="w-1/3">
                                    <label htmlFor="accepted" >Accepted</label>
                                    <select className="w-full border border-black-100 bg-gray-100" id="accepted">
                                        <option value={"none"}>--------</option>
                                        <option value={"yes"}>yes</option>
                                        <option value={"no"}>no</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="prep_access" >Preparation work access</label>
                                    <select className="w-full border border-black-100 bg-gray-100" id="prep_access">
                                        <option value={"none"}>--------</option>
                                        <option value={"yes"}>yes</option>
                                        <option value={"no"}>no</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" flex place-content-between" >
                                <div className="w-1/3">
                                    <label htmlFor="Deposit" >Deposit</label>
                                        <select className="w-full border border-black-100 bg-gray-100" id="Deposit">
                                            <option value={"none"}>--------</option>
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="paid" >Paid</label>
                                    <select className="w-full border border-black-100 bg-gray-100" id="paid">
                                        <option value={"none"}>--------</option>
                                        <option value={"yes"}>yes</option>
                                        <option value={"no"}>no</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col p-5">
                            <label htmlFor="p_comments" >Personal interview comments</label>
                            <input typeof="text" className="w-full border border-black-100 h-full bg-gray-100" id="p_comments"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
                  
                
    )
};

export default EditApplication;