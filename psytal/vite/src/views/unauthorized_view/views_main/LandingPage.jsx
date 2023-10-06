import React, { Component }  from 'react'
import coverVid from "@assets/LandingPage.mp4";
import schoolLogo from "@assets/BSUlogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../../unauthorized_view/views_main/Carousel';
import Carousel2 from '../../unauthorized_view/views_main/Carousel2';
import temp1 from "@assets/TemplateWBG.png";
import temp2 from "@assets/Template3.png";
import bgbuilding from "@assets/bgbuilding.jpg";

export default function LandingPage() {

                const items = [
                  <div>
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
                      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"alt="Image 1" />
                    </div>
                  </div>,

                  <div className="relative">
                  <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="carousel" className="absolute h-50 w-300 object-cover" />
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
            <div  className=' h-1/3 relative' >
              <div  className='bg-slate-300 flex items-center justify-center h-full' >
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
        <footer className='bg-neutral-100 text-center text-gray-500 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-[1%]'>
      {/**<!-- Social icons --> */}
      <div className='border-b-2 border-neutral-200 p-3 dark:border-neutral-500'>
        <div className='container mx-auto px-10'>
          <div className='flex items-center justify-center lg:justify-between'>
            <div className='mr-12 hidden lg:block'>
              <span>Get connected with us on social networks: BSU-CSS-Department of Psychology</span>
            </div>
            <div className='flex justify-center'>
              {/**FB */}
              <a href="https://www.facebook.com/psychologybsu" target="_blank" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/**Twitter */}
              <a href="https://twitter.com/BenguetStateU" target="_blank" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>

                  {/**Instagram */}
              <a href="https://www.instagram.com/benguetstateuniversityofficial/" target="_blank" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> 
         {/**End of Social Icons */}

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
                    className="mr-3 h-4 w-4">
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
                <a href="https://www.google.com/maps/@16.4529815,120.5897683,3a,75y,62.24h,81.21t/data=!3m6!1e1!3m4!1s3g6UBbP1ms4hzPLFCynOug!2e0!7i16384!8i8192?entry=ttu" target="_blank">
                Site Map
                </a>
              </h6>
              <p>
                <a href="http://www.bsu.edu.ph/" target="_blank" className=" text-black-200">BSU website</a>
              </p>
            </div>

            {/**--------------COL4------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Contact
              </h6>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                <a href="https://www.google.com/maps/dir//Benguet+State+University,+La+Trinidad,+Benguet/@16.4544374,120.5894334,528m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3391a3bb4279be9b:0xbf6e126a84be4efc!2m2!1d120.5902746!2d16.4543609?entry=ttu" target="_blank" className=" text-black-200">
                Km.5 La Trinidad, Benguet
                </a>
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-3 h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                  psychology@gmail.com
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-3 h-5 w-5">
                    <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
                  </svg>
                  +639123456732
                </p>
            </div>
          </div>
        </div>
      </div> 
      {/** End of the Main Footer Content */}

      {/**<!-- Copyrights --> */}
      <div className=' p-6 text-center bg-neutral-700'>
        <span>© 2023 Copyright:</span>
        <a font-semibold="true" text-neutral-600="true" dark:text-neutral-400="true">Psychology Department</a>
      </div> {/**End of copyrights */}
    </footer>{/**End Footer */}

  </div>
              
  )
}
