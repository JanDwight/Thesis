import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import AddLinks from '../views_components/AddLinks.jsx';
import ReactModal from 'react-modal';
import arhive from "@assets/delete.png"
import ArchiveLinks from '../views_components/ArchiveLinks.jsx';


export default function Links() {
  //Calling the Archivelinks
  const [showArchivelink, setShowArchivelink]= useState(false);
  const [errors, setErrors] = useState({ __html: '' });
  const onSubmitarchivelink = async (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    try {
    const response = await axiosClient.post('/archivelink', { });
    fetchLinks();
    setShowLinks(false);
    } catch (error) {
    if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce(
        (accum, next) => [...accum, ...next],
        []
        );
        setError({ __html: finalErrors.join('<br>') });
    }
    console.error(error);
    }
};

  // Calling the Addlink
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [links, setLinks] = useState([]);  

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axiosClient.get('/getlinks');
      setLinks(response.data.links);
    } catch (error) {
      console.error(error);
    }
  };

  

  // Sample data 
  const sampleLinks = [
    { id: 1, code: 'C580', description: 'Psych1', instructor: 'John Doe' },
    { id: 2, code: 'A381', description: 'Psych2', instructor: 'Sam Wilson' },
    { id: 3, code: 'B492', description: 'Psych3', instructor: 'John Smith' },
   
  ];

  return (
    <>
    <div className="w-full h-[500px] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
      <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
        <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Links</div>
        <div>
          <button onClick={() =>  setIsModalOpen(true)}
            className="bg-[#0FE810] rounded-2xl  px-7 py-1 text-white font-size"
          >
            Add Links
          </button>
        </div>
      </div>


      <div className="mx-7 flex flex-col-4 mt-3 justify-between">
        <div className='text-lg font-serif'>Class Code</div>
        <div className="text-lg font-serif hidden md:hidden lg:contents">Description</div>
        <div className='text-lg font-serif'>Instructor</div>
        <div className="text-lg font-serif hidden md:hidden lg:contents">Action</div>
      </div>

      <div className="mt-2">
        <>
        {links.length > 0
                ? links.map((link) => (
                    <a key={link.id} className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                      <div className="text-left">{link.code}</div>
                      <div className="text-left hidden md:hidden lg:contents">{link.description}</div>
                      <div className="text-left">{link.instructor}</div>
                      <div>
                        <button >
                          <img src={arhive} alt='archive' class='h-7 w-7 '/>
                        </button>
                      </div>
                    </a>
                  ))
                : sampleLinks.map((link) => ( //Delete after connecting to database
                    <a key={link.id} className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                      <div className="text-left">{link.code}</div>
                      <div className="text-left hidden md:hidden lg:contents">{link.description}</div>
                      <div className="text-left">{link.instructor}</div>
                      <div>
                        <button onClick={() => setShowArchivelink(true)}  >
                          <img src={arhive} alt='archive' class='h-7 w-7 '/>
                        </button> 
                      </div>
                    </a>
                  ))}
        </>

      </div>

    </div>
      
      <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
      >
        <div>
          <AddLinks closeModal={() => setIsModalOpen(false)}/>
        </div>
      </ReactModal>

      <ArchiveLinks 
        showArchivelink={showArchivelink}
        onclose={() => setShowArchivelink(false)}
        onSubmitarchivelink={onSubmitarchivelink}
      />
      
    </>
  );
}
