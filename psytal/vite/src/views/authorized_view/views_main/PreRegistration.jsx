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
        
        <div className="w-full lg:w-8/12 px-4 mx-auto  h-32">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"> {/* Centered content */}
            <div className="rounded-t bg-grayGreen h-32 mb-0 px-6 py-9 items-center  "> {/**BOX  with contents*/}
              <section class='flex items-center mx-20'>
                <div className="flex items-center  ">
                  <img src={schoolLogo}
                   className="object-cover btn- h-14 w-14 rounded-full mr-2 bg-gray-300" alt="BSU Logo" />
                </div>
                <div className="flex flex-col mx-5">
                  <span className="text-sm font-bold">PRE-REGISTRATION FORM</span> 
                  <span className="text-sm font-medium">(NEW FIRST YEAR STUDENT)</span>
                </div> 
                <div>
                <p className="text-sm mx-6">Instructions: Please fill out the form in</p>
            </div>
              </section>
              
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
            {/**COLLEGE OR ACADEMIC INstitute */}
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
                          <div className="flex items-center justify-center mx-4 my-4 ml-14">
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
                             <div class="w-full md:w-64 px-5 ml-80">
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

    {/**<!--Footer--> */}
    <footer className='bg-neutral-100 text-center text-gray-500 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      {/**<!-- Social icons --> */}
      <div className='border-b-2 border-neutral-200 p-6 dark:border-neutral-500'>
        <div className='container mx-auto px-10'>
          <div className='flex items-center justify-center lg:justify-between'>
            <div className='mr-12 hidden lg:block'>
              <span>Get connected with us on social networks:</span>
            </div>
            <div className='flex justify-center'>
              {/**FB */}
              <a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/**Twitter */}
              <a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>

              <a a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> {/**End of Social Icons */}

      {/**<!-- Main footer content --> */}
      <div className='container mx-auto px-4'>
        <div className='mx-6 py-10 text-center md:text-left'>
          <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/**----------------COL1------------- */}
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-4 w-4">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"/>
                </svg>
                Psychology Department
              </h6>
              <p>Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/**----------------COL2------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                About Psychology Department
              </h6>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Misson</a>
              </p>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Visson</a>
              </p>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Goals</a>
              </p>
            </div>
            {/**---------------COL3------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Useful Links
              </h6>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Help</a>
              </p>
            </div>

            {/**--------------COL4------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Contact
              </h6>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                Km.5 La Trinidad, Benguet
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                  psychology@gmail.com
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
                  </svg>
                  +63 9000 0000 000
                </p>
            </div>
          </div>
        </div>
      </div> {/** Enf of the Main Foter Content */}

      {/**<!-- Copyrights --> */}
      <div className='bg-neutral-200 p-6 text-center dark:bg-neutral-700'>
        <span>© 2023 Copyright:</span>
        <a font-semibold text-neutral-600 dark:text-neutral-400>Psychology Department</a>
      </div> {/**End of copyrights */}
    </footer>{/**End Footer */}
                
        </>
      );
    };
    
    
    
  
