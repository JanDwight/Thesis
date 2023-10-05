import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import { Menu, Transition } from '@headlessui/react';
import ReactModal from 'react-modal';
import AddCourse from "../views_components/AddCourse";
import archive from "@assets/delete.png"
import ArchiveCourse from "../views_components/ArchiveCourse";
import { useAsyncValue } from 'react-router-dom';

export default function Curriculum(){
      //Calling the ArchiveCourse
      const [showArchivecourse, setShowArchivecourse]= useState(false);
      const [selectedcourse, setSelectedcourse] = useState([]);
      const [errors, setErrors] = useState({ __html: '' });
     
      const handleArchiveClick = (curriculum) => {
        setShowArchivecourse(true);
        setSelectedcourse(curriculum);
      }
      
      const addCourse = async (CurriculumData) => {
          //try {
          //  const response = await axios.post('/addcurriculum', CurriculumData);
            // Handle the response (e.g., show success message)
          //} catch (error) {
            // Handle errors (e.g., display validation errors)
          //  console.error(error);
         // }
        };
        
    
      // Calling the AddCourse
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [curriculum, setCurriculum] = useState([]);   
        useEffect(() => {
            fetchCurriculum();
          }, []);
        
        const fetchCurriculum = async () => {
            try {
              const response = await axiosClient.get('/getcurriculum');
              setCurriculum(response.data.curriculum);
            } catch (error) {
              console.error(error);
            }
          };

  return (
        <>
        <div className="w-full h-[500px] px-4 mx-auto  rounded-3xl bg-white shadow-2xl pt-5 pb-12">{/*For the Container*/}
            <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
                <div className="font-bold text-6xl text-[#525252]">Curriculum</div>
                {/*Filter and Add Courses */}
                <div className="flex flex-row">
                    <div>
                        <Menu>
                            <Menu.Button className="relative mr-5 py-1 px-5 border-2 border-black">Filter</Menu.Button>
                            <Menu.Items className="absolute px-[7px] border-2 border-black bg-white">
                                <div className="flex flex-col">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                        >
                                          1st Year
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      2nd Year
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      3rd Year
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'}`}
                                    >
                                      4th Year
                                    </a>
                                  )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} 
                        className="bg-[#0FE810] rounded-2xl  px-5 text-white font-size">
                            Add Course
                    </button>
                    </div>
            </div>
            
            <div>
            <table className="table-auto w-full mt-5 rounded border-separate border-spacing-y-3" >
		            <thead>
		              <tr>
                    <th className="text-center">Class Year</th>
                    <th className="text-center">Semester</th>
                    <th className="text-center">Course Code</th>
                    <th className="text-center">Units</th>
                    <th className="text-center">Course Title</th>
                    <th className="text-center">Hours/Week</th>
                    <th className="text-center">Lec/Lab</th>
                    <th className="text-center">Pre-Requisite</th>
                    <th className="text-center">Action</th>
		              </tr>
                </thead>

                <tbody>
                    {curriculum.map((curriculum) => (
                      <tr 
                        key={curriculum.id} 
                        className="bg-[#7EBA7E] p-5"
                      >
                          <td className="text-center rounded-l-full p-2">{curriculum.class_year}</td>
                          <td className="text-center p-2">{curriculum.semester}</td>
                          <td className="text-center p-2">{curriculum.course_code}</td>
                          <td className="text-center p-2">{curriculum.units}</td>
                          <td className="text-center p-2">{curriculum.course_title}</td>
                          <td className="text-center p-2">{curriculum.hoursperWeek}</td>
                          <td className="text-center p-2">{curriculum.course_type}</td>
                          <td className="text-center p-2">{curriculum.preReq}</td>
                          <td className= "text-center rounded-r-full">
                            <button onClick={() => handleArchiveClick(curriculum)}>
                              <img src={archive} alt='archive' className='h-7 w-7' />
                            </button>
                          </td>
                        </tr>
                        ))}
                </tbody>
	          </table>
            </div>
          </div>
      
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
        >
            <div>
                <AddCourse closeModal={() => setIsModalOpen(false)}/>
            </div>
        </ReactModal>

        <ArchiveCourse
          showArchivecourse={showArchivecourse}
          onclose={() => setShowArchivecourse(false)}
          curriculum={selectedcourse}
        />
          
        </>
);
}