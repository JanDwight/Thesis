import React, { Component }  from 'react'
import coverVid from "@assets/LandingPage.mp4";
import schoolLogo from "@assets/BSUlogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../../unauthorized_view/views_main/Carousel';
import Carousel2 from '../../unauthorized_view/views_main/Carousel2';
import temp1 from "@assets/TemplateWBG.png";


export default function LandingPage() {

                const items = [
                  <div >
                    <div className='absolute text-white text-3xl px-[2%] py-[0%]'>
                    <div >
                              {/* Admission Requirements */}
                            <div >
                            <div >
                                  <h6 >
                                  Admission Requirements
                                  </h6>
                                  <div >
                                    <hr />
                                    <p >
                                      APPLICANTS
                                    <li>Senior High School Graduate.</li>
                                    <li>High School Graduates of the Old High School curriculum who did not enroll in any degree Program 
                                      <p> in any other school after graduation from high school .</p>
                                    </li>
                                    <li>Grade 12 as of application period.</li>
                                    <li>ALS/PEP Completers eligible for college admission.</li>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              </div>
                    </div>
                    <div >
                      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="Image 1" />
                    </div>
                  </div>,

                  <div className="relative">
                  <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="Your Image" className="w-full" />
                  <div className="absolute top-0 left-0 md:p-6 text-white text-3xl max-w-full">
                    {/* Your content */}
                    <div>
                      {/* Psychology Program Objectives */}
                      <div>
                        <div>
                          <h6>Psychology Program Objectives</h6>
                          <p className="text-2xl p-2" >
                            <div>
                              <ul className="list-decimal space-y-2">
                                <li>
                                  Demonstrate the capability to discuss and analyze the major theories and concepts in psychology (knowledge in psychology).
                                </li>
                                <li>
                                  Demonstrate and apply methods of psychological inquiry in building knowledge on local culture and context (psychological research).
                                </li>
                              </ul>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> ,
                


                <div className="relative">
                  <img
                    src={temp1}
                    alt="Image 1"
                    className="w-full h-auto md:w-auto md:h-100 object-cover"
                  />
                </div>
                   
                  ];

                const items2 = [
                  /* BSU VISION */
                  <div className="relative">
                  <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="Your Image" className="w-full" />
                  <div className="absolute top-0 left-0 md:p-6 text-white text-4xl ">
                    <h6 className="text-3xl font-bold mt-3 mx-5 text-center">BSU Vision</h6>
                    <div className="max-h-60">
                      <p className="m-5 text-3xl text-center">
                        BSU as an international Smart University engendering graduates to walk the intergenerational highways.
                      </p>
                    </div>
                  </div>
                </div>,

                  /* BSU MISSION */
                  <div className="relative">
                  <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="Your Image" className="w-full" />
                  <div className="absolute top-0 left-0 md:p-0 text-white text-2xl ">
                    <h6 className="text-4xl font-bold mt-3 mx-5 text-center">BSU Mission</h6>
                    <div className="max-h-60 ">
                    <p className="m-2 text-3xl ">
                      <li>Challenge Innovation</li>
                      <li>Advance Technology and Facilities</li>
                      <li>Revitalize Administration</li>
                      <li>Engender Partnership</li>
                      <li>Serve Intergenerational Role</li>
                      </p>
                    </div>
                  </div>
                </div>,
                       
                <div className="relative">
                  <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000 " alt="Image" className="w-full rounded-lg" />
                   <div className="absolute top-0 left-0 md:p-6 text-white text-3xl max-w-full ">
                    {/* COLLEGE GOALS */}
                    <div className=' h-60 mx-1 rounded-lg p-2 text-xl '>
                      <h6 className="text-3xl font-bold mt-3 mx-5 ">
                        College of Social Sciences Goals
                      </h6>
                      <div className="h-40 ">
                        <p className="m-5">
                                  <ul className="list-decimal space text-2xl ">
                                  <li>Promote academic space advocating/mainstreaming indigenous knowledge, 
                                    cultural and 
                                    <p>environmental heritage, gender sensitivity, and engaging evidence-based innovation.</p>
                                    </li>
                                  <li>Produce globally competent graduates imbued with values systems rooted in social  
                                    <p>justice, freedom, critical thinking.</p>
                                  </li>
                                  </ul>
                                  </p>
                                </div>
                    
                    </div>
                  </div>
                </div> 
                ,
                /* END-Second Carousel Slide*/


                ];
                return (
                  <div className='w-full h-screen relative'>
                  <video
                    className='w-full h-full object-cover z-0'
                    src={coverVid}
                    autoPlay
                    loop
                    muted
                  />
                  <div className='absolute w-full h-full top-0 left-0 bg-gray-900/80'></div>
                  <div className='absolute left-40 ml-40 top-20 w-1/2 h-20 flex text-white py-20'>
                  </div>
                  <div className='absolute top-1 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                    <div className="flex justify-center mr-1 mb-1/2">
                    <img
                                      className="h-300 w-1/5 mx-2 my-4 "
                                      src={schoolLogo}
                                      alt="BSUlogo"/>
                      </div>
                      <div>
                        <h1 className='font-franklin font-extrabold text-5xl '>WELCOME TO</h1>
                      </div>
                    <h1 className='font-franklin font-extrabold text-6xl my-2'>BENGUET STATE UNIVERSITY</h1>                  
                    
                    <h1 className='font-franklin font-extrabold text-5xl'>DEPARTMENT OF PSYCHOLOGY</h1>
                    <h2 className='font-franklin font-extrabold text-3xl my-2'>Exploring Indegenous Psychology towards a Decolonized Psychology</h2>
                  </div>

     {/* Carousel Slide cards */}
        <>
            <div className=' h-1/3 relative' id='about'>
              <div  className='bg-slate-200 flex items-center justify-center h-full' >
                <div className="container w-25 py-10  ">
                  <Carousel items={items} />
                </div>
              </div>
          </div> 
          </>
          <>
          <div className='h-1/3 relative'>
          <div className='bg-slate-300 flex items-center justify-center h-full'>
            <div className="container w-25 py-10">
              <Carousel2 items2={items2} />
            </div>
          </div>
        </div>
          </>
   

        {/**<!--Footer--> */}
        <footer className='bg-neutral-100 text-center text-gray-500 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
              {/**<!-- Social icons --> */}
              <div className='border-b-2 border-neutral-200 p-6 dark:border-neutral-500'>
                <div className='container mx-auto px-10'>
                  <div className='flex items-center justify-center lg:justify-between'>
                    <div className='mr-12 hidden lg:block'>
                      <span>Get connected with us on social networks: BSU-CSS-Department of Psychology</span>
                    </div>
                    <div className='flex justify-center'>
                      {/**FB */}
                      <a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                          <path d=""/>
                        </svg>
                      </a>
             

              <a a href="https://www.facebook.com/psychologybsu" className="mr-6 text-gray-500 dark:text-gray-200">
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

      {/*Footer*/}
      <div className='container w-full px-10'>
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
              <p>REPUBLIC OF THE PHILIPPINES </p>
              <p>All content is in the public domain unless otherwise stated.</p>
            </div>
            
            {/**---------------COL3------------- */}
            <div className='mb-4 mx-10 flex flex-col justify-center font-semibold uppercase md:justify-start'>
              <h6 >
                Useful Links
              </h6>
              <p>
                <a href="http://www.bsu.edu.ph/" class=" text-black-200">need Help?</a>
              </p>
            </div>

            {/**--------------COL4------------- */}
            <div className=' flex flex-col font-semibold uppercase'>
              <h6 >
                Contact Us
              </h6>
              <div className=''>
              <p >
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                Km.5 La Trinidad, Benguet
                </p>
                </div>
                <p >
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                  psychology@gmail.com
                </p>
                <p >
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
                  </svg>
                  +63 9123 456 789
                </p>
            </div>
          </div>
        </div>
      </div> {/** End of the Main Footer Content */}

      {/**<!-- Copyrights --> */}
      <div className=' p-6 text-center bg-neutral-700'>
        <span>© 2023 Copyright:</span>
        <a font-semibold text-neutral-600 dark:text-neutral-400>Psychology Department</a>
      </div> {/**End of copyrights */}
    </footer>{/**End Footer */}

  </div>
              
  )
}
