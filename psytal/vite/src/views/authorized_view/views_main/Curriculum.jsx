import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import { Menu, Transition } from '@headlessui/react';
import ReactModal from 'react-modal';
import AddCourse from "../views_components/AddCourse";
import arhive from "@assets/delete.png"
import ArchiveCourse from "../views_components/ArchiveCourse";

export default function Curriculum(){
      //Calling the ArchiveCourse
      const [showArchivecourse, setShowArchivecourse]= useState(false);
      const [errors, setErrors] = useState({ __html: '' });
     
      const addCourse = async (CurriculumData) => {
          try {
            const response = await axios.post('/addcurriculum', CurriculumData);
            // Handle the response (e.g., show success message)
          } catch (error) {
            // Handle errors (e.g., display validation errors)
            console.error(error);
          }
        };
      
        const onSubmitarchivecourse = async (curriculumId) => {
          try {
            const response = await axiosClient.post('/archivecurriculum', { curriculumId });
            fetchCurriculum();
            setShowCurriculum(false);
        } catch (error) {
            // Handle errors
            console.error(error);
        }
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
            
            <div className="m-5">
                <div className="mx-7 font-bold flex flex-col-10 flex justify-between">
                    <div>Class Year</div>
                    <div>Semester</div>
                    <div>Course Code</div>
                    <div>Course Title</div>
                    <div>Units</div>
                    <div>Hours/Week</div>
                    <div>Lec</div>
                    <div>Lab</div>
                    <div>Grade</div>
                    <div>Action</div>
                </div>
            </div>

            <div className="m-2">
              <>
                  <form>
                    <a key={curriculum.id} className="mx-7 font-bold flex flex-col-10 flex justify-between" onSubmit={addCourse}>
                      <div className="text-left">{curriculum.classYear}</div>
                      <div className="text-left">{curriculum.semester}</div>
                      <div className="text-left">{curriculum.courseCode}</div>
                      <div className="text-left">{curriculum.units}</div>
                      <div className="text-left">{curriculum.courseTitle}</div>
                      <div className="text-left">{curriculum.hoursperWeek}</div>
                      <div className="text-left">{curriculum.lec}</div>
                      <div className="text-left">{curriculum.lab}</div>
                      <div className="text-left">{curriculum.preReq}</div>
                      <div className="text-left">{curriculum.grade}</div>
                      <div>
                        <button onClick={() => onSubmitarchivecourse(curriculum.id)}>
                          <img src={arhive} alt='archive' className='h-7 w-7' />
                        </button>
                      </div>
                    </a>
                  </form>
              </>
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
      />
          
        </>
);
}
    