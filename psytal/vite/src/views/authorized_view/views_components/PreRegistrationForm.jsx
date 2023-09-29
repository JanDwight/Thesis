import React, {useState} from 'react'
import schoolLogo from "@assets/BSUlogo.png";
import date from "@assets/calendar.png";
import axiosClient from '../../../axios';
import "../../../../src/styles.css";

export default function PreRegistrationForm() {
  const currentYear = new Date().getFullYear();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const [error, setError] = useState({__html: ""});

  //variables for the user inputs
  const [startOfSchoolYear, setStartOfSchoolYear] = useState('');
  const [endOfSchoolYear, setEndOfSchoolYear] = useState('');   
  const [studentSchoolId, setStudentSchoolId] = useState(''); 
  const [learnersReferenceNumber, setLearnersReferenceNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [academicClassification, setAcademicClassification] = useState('');
  const [lastSchoolAttended, setLastSchoolAttended] = useState('');
  const [addressOfSchoolAttended, setAddressOfSchoolAttended] = useState('');
  const [degree, setDegree] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [sexAtBirth, setSexAtBirth] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');
  const [email, setEmail] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [addressWhileStudyingAtBsu, setAddressWhileStudyingAtBsu] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [relationship, setRelationship] = useState('');
  const preRegStatus = 'pending';
  const typeOfStudent = 'Incoming';

  //the onSubmit function
  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
    .post('/preregincommingtmp', {
      start_of_school_year: parseInt(startOfSchoolYear, 10),
      end_of_school_year: parseInt(endOfSchoolYear, 10),
      student_school_id: parseInt(studentSchoolId, 10),
      learners_reference_number: parseInt(learnersReferenceNumber, 10),
      last_name: lastName,
      first_name: firstName,
      middle_name: middleName,
      maiden_name: maidenName,
      academic_classification: academicClassification,
      last_school_attended: lastSchoolAttended,
      address_of_school_attended: addressOfSchoolAttended,
      degree: degree,
      date_of_birth: dateOfBirth,
      place_of_birth: placeOfBirth,
      citizenship: citizenship,
      sex_at_birth: sexAtBirth,
      ethnicity: ethnicity,
      special_needs: specialNeeds,
      contact_number: parseInt(contactNumber, 10),
      email_address: email,
      home_address: homeAddress,
      address_while_studying: addressWhileStudyingAtBsu,
      contact_person_name: emergencyContactName,
      contact_person_number: parseInt(emergencyContactNumber, 10), //theres an error here--doesnt accept multiple numbers
      contact_person_address: emergencyContactAddress,
      contact_person_relationship: relationship,
      pre_reg_status: preRegStatus,
      type_of_student: typeOfStudent,
    })
    .then(({ data }) => {
      //setFamilyName(data.family_name)
    })
    .catch(( error ) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum,...next], [])
        setError({__html: finalErrors.join('<br>')})
      }
        console.error(error)
    });
  };
  
  return (
    <>
        {error.__html && (
        <div className='bg-red-500 rounded py-2 px-2 text-white'
          dangerouslySetInnerHTML={error}>
        </div>)}
        
    <main>
      <div className="w-full lg:w-8/12 px-4 container mx-auto">          
        <div className="rounded-t bg-grayGreen mb-0 px-6 py-9 items-center  "> {/**BOX  with contents*/}
          <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div >
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
        <form onSubmit={onSubmit} action="#" method="POST">
        <div className='relative flex flex-col min-w-0 break-words w-full shadow-md rounded-t-lg px-4 py-5 bg-white border-0'>
          <div className="flex-auto px-4 lg:px-10 py-5 pt-0 mt-1">
            
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
                    <div className="relative w-fit">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={date} class='h-5 w-5'/>
                      </div>
                      
                      <input //Update this to automatically set the min to current year and max to 5 yeas after for better user experience
                        name="start"
                        type="number" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="20-"
                        min="2000" // Minimum year
                        max="2099" // Maximum year
                        step="1" // Year step
                        value={startOfSchoolYear}
                        onChange={ev => setStartOfSchoolYear(ev.target.value)}

                      />
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative w-fit">
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
                        value={endOfSchoolYear}
                        onChange={ev => setEndOfSchoolYear(ev.target.value)}
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
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       id="grid-studentID"
                       type="number"
                       value={studentSchoolId}
                       onChange={ev => setStudentSchoolId(ev.target.value)}
                       />                          
                    </div>
                    {/*column2*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lrn">
                        learner's reference number (lrn) :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       id="grid-lrn"
                       type="number"
                       placeholder=""
                       value={learnersReferenceNumber}
                       onChange={ev => setLearnersReferenceNumber(ev.target.value)}
                       />        
                    </div>
              </div> 

              {/**=========================== Last Name - Madain Name ==========================*/} 
              <div class="flex flex-wrap flex-row -mx-3 mb-2">
                {/**column1 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentLastname">
                    Last Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-studentLastname"
                   type="text"
                   placeholder=""
                   value={lastName}
                   onChange={ev => setLastName(ev.target.value)}
                   />  
                </div>
                {/**column2 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentFirstname">
                    First Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-studentFirstname" 
                   type="text" 
                   placeholder=""
                   value={firstName}
                   onChange={ev => setFirstName(ev.target.value)}
                   />  
                </div>
                {/**column3 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentMiddlename">
                    Middle Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-studentMiddlename" 
                   type="text" 
                   placeholder=""
                   value={middleName}
                   onChange={ev => setMiddleName(ev.target.value)}
                   />  
                </div>
                {/** */}
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentMaidenname">
                    Maiden Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-studentMaidenname" 
                   type="text" 
                   placeholder=""
                   value={maidenName}
                   onChange={ev => setMaidenName(ev.target.value)}
                   />  
                </div>
              </div> <hr />
              
              {/**=========================== Academic Classification: Radio Buttons ==========================*/}
              {/**re-do the implementation of the radio button */} 
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
                      value="SHS graduate" 
                      onChange={ev => setAcademicClassification(ev.target.value)}
                      />
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
                      value="HS graduate"
                      onChange={ev => setAcademicClassification(ev.target.value)}
                      />
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
                      value="ALS completer"
                      onChange={ev => setAcademicClassification(ev.target.value)}
                      />
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
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lastschoolattended">
                    Last School Attended :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-lastschoolattended" 
                   type="text" 
                   placeholder=""
                   value={lastSchoolAttended}
                   onChange={ev => setLastSchoolAttended(ev.target.value)}
                   />  
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-addresslastschoolattended">
                    Address of School Attended :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-addresslastschoolattended" 
                   type="text" 
                   placeholder=""
                   value={addressOfSchoolAttended}
                   onChange={ev => setAddressOfSchoolAttended(ev.target.value)}
                   />  
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-degreeprogram">
                    Degree/Program :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-degreeprogram" 
                   type="text" 
                   placeholder=""
                   value={degree}
                   onChange={ev => setDegree(ev.target.value)}
                   />  
                </div>
              </div> <hr />

              {/**=========================== Citizenship - Email Address ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2">
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-birthdate">Date of Birth :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-birthdate" 
                    type="date" 
                    placeholder=""
                    value={dateOfBirth}
                    onChange={ev => setDateOfBirth(ev.target.value)}
                    />

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="citizenship">
                    Citizenship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-nationality" 
                   type="text" 
                   placeholder=""
                   value={citizenship}
                   onChange={ev => setCitizenship(ev.target.value)}
                   />

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="ethnicity">
                    Ethnicity/Tribal Affilation :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-ethnicity" 
                   type="text" 
                   placeholder=""
                   value={ethnicity}
                   onChange={ev => setEthnicity(ev.target.value)}
                   />
                                        
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnumber">Contact Number :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-contactnumber" 
                   type="number" 
                   placeholder=""
                   value={contactNumber}
                   onChange={ev => setContactNumber(ev.target.value)}
                   />                    
                </div>

                {/*column2*/}
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">                 
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="placeofbirth">
                    Place of Birth :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-placeofbirth" 
                   type="text" 
                   placeholder=""
                   value={placeOfBirth}
                   onChange={ev => setPlaceOfBirth(ev.target.value)}
                   />
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="sexatbirth">
                    Sex at Birth :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-sexatbirth" 
                    type="text" 
                    placeholder=""
                    value={sexAtBirth}
                    onChange={ev => setSexAtBirth(ev.target.value)}/>

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="speacialneeds">
                    Special Need/s :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-studyaddress" 
                   type="text" 
                   placeholder=""
                   value={specialNeeds}
                   onChange={ev => setSpecialNeeds(ev.target.value)}
                   />
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="emailaddress">
                    Email Address :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-emailaddress" 
                   type="text" 
                   placeholder=""
                   value={email}
                   onChange={ev => setEmail(ev.target.value)}
                   />
                </div>
              </div> <hr />

              {/**=========================== Filling the Adresses ==========================*/} 
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-homeaddress">Home Address :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-homeaddress" 
                   type="text" 
                   placeholder=""
                   value={homeAddress}
                   onChange={ev => setHomeAddress(ev.target.value)}
                   />
                </div>
                <div className="w-full px-3 mb-3 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="studyaddress">
                    Address while studying at BSU :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-studyaddress" 
                   type="text" 
                   placeholder=""
                   value={addressWhileStudyingAtBsu}
                   onChange={ev => setAddressWhileStudyingAtBsu(ev.target.value)}
                   />
                </div>
              </div> <hr />

              {/**=========================== Emergy Contact ==========================*/} 
              <div className="text-normal font-medium text-center mt-2">EMERGENCY CONTACT (Person to be contacted in case of emergency)</div> <hr class='mt-2'/>
              <div className="flex flex-wrap -mx-3 mb-2"> 
                
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactname">Complete Name :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-contactname" 
                   type="text" 
                   placeholder=""
                   value={emergencyContactName}
                   onChange={ev => setEmergencyContactName(ev.target.value)}
                   />
                  
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">Address :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-address" 
                    type="text" 
                    placeholder=""
                    value={emergencyContactAddress}
                    onChange={ev => setEmergencyContactAddress(ev.target.value)}
                    />
                </div>

                {/*column2*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnum">
                    Contact Number :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-contactnum" 
                   type="number"
                   onUpM
                   placeholder=""
                   value={emergencyContactNumber}
                   onChange={ev => setEmergencyContactNumber(ev.target.value)}
                   />
                      
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-relationship">
                    Relationship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-relationship" 
                   type="text" 
                   placeholder=""
                   value={relationship}
                   onChange={ev => setRelationship(ev.target.value)}/>
                </div>
              </div> <hr />

              {/**=========================== Insurance Coverage ==========================*/} 
              <div className="text-normal text-center font-medium mt-2">INSURANCE COVERAGE (As per CHED-DOH Joint Memorandum Circular No. 2021 - 001:VI.J)</div> <hr class='mt-2'/>
              <div className="flex flex-wrap -mx-3 mb-2">
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2">
                    Are you registed as by a health facility with Phil Health or equivalent Medical Insurance that covers medical expenses: 
                  </label>
                  <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                    {/**Radio buttion for Yes registered */}
                    <div className='mx-5 mt-2'>
                      <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="yesregister"
                        id="yesregister"
                        value="option1" />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="healthregistered">Yes
                        </label>
                    </div>
                    {/**Radio buttion for No registered */}
                    <div className='mx-5 mt-2'>
                      <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="noregister"
                        id="noregister"
                        value="option2" />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="healthregistered">No
                        </label>
                    </div>
                  </div>
                  
                </div>
                {/*column2*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 mb-2">Covid-19 Vaccination Status :</label>
                  <select  >
                    <option value="notvaccinated">Not Vaccinated</option>
                    <option value="notvaccinated">1st Dose</option>
                    <option value="notvaccinated">2nd Dose</option>
                    <option value="notvaccinated">Booster</option>
                  </select>
                </div>

                {/**/}
                <div className="w-full px-3 mb-6 md:mb-0 mt-2">                 
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnum">
                    Are you DEPENDENT on your Mother/Father/Legal Guardian of a health facility with Phil Health or equivalent Medical Insurance that covers Medical Expenses related to COVID-19? :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contactnum" type="text" placeholder=""/>
                </div>
              </div> <hr />
          </div>
        </div>
        
      {/**=========================== 3 ==========================*/}      
      {/**Start of Filling the FORM */}
        <div className="w-full container mx-auto">
          <div className='relative flex flex-col min-w-0 break-words w-full shadow-md rounded-t-lg px-4 py-5 bg-white border-0 mt-3'>
            <div className="flex-auto px-4 lg:px-10 py-5 pt-0 mt-1">
                <div className="text-normal font-medium text-center mt-2">
                  DIGITAL COMMUNICATION AND LITERACY:
                  <em> CHED Memorandom Order Number 04, Series of 2020: GUIDELINES ON THE IMPLEMENTATION OF FLEXIBLE LEARNING</em>
                </div> <hr class='mt-2'/>

                <div class="flex flex-wrap flex-row -mx-3 mb-2">
                  {/*column1*/}
                  <div className="w-full px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                        Category :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-category" type="text" placeholder=""/>                                           
                  </div>
                    {/*column2*/}
                  <div className="w-full px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lodl">
                        Level of Digital Literacy :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-lodl" type="number" placeholder=""/>                      
                  </div>
                </div> <hr />
            </div>
          </div>
        </div>

      {/**=========================== 4 ==========================*/}      
      {/**Start of Filling the FORM */}
        <div className="w-full container mx-auto">
          <div className='relative flex flex-col min-w-0 break-words w-full shadow-md rounded-t-lg px-4 py-5 bg-white border-0 mt-3'>
            <div className="flex-auto px-4 lg:px-10 py-5 pt-0 mt-1">
                <div className="text-normal font-medium text-center mt-2">
                  AVAILMENT OF FREE HIGHER EDUCATION :
                </div> <hr class='mt-2'/>

                <div class="flex flex-wrap flex-row -mx-3 mb-2">
                  {/*column1*/}
                  <div className="w-full md:w-[15%] px-3  py-5 mb-6 md:mb-0 mt-2">
                    <label className=" text-gray-700 text-sm font-bold mb-2">
                      STUDENT 
                    </label>
                  </div>

                  {/*column2*/}
                  <div className="w-full md:w-[25%] px-3 mb-6 md:mb-0 mt-2">
                    <label className=" text-gray-700 text-xs font-bold mb-2">
                      Will you avail Free Higher Education? 
                    </label>
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                      {/**Radio buttion for Yes registered */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="yesavail"
                          id="yesavail"
                          value="option1" />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="yesavail">Yes
                          </label>
                      </div>
                      {/**Radio buttion for No registered */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="noavail"
                          id="noavail"
                          value="option2" />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="noavail">No
                          </label>
                      </div>
                    </div>                  
                  </div>

                  {/*column3*/}
                  <div className="w-full md:w-[30%] px-3 mb-6 md:mb-0 mt-2">
                    <label className=" text-gray-700 text-xs font-bold mb-2">
                      Would you like to voluntarily Contribute any amount to BSU? 
                    </label>
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                      {/**Radio buttion for Yes registered */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="yescontribute"
                          id="yescontribute"
                          value="option1" />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="yescontribute">Yes
                          </label>
                      </div>
                      {/**Radio buttion for No registered */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="nocontribute"
                          id="nocontribute"
                          value="option2" />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="nocontribute">No
                          </label>
                      </div>
                    </div>                  
                  </div>

                  {/**column4 */}
                  <div className="w-full md:w-[30%] px-3 mb-6 md:mb-0 mt-2">
                    <label className=" text-gray-700 text-xs font-bold mb-2">
                      AMOUNT <em>(If YES, indicate amount)</em>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-amtcontibute" type="number" placeholder=""/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/**===========SUMBIT Button============= */}
        <div className="text-center flex justify-end my-8">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                  Submit
                </button>
              </div>
        </form>
      </div>
    </main>
    </>
    
  )
}




