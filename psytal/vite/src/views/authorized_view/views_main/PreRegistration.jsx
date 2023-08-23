import React,{ useState } from 'react'
import schoolLogo from "@assets/BSUlogo.png";
import date from "@assets/icons8calendar.png";

    export default function PreRegistration (){
      const [rows, setRows] = useState([{ id: 0 }]);

      const addRow = () => {
        const newRow = { id: rows.length };
        setRows([...rows, newRow]);
      };
    
      const removeRow = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
      };
    
      const Row = ({ id }) => (
        <div className="flex mb-4">
          <div className="w-1/3 pr-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={`grid-classcode-${id}`}>Class Code</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={`grid-classcode-${id}`} type="text" placeholder=""/>
          </div>
          <div className="w-1/3 pr-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={`grid-coursecode-${id}`}>Course Code</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={`grid-coursecode-${id}`} type="text" placeholder=""/>
          </div>
          <div className="w-1/3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={`grid-units-${id}`}>Units</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={`grid-units-${id}`} type="number" placeholder=""/>
          </div>
          <div className="flex items-center justify-center mx-2 mt-4">
          {id > 0 && (
           <button
           type="button"
           className="ml-2 text-red-600 hover:text-red-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center border border-gray-600 hover:border-red-800"
           onClick={() => removeRow(id)}
         >
           <svg
             className="w-4 h-4"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M20 12H4"
             />
           </svg>
         </button>
         
         
         
         
          )}
          </div>
        </div>
      );
    

      return (
        <>
        
    <div className="bg-grayGreen w-full h-32">
    <div className="w-full flex justify-center items-center h-full"> {/* Centered content */}
        <div className="max-w-3/4 h-screen flex items-center mx-14"> {/* Limited width */}
          <div className="flex items-center  ">
            <img src={schoolLogo}
            className="object-cover btn- h-12 w-12 rounded-full mr-2 bg-gray-300" alt="BSU Logo" />
            </div>
              <div className="flex flex-col mx-5">
              <span className="text-sm font-bold">PRE-REGISTRATION FORM</span> 
              <span className="text-sm font-medium">(NEW FIRST YEAR STUDENT)</span>
              </div> 
            </div>
            <div>
            <p className="text-sm">Instructions: Please fill out the form in</p>
            </div>
          </div>
        </div>

        {/*start of form*/}
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t bg-gray-200 h-10 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-sm">
                    STUDENT DETAILS
                  </h6>
                  <button className="bg-blue-600 text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    RESET
                  </button>
                </div>
              </div>
              {/*Main Container*/}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
                <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="rounded-md border  border-gray-400 bg-gray-50 p-3 w-30 h-30">
                    <label htmlFor="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-gray-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-600 text-sm">Upload Image</span>
                    </label>
                    <input id="upload" type="file" class="hidden" />
                    
                </div>
                <div className="flex flex-col mx-6" >
                <span className="font-normal text-red-600">PLEASE ATTACH RECENT 2X2 PHOTO</span>
                    <span className="font-normal text-red-600">WITH NAME TAG</span>
                    <span className="font-normal text-red-600">AND SIGNATURE</span>
                </div>
                <div className="flex-col mx-4 mt-6">
                <span className= "text-sm font-semibold">TERM:</span>
                      
                      <div className="flex justify-center mx-6">
                        {/* First sem*/}
                        <div className="mb-[0.125rem] mr-5 inline-block min-h-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="radio"
                            name="termoption"
                            id="firstsem"
                            value="option1"
                        />
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="firstsem">First Semester
                        </label>
                        </div>
                        {/* Second sem*/}
                        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                            type="radio"
                            name="termoption"
                            id="secondsem"
                            value="option2"/>
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="secondsem">Second Semester
                        </label>
                        </div>
                        {/* Third radio*/}
                        <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60"
                            type="radio"
                            name="termoption"
                            id="midterm"
                            value="option3"/>
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="midterm">Mid Year
                        </label>
                        </div>
                    </div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2" htmlFor="grid-schoolyear">
                              School year :
                            </label>
                            <div className="flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={date}/>
          </div>
          <input
            name="start"
            type="number" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="20-"
            min="2000" // Minimum year
            max="2099" // Maximum year
            step="1" // Year step
          />
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={date}/>
          </div>
          <input
            name="end"
            type="number" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
            placeholder="20-"
            min="2000" 
            max="2099" 
            step="1" 
          />
          </div>
        </div>
      </div>
                {/*column1*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                        student id no :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentID" type="number" placeholder=""/>
                    
                       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-degree">
                        Degree Program :
                      </label> {/*For backend the default value will be coming from the database*/}
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-degree" type="text" value="Bachelor of Science in Psychology" disabled readOnly/>
                    </div>
                    {/*column2*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lrn">
                        learner's reference number (lrn) :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-lrn" type="number" placeholder=""/>
                      
                       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-major">
                        major, if applicable :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-major" type="text" placeholder="(optional)"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lastschool">
                        Last School Attended :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-lastschool" type="text" placeholder=""/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
                      
          {/*Personal Details*/}
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
       
              {/*Main Container*/}
              <div className="shadow-md rounded-t-lg px-4 py-5 bg-white">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
              <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                {/*column1*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-familyname">Family Name :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-familyname" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-middlename">Middle Name :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middlename" type="text" placeholder=""/>

                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-birthdate">Date of Birth :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-birthdate" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-homeaddress">Home Address :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-homeaddress" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnumber">Contact Number :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactnumber" type="number" placeholder=""/>
                    
                    </div>
                    {/*column2*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                    <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-givenname">
                        Given Name :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-givenname" type="text" placeholder=""/>
                      
                       <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="maidenname">
                        Maiden Name :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-maidenname" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                        Citizenship/Nationality :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nationality" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="studyaddress">
                        Address while studying at BSU :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-studyaddress" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="emailaddress">
                        Email Address :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-emailaddress" type="text" placeholder=""/>
                    </div>
                  </div>
                 </form>
                </div>
            </div>
        </div>
  </div>
  {/*Emergency Contact*/}
  <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <p className="text-normal mx-5">EMERGENCY CONTACT (Person to be contacted in case of emergency)</p>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="shadow-md rounded-t-lg px-4 py-5 bg-white">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
              <form>
                
              <div className="flex flex-wrap -mx-3 mb-6">
                {/*column1*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactname">Name :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactname" type="text" placeholder=""/>
                    
                      <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">Address :</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder=""/>
                    </div>
                    {/*column2*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                    <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnum">
                        Contact Number :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactnum" type="text" placeholder=""/>
                      
                       <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-relationship">
                        Relationship :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-relationship" type="text" placeholder=""/>
                    </div>
                  </div>
                 </form>
                </div>
            </div>
        </div>
  </div>
  <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <p className="text-normal mx-5">AT THE COLLEGE OR ACADEMIC INSTITUTE</p>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="shadow-md rounded-t-lg px-4 py-5 bg-white">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
              <form>
              <div className="flex items-center">
              <p>For regular students :</p>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mx-2" htmlFor="section">Section:</label>
            <select className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="section">
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                        </select>
                        <p className="ml-3">(no need to specify classcode for all courses).</p>    
              </div>   
               
    <div className="flex flex-wrap -mx-3 my-5 m-2">

    <div className="flex flex-wrap -mx-3 my-5 m-2">
      <Row id={0} />
      {rows.slice(1).map(row => (
        <Row key={row.id} id={row.id} />
      ))}
      <div className="flex items-center justify-center mx-4 my-4">
    <button
      type="button"
      className="text-gray-600 border border-gray-600 hover:bg-gray-800 hover:text-white rounded-full p-2.5 text-center inline-flex items-center"
      onClick={addRow}
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    </div>
    {/*Di ko to alam i-align under ng units.
    Nasa taas yung table declaration*/}
    <div class="w-full md:w-1/3 px-5">
    <label
      className="text-gray-700 text-xs font-bold mb-2 block"
      htmlFor="grid-totalunits"
    >
      Total Units :
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-totalunits"
      type="text"
      placeholder=""
    />
              </div>      
    </div>
     
                  </div>
                  <div className="flex-col mx-4">
                <p>Will you avail of the free higher education benefit?</p>
                      
                      <div className="flex justify-center mx-6">
                        {/*YES*/}
                        <div className="mb-[0.125rem] mr-5 inline-block min-h-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="radio"
                            name="availOptions"
                            id="yes"
                            value="option1"
                        />
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="yes">YES</label>
                        </div>
                        {/*NO*/}
                        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                            type="radio"
                            name="availOptions"
                            id="no"
                            value="option2"/>
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="no">NO
                        </label>
                        </div>
                        {/*YES with contrib*/}
                        <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60"
                            type="radio"
                            name="availOptions"
                            id="voluntary"
                            value="option3"/>
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="voluntary">YES, with VOLUNTARY CONTRIBUTION
                        </label>
                        <p>Reason:</p>
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="reason"
            id="optout"
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="optout"
          >
          I will pay my tuition fee (Opt-out)
          </label>
      </div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="reason"
            id="unqualified"
            defaultChecked
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="unqualified"
          >
          Not qualified
          </label>
                </div>
                </div>
                </div>
                </div>
                 </form>
                </div>
                <p className="text-sm italic mx-5">Please certify that the above information are true and correct charrr!</p>
            </div>
        </div>
        <div className="text-center flex justify-end">
                 <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">Cancel</button>
                 <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                 </div>
  </div>
  <footer className="relative pt-8 pb-6 mt-2">
                                <div className="container mx-auto px-4">
                                  <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                      <div className="text-sm text-blueGray-500 font-semibold py-1">
                                      <p>FOOTER </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </footer>
                
        </>
      );
    };
    
    
    
  
