import React, {useEffect, useState} from 'react'
import schoolLogo from "@assets/BSUlogo.png";
import date from "@assets/calendar.png";
import axiosClient from '../../../../axios';
import { Navigate } from 'react-router-dom';

export default function PreRegistrationFormView({prereg}) {

  console.log(prereg.health_facility_registered)

  const includeNumbers = true;  // Include numbers in the password
  const includeSymbols = true;  // Include symbols in the password
  const role = "4";

  const [preregData, setPreregData] = useState(prereg, {
    start_of_school_year: '',   
    end_of_school_year: '',
    student_school_id: '',      
    learners_reference_number: '',
    last_name: '',              
    first_name: '',
    middle_name: '',            
    maiden_name: '',
    academic_classification: '',
    last_school_attended: '',
    address_of_school_attended: '',
    degree: '',
    date_of_birth: '',
    place_of_birth: '',
    citizenship: '',
    sex_at_birth: '',
    ethnicity: '',
    special_needs: '',
    contact_number: '',
    email_address: '',
    home_address: '',
    address_while_studying: '',
    contact_person_name: '',
    contact_person_number: '',
    contact_person_address: '',
    contact_person_relationship: '',
    vaccination_status: '',
    pre_reg_status: 'Accepted',
    type_of_student: 'Regular',
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }
  
  const [error, setError] = useState({__html: ""});
  const id = preregData.id;


  //On Decline Click
  const onDecline = (ev) => {
    ev.preventDefault();
    
    axiosClient
    // create Update function for preregincommingtmp
    .put(`/preregcheck/${id}`, {
      pre_reg_status: 'Decline'
    })
    .then(({ data }) => {
      //setFamilyName(data.family_name)
      window.location.reload();
    })
  }

  //On Return
  const onReturn = (ev) => {
    ev.preventDefault();
    
    axiosClient
    // create Update function for preregincommingtmp
    .put(`/preregcheck/${id}`, {
      pre_reg_status: 'Returned'
    })
    .then(({ data }) => {
      //setFamilyName(data.family_name)
      window.location.reload();
    })
  }

  //On Accept Click
  const onClickAccept = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    const fullName = `${preregData.last_name}, ${preregData.first_name} ${preregData.middle_name.charAt(0)}.`;

    //password generator
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}[]~-';
    const length = 12;
    
    const getRandomChar = (charSet) => {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      return charSet.charAt(randomIndex);
    };
    
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    let password = '';
    
    // Ensure at least one of each character type
    password += getRandomChar('abcdefghijklmnopqrstuvwxyz');
    password += getRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    password += getRandomChar('0123456789');
    password += getRandomChar('!@#$%^&*()_+{}[]~-');
    
    // Generate the rest of the password
    for (let i = 4; i < length; i++) {
      password += getRandomChar(characters);
    }
    console.log(password)
 
    axiosClient.post('/adduser', {
      name:fullName,
      role: parseInt(role),
      password: password,
      email: preregData.email_address,
     })

    //Create student profile
     axiosClient
    .post(`/createstudentprofile`, {
      user_id: String(preregData.id),
      start_of_school_year: parseInt(preregData.start_of_school_year),
      end_of_school_year: parseInt(preregData.end_of_school_year),
      student_school_id: parseInt(preregData.student_school_id),
      learners_reference_number: parseInt(preregData.learners_reference_number),
      last_name: preregData.last_name,
      first_name: preregData.first_name,
      middle_name: preregData.middle_name,
      maiden_name: preregData.maiden_name,
      academic_classification: preregData.academic_classification,
      last_school_attended: preregData.last_school_attended,
      address_of_school_attended: preregData.address_of_school_attended,
      degree: preregData.degree,
      date_of_birth: preregData.date_of_birth,
      place_of_birth: preregData.place_of_birth,
      citizenship: preregData.citizenship,
      sex_at_birth: preregData.sex_at_birth,
      ethnicity: preregData.ethnicity,
      special_needs: preregData.special_needs,
      contact_number: parseInt(preregData.contact_number),
      email_address: preregData.email_address,
      home_address: preregData.home_address,
      address_while_studying: preregData.address_while_studying,
      contact_person_name: preregData.contact_person_name,
      contact_person_number: parseInt(preregData.contact_person_number), 
      contact_person_address: preregData.contact_person_address,
      contact_person_relationship: preregData.contact_person_relationship,
      pre_reg_status: 'Accepted',
      type_of_student: 'Regular',
    })

    axiosClient
    .put(`/preregcheck/${id}`, {
      start_of_school_year: parseInt(preregData.start_of_school_year),
      end_of_school_year: parseInt(preregData.end_of_school_year),
      student_school_id: parseInt(preregData.student_school_id),
      learners_reference_number: parseInt(preregData.learners_reference_number),
      last_name: preregData.last_name,
      first_name: preregData.first_name,
      middle_name: preregData.middle_name,
      maiden_name: preregData.maiden_name,
      academic_classification: preregData.academic_classification,
      last_school_attended: preregData.last_school_attended,
      address_of_school_attended: preregData.address_of_school_attended,
      degree: preregData.degree,
      date_of_birth: preregData.date_of_birth,
      place_of_birth: preregData.place_of_birth,
      citizenship: preregData.citizenship,
      sex_at_birth: preregData.sex_at_birth,
      ethnicity: preregData.ethnicity,
      special_needs: preregData.special_needs,
      contact_number: parseInt(preregData.contact_number),
      email_address: preregData.email_address,
      home_address: preregData.home_address,
      address_while_studying: preregData.address_while_studying,
      contact_person_name: preregData.contact_person_name,
      contact_person_number: parseInt(preregData.contact_person_number), 
      contact_person_address: preregData.contact_person_address,
      contact_person_relationship: preregData.contact_person_relationship,

      pre_reg_status: 'Accepted',
      type_of_student: 'Regular',
    })
    .then(({ data }) => {
      

    })
    .catch(( error ) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum,...next], [])
        setError({__html: finalErrors.join('<br>')})
      }
        console.error(error)
    });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
    .put(`/preregview/${preregData}`)
    .then(({ data }) => {
      
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
        <form onSubmit={onSubmit}>
        <div className='relative flex flex-col min-w-0 break-words w-full shadow-md rounded-t-lg px-4 py-5 bg-white border-0'>
          <div className="flex-auto px-4 lg:px-10 py-5 pt-0 mt-1">
            
              {/**=========================== Shoolyear - Date ==========================*/}  
              <div className="flex flex-wrap flex-row px-3 -mx-3 mb-3">               
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
                        <img src={date} className='h-5 w-5'/>
                      </div>
                      
                      <input //Update this to automatically set the min to current year and max to 5 yeas after for better user experience
                        name="start"
                        type="number" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="20-"
                        min="2000" // Minimum year
                        max="2099" // Maximum year
                        step="1" // Year step
                        value={preregData.start_of_school_year}
                        onChange={(ev) => setPreregData({ ...preregData, start_of_school_year: ev.target.value })}
                      />
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative w-fit">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={date} className='h-5 w-5'/>
                      </div>
                      <input
                        name="end"
                        type="number" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                        placeholder="20-"
                        min="2000" 
                        max="2099" 
                        step="1" 
                        value={preregData.end_of_school_year}
                        onChange={(ev) => setPreregData({ ...preregData, end_of_school_year: ev.target.value })}                      />
                    </div>
                  </div>
                </div>                 
              </div> <hr />

              {/**=========================== Student ID - LRN ==========================*/} 
              <div className="flex flex-wrap flex-row -mx-3 mb-2">
                    {/*column1*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentID">
                        student id no :
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       id="grid-studentID"
                       type="number"
                       placeholder=""
                       value={preregData.student_school_id}
                       onChange={(ev) => setPreregData({ ...preregData, student_school_id: ev.target.value })}                       
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
                       value={preregData.learners_reference_number}
                       onChange={(ev) => setPreregData({ ...preregData, learners_reference_number: ev.target.value })}
                       />        
                    </div>
              </div> 

              {/**=========================== Last Name - Madain Name ==========================*/} 
              <div className="flex flex-wrap flex-row -mx-3 mb-2">
                {/**column1 */}
                <div className="w-full md:w-[33.33%] px-3 mb-6 md:mb-0 mt-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-studentLastname">
                    Last Name :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-studentLastname"
                   type="text"
                   placeholder=""
                   value={preregData.last_name}
                   onChange={(ev) => setPreregData({ ...preregData, last_name: ev.target.value })}
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
                   value={preregData.first_name}
                   onChange={(ev) => setPreregData({ ...preregData, first_name: ev.target.value })}
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
                   value={preregData.middle_name}
                   onChange={(ev) => setPreregData({ ...preregData, middle_name: ev.target.value })}
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
                   value={preregData.maiden_name}
                   onChange={(ev) => setPreregData({ ...preregData, maiden_name: ev.target.value })}
                   />  
                </div>
              </div> <hr />
              
              {/**=========================== Academic Classification: Radio Buttons ==========================*/}
              {/**re-do the implementation of the radio button */} 
              <div className="flex flex-wrap flex-row -mx-3 mb-2">
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
                      checked={preregData.academic_classification === 'SHS graduate'}
                      onChange={(ev) => setPreregData({ ...preregData, academic_classification: ev.target.value })}
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
                      checked={preregData.academic_classification === 'HS graduate'}
                      onChange={(ev) => setPreregData({ ...preregData, academic_classification: ev.target.value })}
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
                      checked={preregData.academic_classification === 'ALS completer'}
                      onChange={(ev) => setPreregData({ ...preregData, academic_classification: ev.target.value })}
                      />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="secondsem">ALS completer
                    </label>
                  </div>
                </div>
              </div> <hr />

              {/**=========================== Last School Attended - Degree Program ==========================*/} 
              <div className="flex flex-wrap flex-row -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0 mt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lastschoolattended">
                    Last School Attended :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                   id="grid-lastschoolattended" 
                   type="text" 
                   placeholder=""
                   value={preregData.last_school_attended}
                   onChange={(ev) => setPreregData({ ...preregData, last_school_attended: ev.target.value })}
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
                   value={preregData.address_of_school_attended}
                   onChange={(ev) => setPreregData({ ...preregData, address_of_school_attended: ev.target.value })}
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
                   value={preregData.degree}
                   onChange={(ev) => setPreregData({ ...preregData, degree: ev.target.value })}
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
                    value={preregData.date_of_birth}
                    onChange={(ev) => setPreregData({ ...preregData, date_of_birth: ev.target.value })}
                    />

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="citizenship">
                    Citizenship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-nationality" 
                   type="text" 
                   placeholder=""
                   value={preregData.citizenship}
                   onChange={(ev) => setPreregData({ ...preregData, citizenship: ev.target.value })}
                   />

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="ethnicity">
                    Ethnicity/Tribal Affilation :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-ethnicity" 
                   type="text" 
                   placeholder=""
                   value={preregData.ethnicity}
                   onChange={(ev) => setPreregData({ ...preregData, ethnicity: ev.target.value })}
                   />
                                        
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnumber">Contact Number :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-contactnumber" 
                   type="number" 
                   placeholder=""
                   value={preregData.contact_number}
                   onChange={(ev) => setPreregData({ ...preregData, contact_number: ev.target.value })}
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
                   value={preregData.place_of_birth}
                   onChange={(ev) => setPreregData({ ...preregData, place_of_birth: ev.target.value })}
                   />
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="sexatbirth">
                    Sex at Birth :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-sexatbirth" 
                    type="text" 
                    placeholder=""
                    value={preregData.sex_at_birth}
                    onChange={(ev) => setPreregData({ ...preregData, sex_at_birth: ev.target.value })}
                    />

                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="speacialneeds">
                    Special Need/s :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-studyaddress" 
                   type="text" 
                   placeholder=""
                   value={preregData.special_needs}
                   onChange={(ev) => setPreregData({ ...preregData, special_needs: ev.target.value })}
                   />
                    
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="emailaddress">
                    Email Address :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-emailaddress" 
                   type="text" 
                   placeholder=""
                   value={preregData.email_address}
                   onChange={(ev) => setPreregData({ ...preregData, email_address: ev.target.value })}
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
                   value={prereg.home_address}
                   onChange={(ev) => setPreregData({ ...preregData, home_address: ev.target.value })}
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
                   value={prereg.address_while_studying}
                   onChange={(ev) => setPreregData({ ...preregData, home_address: ev.target.value })}
                   />
                </div>
              </div> <hr />

              {/**=========================== Emergy Contact ==========================*/} 
              <div className="text-normal font-medium text-center mt-2">EMERGENCY CONTACT (Person to be contacted in case of emergency)</div> <hr className='mt-2'/>
              <div className="flex flex-wrap -mx-3 mb-2"> 
                
                {/*column1*/}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactname">Complete Name :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-contactname" 
                   type="text" 
                   placeholder=""
                   value={preregData.contact_person_name}
                   onChange={(ev) => setPreregData({ ...preregData, contact_person_name: ev.target.value })}
                   />
                  
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">Address :</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-address" 
                    type="text" 
                    placeholder=""
                    value={preregData.contact_person_address}
                    onChange={(ev) => setPreregData({ ...preregData, contact_person_address: ev.target.value })}
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
                   value={preregData.contact_person_number}
                   onChange={(ev) => setPreregData({ ...preregData, contact_person_number: ev.target.value })}
                   />
                      
                  <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-relationship">
                    Relationship :
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-relationship" 
                   type="text" 
                   placeholder=""
                   value={preregData.contact_person_relationship}
                   onChange={(ev) => setPreregData({ ...preregData, contact_person_relationship: ev.target.value })}
                   />
                </div>
              </div> <hr />

               {/**=========================== Insurance Coverage ==========================*/} 
               <div className="text-normal text-center font-medium mt-2">INSURANCE COVERAGE (As per CHED-DOH Joint Memorandum Circular No. 2021 - 001:VI.J)</div> <hr className='mt-2'/>
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
                          value='Yes' 
                          checked={preregData.health_facility_registered === 'Yes'}
                          onChange={(ev) => setPreregData({ ...preregData, health_facility_registered: ev.target.value })}
                          />
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
                          value='No'
                          checked={preregData.health_facility_registered === 'No'}
                          onChange={(ev) => setPreregData({ ...preregData, health_facility_registered: ev.target.value })}
                          />
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
                    <select  className='ml-5'
                      onChange={(ev) => setPreregData({ ...preregData, vaccination_status: ev.target.value })}
                      value={preregData.vaccination_status}>
                      <option 
                        value="Not Vaccinated">
                          Not Vaccinated</option>
                      <option 
                        value="1st Dose">
                          1st Dose</option>
                      <option 
                        value="2nd Dose">
                          2nd Dose</option>
                      <option 
                        value="With Booster">
                          Booster</option>
                    </select>
                  </div>

                  {/**/}
                  <div className="w-full px-3 mb-6 md:mb-0 mt-2">                 
                    <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contactnum">
                      Are you DEPENDENT on your Mother/Father/Legal Guardian of a health facility with Phil Health or equivalent Medical Insurance that covers Medical Expenses related to COVID-19? :
                    </label>
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                      {/**Radio buttion for Yes dependent */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="healthdependent"
                          id="Dependent"
                          value="Yes" 
                          checked={preregData.parent_health_facility_dependent === 'Yes'}
                          onChange={(ev) => setPreregData({ ...preregData, parent_health_facility_dependent: ev.target.value })}
                          />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="healthdependent">Yes
                        </label>
                      </div>
                      {/**Radio buttion for No dependent */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="healthdependent"
                          id="Dependent"
                          value="No" 
                          checked={preregData.parent_health_facility_dependent === 'No'}
                          onChange={(ev) => setPreregData({ ...preregData, parent_health_facility_dependent: ev.target.value })}
                          />
                        <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="healthdependent">No
                        </label>
                      </div>
                    </div>
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
                  </div> <hr className='mt-2'/>

                  {/*column1*/}
                  <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                      Category :
                    </label>
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-col mb-2">
                      {/**Radio buttion for High level technology */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="radio"
                                name="highlvl"
                                id="highlvl"
                                value="category1" 
                                checked={preregData.technology_level === 'category1'}
                                onChange={(ev) => setPreregData({ ...preregData, technology_level: ev.target.value })}
                                />
                        <label
                              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                              htmlFor="categorytech">
                              <strong>High Level Technology: </strong>
                               <i>Availability of Devices-laptops, mobile phones, tablets, desktops, Internet connectvity-fast</i>
                        </label>
                      </div>
                      {/**Radio buttion for Medium level technology */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="radio"
                                name="mediumlvl"
                                id="mediumlvl"
                                value="category2" 
                                checked={preregData.technology_level === 'category2'}
                                onChange={(ev) => setPreregData({ ...preregData, technology_level: ev.target.value })}
                                />
                        <label
                              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                              htmlFor="categorytech">
                              <strong>Medium Level Technology: </strong>
                              <i>Availability of Devices-Mostly available phones, Internet connectvity-slow</i>
                        </label>
                      </div>
                      {/**Radio buttion for Low level technology */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="radio"
                                name="lowlvl"
                                id="lowlvl"
                                value="category3" 
                                checked={preregData.technology_level === 'category3'}
                                onChange={(ev) => setPreregData({ ...preregData, technology_level: ev.target.value })}
                                />
                        <label
                              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                              htmlFor="categorytech">
                              <strong>Low Level Technology: </strong>
                              <i>Availability of Devices-Some mobile phones or no technology, Internet connectvity-poor or no internet connection</i>
                        </label>
                      </div>
                    </div>                                         
                  </div> <hr className='mt-2'/>

                  {/*column2*/}
                  <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lodl">
                      Level of Digital Literacy :
                    </label>
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                    {/**Radio buttion for Proficient literacy */}
                    <div className='mx-5 mt-2'>
                      <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="proficient"
                              id="proficient"
                              value="lvl1" 
                              checked={preregData.digital_literacy === 'lvl1'}
                              onChange={(ev) => setPreregData({ ...preregData, digital_literacy: ev.target.value })}/>
                      <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="literacy">Proficient
                      </label>
                    </div>
                    {/**Radio buttion for Advanced literacy */}
                    <div className='mx-5 mt-2'>
                      <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="advanced"
                              id="advanced"
                              value="lvl2" 
                              checked={preregData.digital_literacy === 'lvl2'}
                              onChange={(ev) => setPreregData({ ...preregData, digital_literacy: ev.target.value })}/>
                      <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="literacy">Advanced
                      </label>
                    </div>
                    {/**Radio buttion for Beginner literacy */}
                    <div className='mx-5 mt-2'>
                      <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="beginner"
                              id="beginner"
                              value="lvl3" 
                              checked={preregData.digital_literacy === 'lvl3'}
                              onChange={(ev) => setPreregData({ ...preregData, digital_literacy: ev.target.value })}/>
                      <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="literacy">Beginner
                      </label>
                    </div>
                  </div>                      
                </div><hr />
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
                </div> <hr className='mt-2'/>

                <div className="flex flex-wrap flex-row -mx-3 mb-2">
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
                          value="Yes"
                          checked={preregData.avail_free_higher_education === 'Yes'}
                          onChange={(ev) => setPreregData({ ...preregData, avail_free_higher_education: ev.target.value })}
                          />
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
                          value="No" 
                          checked={preregData.avail_free_higher_education === 'No'}
                          onChange={(ev) => setPreregData({ ...preregData, avail_free_higher_education: ev.target.value })}
                          />
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
                          value="Yes"
                          checked={preregData.voluntary_contribution === 'Yes'}
                          onChange={(ev) => setPreregData({ ...preregData, voluntary_contribution: ev.target.value })} />
                          
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
                          value="No"
                          checked={preregData.voluntary_contribution === 'No'}
                          onChange={(ev) => setPreregData({ ...preregData, voluntary_contribution: ev.target.value })} 
                          />
                          
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
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-amtcontibute" 
                    type="text" 
                    placeholder=""
                    value={preregData.contribution_amount}
                    onChange={(ev) => setPreregData({ ...preregData, contribution_amount: ev.target.value })} 
                    />
                  </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-row -mx-3 mb-2">
                  {/*column1*/}
                  <div className="w-full md:w-[15%] px-3  py-2 mb-6 md:mb-0 mt-2">
                    <label className=" text-gray-700 text-sm font-bold mb-2">
                        COLLEGE
                    </label>
                  </div>
                  {/*column2*/}
                  <div className="w-full md:w-[50%] px-3 mb-6 md:mb-0 mt-2">
                    <div>
                      <label className=" text-gray-700 text-xs font-bold mb-2">
                        Did the Student complied with the Admission Policy
                      </label>
                      <label className=" text-gray-700 text-xs font-bold mb-2">
                        If No, not eligible to Avail Free Higher Education for the current Semester/Term
                      </label>
                    </div>                                                
                  </div>
                  {/**column3 */}
                  <div className="w-full md:w-[20%] px-3 mb-6 md:mb-0 mt-2">
                    <div className="w-full px-3 md:mb-0 flex flex-wrap flex-row mb-2">
                      {/**Radio buttion for Yes compiled */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="yescompiled"
                          id="yescompiled"
                          value="Yes" 
                          onChange={(ev) => setPreregData({ ...preregData, complied_to_admission_policy: ev.target.value })}
                          />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="yesavail">Yes
                        </label>
                      </div>
                      {/**Radio buttion for No Compiled */}
                      <div className='mx-5 mt-2'>
                        <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="noavail"
                          id="noavail"
                          value="No" 
                          onChange={ev => setcompliedtoadmissionpolicy(ev.target.value)}/>
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="noavail">No
                        </label>
                      </div>
                  </div>  
                </div>
              </div>
          </div>
        </div>
        {/**===========SUMBIT Button============= */}
        <div className="text-center flex justify-end my-8">
                <button onClick={onDecline}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Decline
                </button>
                <button onClick={onReturn}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Return
                </button>
                <button onClick={onClickAccept}
                  type="submit"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                  Accept
                </button>
              </div>
        </form>
      </div>
    </main>
    </>
    
  )
}
