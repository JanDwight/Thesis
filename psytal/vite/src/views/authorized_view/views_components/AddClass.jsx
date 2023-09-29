import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function AddClass({closeModal}) {
  const [course_title, setTitle] = useState(''); // Define state for title
  const [courseCode, setCourseCode] = useState(''); // Define state for courseCode
  const [coursetype, setCourseType] = useState('Lecture'); // Define state for coursetype with an initial value of 'Lecture'
  const [semester, setSemester] = useState('first'); // Define state for semester with an initial value of 'first'
  const [year, setYear] = useState('1'); // Define state for year with an initial value of '1'
  const [section, setSection] = useState(''); // Define state for section
  const [units, setUnits] = useState('1'); // Define state for section

  const handleSubmit = (ev) => {
    ev.preventDefault(); // Prevent the default form submission behavior
    // You can access the form data using the state variables (title, courseCode, coursetype, etc.)
    console.log('course title: ', course_title);
    console.log('units', units);
    console.log('coursecode: ', courseCode);
    console.log('coursetype', coursetype);
    console.log('semester: ', semester);
    console.log('year', year);
    console.log('section: ', section);

    const formData = {
      course_title,
      units,
      courseCode,
      coursetype,
      semester,
      year,
      section,
    };

    axiosClient.post('/addclass', formData)
      .then((response) => {
        // Handle a successful response here
        console.log('Data sent successfully:', response.data);

        // Close the modal or perform any other action as needed
        closeModal();
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error sending data:', error);
      });
  };

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleYrlvlChange = (event) => {
    setYear(event.target.value);
  };


  return (
    <>
    <ReactModal appElement={document.getElementById('root')}> </ReactModal>
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>
        Add Class
        </div>
        <div>
            <form onSubmit={handleSubmit}>
              <div className='mt-5'>
                      <input
                        id="course_title"
                        name="course_title"
                        type="text"
                        placeholder='Course Title'
                        onChange={ev => setTitle(ev.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                      />
                </div>
                <div className='mt-5 flex flex-col-2 justify-between'>
                    <input
                      id="courseCode"
                      name="courseCode"
                      type="text"
                      placeholder='Course Code'
                      onChange={ev => setCourseCode(ev.target.value)}
                      className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <select
                      id="coursetype"
                      name="coursetype"
                      onChange={handleCourseTypeChange}
                      className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    >
                      <option value="Lecture">Lecture</option>
                      <option value="Laboratory">Laboratory</option>
                    </select>
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                  <div className='w-[49%]'>
                    <label htmlFor="semester" className="block text-sm text-gray-700">Semester</label>
                    <select
                      id="semester"
                      name="semester"
                      defaultValue="1"
                      value={semester} try dropdown
                      onChange={handleSemesterChange}
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    >
                      <option value="first">First</option>
                      <option value="second">Second</option>
                      <option value="midyear">Midyear</option>
                    </select>
                  </div>
                  <div className='w-[49%]'>
                    <label htmlFor="units" className="block text-sm text-gray-700">Units</label>
                    <select
                      id="units"
                      name="units"
                      defaultValue="1" // Set the default selected value to "1"
                      onChange={handleUnitsChange} // Uncomment this if you want to handle changes with React
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className='flex flex-col-2 justify-between'>
                  <div className='w-[49%]'>
                    <label htmlFor="year" className="block text-sm text-gray-700">Year Level</label>
                    <select
                      id="year"
                      name="year"
                      defaultValue={1}
                      onChange={handleYrlvlChange}
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    >
                      <option value="1">First</option>
                      <option value="2">Second</option>
                      <option value="3">Third</option>
                      <option value="4">Fourth</option>
                    </select>
                  </div>
                  <div className='w-[49%]'>
                    <label htmlFor="section" className="block text-sm text-gray-700">Section</label>
                    <input
                      id="section"
                      name="section"
                      type="text"
                      maxLength={1}
                      placeholder='Section'
                      value={section}
                      //force to uppercase
                      onChange={ev => setSection(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                  </div>
                </div>

                
                <div className='mt-10 grid grid-row-2 justify-center'>
                  <button type="submit" className="bg-[#0FE810] rounded-2xl mt-5 px-5 text-white font-size">
                    Add Class
                  </button>
                  <button onClick={closeModal} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white font-size">
                    Cancel
                  </button>
                </div>
            </form> 
        </div>
    </>
  )
}
