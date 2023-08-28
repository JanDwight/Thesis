import React from 'react'
import coverVid from "@assets/chess.mp4";
import schoolLogo from "@assets/BSUCircle.png";

export default function LandingPage() {
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
    <h1 className='font-franklin font-extrabold text-4xl'>WELCOME TO</h1>
    </div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
      <div className="flex justify-center mr-10 mb-5">
      <img
                        className="h-10 w-10 mx-2 my-1"
                        src={schoolLogo}
                        alt="BSUlogo"/>
       <h1 className='font-franklin font-extrabold text-2xl my-2'>BENGUET STATE UNIVERSITY</h1>                  
      </div>
      <h1 className='font-franklin font-extrabold text-5xl'>DEPARTMENT OF PSYCHOLOGY</h1>
      <h2 className='font-franklin font-extrabold text-2xl my-2'>Exploring Indegenous Psychology towards a Decolonized Psychology</h2>
    </div>
     {/* overlapping cards */}
     <div className='absolute left-30 ml-40 bottom-0 w-3/4 h-24 flex text-white py-25'>
        {/* BSU VISION */}
        <div className='bg-red-800/70  w-1/2 h-60 mx-1 rounded-lg p-2'>
        <h6 className="text-xl font-semibold mt-3 mx-5">BSU Vision</h6>
                    <p className="m-5">
                    BSU as an international Smart University engendering graduates to walk the intergenerational highways.
                    </p>
        </div>
        {/* BSU MISSION */}
        <div className='bg-green-800/90  w-3/4 h-60 mx-1 rounded-lg p-2'>
        <h6 className="text-xl font-semibold mt-3 mx-5">
                     BSU Mission
                    </h6>
                    <p className="m-5">
                    BSU cares to :
                      <li>Challenge Innovation</li>
                      <li>Advance Technology and Facilities</li>
                      <li>Revitalize Administration</li>
                      <li>Engender Partnership</li>
                      <li>Serve Intergenerational Role</li>
                    </p>
        </div>
        {/* COLLEGE GOALS */}
        <div className='bg-lime-800/80 w-3/4 h-60 mx-1 rounded-lg p-2'>
          <h6 className="text-xl font-semibold mt-3 mx-5">
            College of Social Sciences Goals
          </h6>
          <div className="max-h-40 overflow-y-scroll">
            <p className="m-5">
                      <ul className="list-decimal space">
                      <li>Promote academic space advocating/mainstreaming indigenous knowledge, 
                        cultural and environmental heritage, gender sensitivity, and engaging evidence-based innovation.</li>
                      <li>Produce globally competent graduates imbued with values systems rooted in social justice, freedom,
                        critical thinking.
                      </li>
                      </ul>
                      </p>
                    </div>
        </div>
      </div>
    
        <div className="pb-20 bg-gray-800/90 ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap w-3/4 pt-60 ml-20 py-25">

               {/* Curriculum Section */}
            <div className='w-1/3 h-100 bg-white mx-10 mb-8 shadow-lg rounded-lg'>
             
                <div className='px-4 py-5 flex-auto'>
                  <h6 className='text-xl text-center text-white bg-viridian font-semibold'>Bachelor of Science in</h6>
                  <h6 className='text-xl text-center text-white bg-viridian font-semibold '>Psychology</h6>
                  <div className='flex overflow-y-scroll'>
                    <p className='m-5'>
                      Curriculum CMO.34, s.2017
                      <hr className='border-gray-500 my-2'/>
                      <ul>
                        <li>SS21 Understanding the Self</li>
                        <li>SS22 Readings in Philippine History</li>
                        <li>SS23 Contemporary World</li>
                        <li>SS24 Ethics</li>
                        <li>Eng21 Purposive Communication</li>
                        <li>Art21 Art Appreciation</li>
                        <li>P21 Life and Works of Rizal</li>
                        <li>STS21 Science, Technology and Society</li>
                        <li>Math21 Mathematics in the Modern World</li>
                        <li>SSP22 Philippine Indigenous Communities</li>
                        <li>AH22 Philippine Popular Culture</li>
                        <li>AH23 Indigenous Creative Crafts</li>
                        <li>Cordi101 Cordillera History and Socio-Cultural Heritage</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
         
              
               {/* Psychology Program Objectives */}
            <div className='w-full md:w-1/2 mx-10  mb-8'>
              <div className='flex flex-col  break-words bg-white w-full shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                    <h6 className="text-xl font-semibold text-center text-white bg-viridian">
                     Psychology Program Objectives
                    </h6>
                    <div className="max-h-60 overflow-y-scroll">
                      <p className="m-5">
                      <ul className="list-decimal space">
                      <li>Demonstrate the capability to discuss and analyze the major theories and concepts in psychology (knowlege in psychology).</li>
                      <li>Demonstrate and apply methods of psychologial inquiry in building knowledge on local culture and context (psychological research).
                      </li>
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                {/* Admission Requirements */}
              <div className='flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                    <h6 className="text-xl font-semibold text-center text-white bg-viridian">
                    Admission Requirements
                    </h6>
                    <div className="max-h-40 overflow-y-scroll">
                      <hr className='border-gray-400 my-2'/>
                      <p className="my-5">
                        APPLICANTS
                   
                      <li>Senior High School Graduate.</li>
                      <li>High School Graduates of the Old High School curriculum who did not enroll in any degree Program
                        in any other school after graduation from high school .
                      </li>
                      <li>Grade 12 as of application period.</li>
                      <li>ALS/PEP Completers eligible for college admission.</li>
                      GRADE
                  
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
   

    {/* Footer */}
    <section className='relative block py-1 lg:pt-0 bg-green-600'>
      <div className='container mx-auto px-4'>
        <p className='copyright-info text-center mb-0'>
          © 2023 Department of Psychology. All Rights Reserved.
        </p>
      </div>
    </section>
  </div>
              
  )
}
