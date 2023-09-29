import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function AddCourse({closeModal}) {
  const [formData, setFormData] = useState({
    classYear: '',
    semester: '',
    courseCode: '',
    units: '',
    courseTitle: '',
    hoursperWeek: '',
    course_type: '',
    preReq: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');  // Add this line
    // Make a POST request to your backend endpoint (/addlink)
    axiosClient.post('/addcurriculum', formData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors, including validation errors
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
        } else {
          console.error(error.response.data);
        }
      });

    // Close the modal
    closeModal();
  };

  return (
    <> 
        <div className='flex justify-center font-bold text-4xl text-[#525252]'>
        Add Course
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="classYear"
                      name="classYear"
                      type="text"
                      placeholder='Year'
                      value={formData.classYear}
                      onChange={handleChange}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="semester"
                      name="semester"
                      type="text"
                      placeholder='Semester'
                      value={formData.semester}
                      onChange={handleChange}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="courseCode"
                      name="courseCode"
                      type="text"
                      placeholder='Course Code'
                      value={formData.courseCode}
                      onChange={handleChange}
                      className="block w-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="units"
                      name="units"
                      type="text"
                      placeholder='Units'
                      value={formData.units}
                      onChange={handleChange}
                      className="block w-[40%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-1 justify-between'>
                    <textarea
                      id="courseTitle"
                      name="courseTitle"
                      type="text"
                      placeholder='Course Title'
                      value={formData.courseTitle}
                      onChange={handleChange}
                      className="block w-full h-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-3 justify-between'>
                    <input
                      id="hoursperWeek"
                      name="hoursperWeek"
                      type="text"
                      placeholder='Hours/Week'
                      value={formData.hoursperWeek}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 t" 
                    />
                   
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                      <label for= "lec">Lecture</label>
                      <input
                        id="lec"
                        name="lec"
                        type="radio" //change to radio
                        value={"Lec"}
                        onChange={handleChange}
                        className="block rounded-md border-2 border-solid border-neutral-300" 
                      />
                    </div>
                    <div>
                      <label for= "lab">Laboratory</label>
                      <input
                        id="lab"
                        name="lab"
                        type="radio" //change to radio
                        value={"Lab"}
                        onChange={handleChange}
                        className="block rounded-md border-2 border-solid border-neutral-300" 
                      />
                  </div>
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="preReq"
                      name="preReq"
                      type="text"
                      placeholder='Pre Requisite'
                      value={formData.preReq}
                      onChange={handleChange}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="grade"
                      name="grade"
                      type="text"
                      placeholder='Grade'
                      value={formData.grade}
                      onChange={handleChange}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='grid grid-row-2 justify-center'>
                    <button type="submit" className="bg-[#0FE810] rounded-2xl mt-3 px-5 text-white font-size">
                         Add Course
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
