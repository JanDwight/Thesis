import React from 'react';
import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';

export default function AddClass({closeModal}) {
  const [course_title, setTitle] = useState(''); // Define state for title
  const [courseCode, setCourseCode] = useState(''); // Define state for courseCode
  const [coursetype, setCourseType] = useState(''); // Define state for coursetype with an initial value of 'Lecture'
  const [units, setUnits] = useState(''); // state for units
  const [semester, setSemester] = useState(''); // Define state for semester with an initial value of 'first'
  const [year, setYear] = useState('1'); // Define state for year with an initial value of '1'
  const [section, setSection] = useState(''); // Define state for section
  const [instructor, setInstructor] = useState(''); // Define state for instructor
  //const [schedule, setSchedule] = useState(''); // Define state for schedule //split for the time and day 10:00 MWF---sample
  //pending

  const [subjectData, setSubjectData] = useState('');
  const [instructorData, setInstructorData] = useState('');

 
  //also retrieve ID
  //send ID and instructor, section and sched

  //fetching display data
  useEffect(() => {
    // Your code here
    async function fetchData() {
        try {
          const [show_subjects, show_instrtuctors] = await Promise.all([
            fetchTables('/show_subjects'), //retrieve from curricula 
            fetchTables('/show_instructors'), //retrieve from users (teachers only)
            
          ]);

          setSubjectData(show_subjects); //only id, title, code, lecture/lab, units, semester, yr
          setInstructorData(show_instrtuctors); //only id and name

        } catch (error) {
          console.error('Error fetching data from the database:', error);
        }
      }
      
      //fetch all tables
      async function fetchTables(endpoint) {
        try {
          const response = await axiosClient.get(endpoint);
          return response.data;
        } catch (error) {
          console.error('Error fetching data from the database:', error);
        }
      }

      fetchData();
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault(); // Prevent the default form submission behavior

      // Create a formData object and send it using axios
      const formData = {
        course_id, //placeholder
        course_title,
        courseCode,
        coursetype,
        units,
        semester,
        year,
        section,
        instructor,
        //schedule,
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

 

  return (
    <>
    <ReactModal appElement={document.getElementById('root')} className="custom-modal"> </ReactModal>
        {/*For creating sections 1 class = 2 or more sections * 2 if there is both lec and lab 
        meaning one subject can potentially have 4 classes minimum*/}
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-1'>
        Add Class [Create New Section]
        </div>
        
        {/*----------*/}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <select
                id="course_title"
                name="course_title"
                onChange={(ev) => setTitle(ev.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="" disabled selected>
                  Course Title
                </option>
                <option value="Course Title 1">Course Title 1</option>
                <option value="Course Title 2">Course Title 2</option>
              </select>
            </div>
            <div className="mt-5 flex flex-col-2 justify-between">
              <select
                id="courseCode"
                name="courseCode"
                onChange={(ev) => setCourseCode(ev.target.value)}
                className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="" disabled selected>
                  Course Code
                </option>
                <option value="Course Code 1">Course Code 1</option>
                <option value="Course Code 2">Course Code 2</option>
              </select>
              <input
                id="course_type"
                type="text"
                name="course_type"
                //value=retrieved item
                value='lecture?'
                disabled // makes field uneditable
                className="block w-[49%] rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-5 flex flex-col-2 justify-between">
            <input
                id="units"
                type="text"
                name="units"
                //value=retrieved item
                value='units?'
                disabled // makes field uneditable
                className="block w-[49%] rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
              <input
                id="semester"
                type="text"
                name="semester"
                //value=retrieved item
                value='semester?'
                disabled // makes field uneditable
                className="block w-[49%] rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-5 flex flex-col-2 justify-between">
            <input
                id="yrlvl"
                type="text"
                name="yrlvl"
                //value=retrieved item
                value='yrlvl?'
                disabled // makes field uneditable
                className="block w-[49%] rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
              <input
                      id="section"
                      name="section"
                      type="text"
                      maxLength={1}
                      placeholder='Section'
                      //value={section} retrieved item
                      onChange={(ev) => setSection(ev.target.value)}
                      className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                      required
                    />
            </div>
            <div className="mt-5 flex flex-col-2 justify-between">
            <select
                id="instructor"
                name="instructor"
                onChange={(ev) => set(ev.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="" disabled selected>
                  Instructor
                </option>
                <option value="Prof 1">Prof 1</option>
                <option value="Prof 2">Prof 2</option>
              </select>
            
            </div>
            <div>
              <label className="block text-sm text-gray-700 text-center font-bold mt-2 mb-2">
                Class Schedule
              </label>
            </div>
            <div className="mt-2 flex flex-col-2 justify-between">
              <label htmlFor="time" className="block text-sm text-gray-700 text-center font-bold mb-2">
                  Time:
              </label>
              <input
                  id="time"
                  type="text"
                  name="time"
                  //ignore for now
                  placeholder='time'
                  className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text"
              />
            </div>

          <div className="mt-2 flex flex-col-2 justify-between">
              <label htmlFor="day" className="block text-sm text-gray-700 text-center font-bold mb-2">
                  Day:
              </label>
              <input
                  id="day"
                  type="text"
                  name="day"
                  //ignore for now
                  placeholder='day'
                  className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text"
              />
          </div>
            <div className="grid grid-row-2 justify-center">
                <button type="submit" className="bg-[#0FE810] rounded-2xl mt-5 px-5 text-white font-size">
                  Add Class
                </button>
                <button onClick={closeModal} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white font-size">
                  Cancel
                </button>
            </div>
          </form>
        </div>
        {/*----------*/}
    </>
  )
}
