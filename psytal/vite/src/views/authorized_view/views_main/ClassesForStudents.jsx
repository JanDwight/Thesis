import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';
import ClassPopUp from '../views_components/ClassPopUp.jsx';

export default function ClassesForStudent() {
    const test = [
        {class_code: "ABC1", course_code: "TEST", course_title: "TEST", semester: "TEST", class_year: "TEST", class_section: "TEST" },              
        {class_code: "ABC1", course_code: "TEST", course_title: "TEST", semester: "TEST", class_year: "TEST", class_section: "TEST" },
        {class_code: "ABC1", course_code: "TEST", course_title: "TEST", semester: "TEST", class_year: "TEST", class_section: "TEST" }
    ]

    const [isClassPopUpOpen, setClassPopUpOpen]= useState(false);
    const [selectedClass, setSelectedClass] = useState([]);

    const handleOpenPopUp = (subject) => {
        setClassPopUpOpen(true);
        setSelectedClass(subject);
      }

    const [classes, setClasses] = useState([]);   
      useEffect(() => {
          fetchClasses();
        }, []);
      
      const fetchClasses = async () => {
          try {
            const response = await axiosClient.get('/classes');
            setClasses(response.data.classes);
          } catch (error) {
            console.error(error);
          }
        };

    return (
      <>
      <div className="w-full h-[auto] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
        <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
          <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Classes</div>
        </div>
      
        {/* <div className="table-container overflow-x-auto"> Edited*/}
        <div className="table-container overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="table w-full table-striped text-gray-700">
          <thead>
            <tr>
              <th className="text-left bg-gray-200 p-2">Class Code</th>
              <th className="text-left bg-gray-200 p-2">Course Code</th>
              <th className="bg-gray-200 text-left p-2">Course Title</th>
              <th className="bg-gray-200 text-left p-2">Semester</th>
              <th className="bg-gray-200 text-left p-2">Year</th> 
              <th className="bg-gray-200 text-left p-2">Section</th>
            </tr>
          </thead>
          <tbody> {test.map((classes, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'odd:bg-green-100' : ''}`}
                >
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.class_code}</td>
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.course_code}</td>
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.course_title}</td>
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.semester}</td>
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.class_year}</td>
                <td className="text-left p-2" onClick={() => handleOpenPopUp(subject)}>{classes.class_section}</td>
              </tr>
            ))}
          </tbody>
        </table>
              </div>
            </div>    

            
        <ClassPopUp
          isClassPopUpOpen={isClassPopUpOpen}
          onClose={() => setClassPopUpOpen(false)}
          subject={selectedClass}
        />
        </>
  
      
    );
  }