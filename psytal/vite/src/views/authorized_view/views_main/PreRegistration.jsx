import React, {useState} from 'react'
import schoolLogo from "@assets/BSUlogo.png";
import date from "@assets/calendar.png";

export default function PreRegistration() {

  return (
    <>
    <main>
      <div className="w-full lg:w-8/12 px-4 container mx-auto">          
        <div className="rounded-t bg-grayGreen mb-0 px-6 py-9 items-center  "> {/**BOX  with contents*/}
          <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="">
              <img src={schoolLogo}
                className="object-cover btn- h-20 w-20 rounded-full bg-gray-300" alt="BSU Logo" />
            </div>
            <div className="flex flex-col justify-between pl-10">
              <span className="text-sm font-bold">PRE-REGISTRATION FORM</span> 
              <span className="text-sm">(NEW FIRST YEAR STUDENT)</span>
              <p className="text-sm font-semibold">Instructions: </p>
              <p className="text-sm italic"> Please fill out the form in</p>
            </div> 
          </section>             
        </div>          
      </div>

      {/**STUDENT DETAILS */}
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">  
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-sm">
                    STUDENT DETAILS
                </h6>
                <button className="bg-blue-600 text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    RESET
                </button>
              </div>         
      </div>
      {/**=========================== 2 ==========================*/}      
      {/**Start of Filling the FORM */}
      <div className="w-full lg:w-8/12 px-4 container mx-auto">
        <div className='relative flex flex-col min-w-0 break-words w-full shadow-md rounded-t-lg px-4 py-5 bg-white border-0'>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-1">
            <form>
              {/**=========================== Shoolyear - Date ==========================*/}  
              <div class="flex flex-wrap flex-row px-3 -mx-3 mb-3">               
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-2 mb-2" htmlFor="grid-schoolyear">
                    School year :
                  </label>
                  <span className="text-sm mt-2 pl-10"> First Semester </span> 
                </div>
                
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                  <div className="flex items-center mt-2 pl-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={date} class='h-5 w-5'/>
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
                        <img src={date} class='h-5 w-5'/>
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
              </div> <hr />

              {/**=========================== Student ID - LRN ==========================*/} 
              <div class="flex flex-wrap flex-row -mx-3 mb-2">
                    {/*column1*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                        student id no :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentID" type="number" placeholder=""/>                                           
                    </div>
                    {/*column2*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lrn">
                        learner's reference number (lrn) :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-lrn" type="number" placeholder=""/>                      
                    </div>
              </div> 

              {/**=========================== Last Name - Madain Name ==========================*/} 
              <div class="flex flex-wrap flex-row -mx-3 mb-2">
                {/**column1 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Last Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentLastname" type="text" placeholder=""/>  
                </div>
                {/**column2 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    First Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentFirstname" type="text" placeholder=""/>  
                </div>
                {/**column3 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Middle Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentMiddlename" type="text" placeholder=""/>  
                </div>
                {/** */}
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Maiden Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-studentMaidenname" type="text" placeholder=""/>  
                </div>
              </div> <hr />
              
              {/**=========================== Academic Classification: Radio Buttons ==========================*/} 
              <div class="flex flex-wrap flex-row -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <span className= "text-sm font-semibold">ACADEMIC CLASSIFICATION: </span>
                </div>
                     
                <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                  {/**Radio buttion for SHS graduate */}
                  <div className='mx-5 mt-2'>
                    <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="typeofacadclass"
                      id="shsgraduate"
                      value="option1" />
                      <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="continuing">SHS graduate
                      </label>
                  </div>

                  {/**Radio buttion for HS graduate */}
                  <div className='mx-5 mt-2'>
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                      type="radio"
                      name="typeofacadclass"
                      id="hsgraduate"
                      value="option2"/>
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="secondsem">HS graduate
                    </label>
                  </div>

                  {/**Radio buttion for ALS completer */}
                  <div className='mx-5 mt-2'>
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                      type="radio"
                      name="typeofacadclass"
                      id="alscompleter"
                      value="option3"/>
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="secondsem">ALS completer
                    </label>
                  </div>
                </div>
              </div> <hr />

              {/**=========================== Last School Attended - Degree Program ==========================*/} 
              <div class="flex flex-wrap flex-row -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0 mt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Last School Attended :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-lastschoolattended" type="text" placeholder=""/>  
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Address of School Attended :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-addresslastschoolattended" type="text" placeholder=""/>  
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                    Degree/Program :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-degreeprogram" type="text" placeholder=""/>  
                </div>
              </div> <hr />

              {/**=========================== Citizenship - Email Address ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2">
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-birthdate">Date of Birth :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-birthdate" type="text" placeholder=""/>

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="citizenship">
                    Citizenship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nationality" type="text" placeholder=""/>

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="ethnicity">
                    Ethnicity/Tribal Affilation :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ethnicity" type="text" placeholder=""/>
                                        
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnumber">Contact Number :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactnumber" type="number" placeholder=""/>                    
                </div>

                {/*column2*/}
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">                 
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="placeofbirth">
                    Place of Birth :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-placeofbirth" type="text" placeholder=""/>
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="sexatbirth">
                    Sex at Birth :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-sexatbirth" type="text" placeholder=""/>

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="speacialneeds">
                    Special Need/s :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-studyaddress" type="text" placeholder=""/>
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="emailaddress">
                    Email Address :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-emailaddress" type="text" placeholder=""/>
                </div>
              </div> <hr />

              {/**=========================== Filling the Adresses ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-homeaddress">Home Address :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-homeaddress" type="text" placeholder=""/>
                </div>
                <div className="w-full px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="studyaddress">
                    Address while studying at BSU :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-studyaddress" type="text" placeholder=""/>
                </div>
              </div> <hr />

              {/**=========================== Emergy Contact ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2"> 
                <p className="text-normal font-medium mx-5 mt-2">EMERGENCY CONTACT (Person to be contacted in case of emergency)</p>
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactname">Complete Name :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactname" type="text" placeholder=""/>
                  
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">Address :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder=""/>
                </div>

                {/*column2*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnum">
                    Contact Number :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactnum" type="text" placeholder=""/>
                      
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-relationship">
                    Relationship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-relationship" type="text" placeholder=""/>
                </div>
              </div> <hr />

              {/**=========================== Insurance Coverage ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="text-normal font-medium mx-5 mt-2">INSURANCE COVERAGE (As per CHED-DOH Joint Memorandum Circular No. 2021 - 001:VI.J)</div>
                <div>
                  <label>Are you registed as </label>
                </div>
              </div>
              
            </form>
          </div>
        </div>

        <div className="text-center flex justify-end my-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">Cancel</button>
          <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
        </div>
      </div>

    </main>
    </>
    
  )
}
