import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';
import AddLinks from '../views_components/AddLinks.jsx';
import ReactModal from 'react-modal';
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditLinks from '../views_components/EditLinks.jsx';
import ArchiveLinks from '../views_components/ArchiveLinks.jsx';
import { useStateContext } from '../../../context/ContextProvider';

export default function Links() {
  //Calling the Archivelinks
  const [showEditlink, setshowEditlink] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [isAchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [filterText, setFilterText] = useState(''); //for search
  const {userRole} = useStateContext('');

    const addLinks = async (linkData) => {
      try {
        const response = await axios.post('/addlink', linkData);
      } catch (error) {
        console.error(error);
      }
    };
    
    const onSubmitarchivelink = async (archiveModalValue, index) => {
      setSelectedLink(links[index]); // Make sure the correct link is selected 
      setIsArchiveModalOpen(archiveModalValue);
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
        
  //Update Axios
  const updateLink = async (updatedLink) => {
    try {
      const response = await axiosClient.put(`/updatelink/${updatedLink.id}`, updatedLink);
      console.log('Link updated successfully:', response.data);
      fetchLinks();
      handleCloseEditLinks(); // Close the edit modal
    } catch (error) {
      console.error('Error updating link:', error);
    }
  };

  const handleEditClick = (link) => {
    setshowEditlink(true);
    setSelectedLink(link);
  };

  const handleCloseEditLinks = () => {
    setSelectedLink(null);
    setIsEditLinksOpen(false);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // //for search
  const filteredData = links.filter(
    (link) =>
      link.class_code.toString().includes(filterText) ||
      link.class_description.toLowerCase().includes(filterText.toLowerCase()) ||
      link.instructor_name.toLowerCase().includes(filterText.toLowerCase()) ||
      link.url.toLowerCase().includes(filterText.toLowerCase())
  );
 
  return (
    <>
    <div className="w-full h-[auto] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
      <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
        <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Links</div>
        <div className="mt-5 mx-5 flex flex-row justify-between items-baseline">
          
          {/* //Search input */}
          <div className="flex items-baseline">
          <div className="my-4 mx-4" id="magnifying_glass">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>
          <input
            id="search_bar"
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
            className="h-10 px-7 py-4 border border-gray-300 focus:ring-viridianHue focus:border-viridianHue rounded-lg"
          />
        
          {/* Add Links button */}
          {userRole === 1 && ( // Check if userRole is equal to 1
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#397439] hover:bg-[#0FE810] rounded-2xl px-7 py-2 text-white font-size ml-10"
          >
            Add Links
          </button>
        )}
          </div>            
        </div>
      </div>
    
      {/* <div className="table-container overflow-x-auto"> Edited*/}
      <div className="table-container overflow-x-auto max-h-[400px] overflow-y-auto">
            <table className="table-auto w-full mt-5 rounded border-separate border-spacing-y-3" >
		            <thead>
		              <tr>
                    <th className="text-center text-gray-700 bg-gray-200 p-2">Class Code</th>
                    <th className="text-center text-gray-700 bg-gray-200 p-2">Class Description</th>
                    <th className="text-center text-gray-700 bg-gray-200 p-2">Instructor</th>
                    <th className="text-center text-gray-700 bg-gray-200 p-2">Link Code</th>
		              </tr>
                </thead>
                 <tbody>
                     {filteredData.map((link, index) => (//edited
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-[#7EBA7E]' : 'bg-[#d2f0d2]'}`} onSubmit={addLinks}>
                          <td className="text-center rounded-l-full p-2 overflow-hidden overflow-wrap break-word">{link.class_code.slice(0, 40)}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">{link.class_description.slice(0, 50)}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">{link.instructor_name.slice(0, 50)}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-500">
                           {link.url.slice(0, 50)}... {/* Displaying the first 10 characters */}
                            </a>
                          </td>
                          <td className= "text-center rounded-r-full flex justify-center space-x-2">
                            <button onClick={() => handleEditClick(link)}>
                            <img src={edit} alt='edit' className='h-6 w-6' />
                            </button>
                            <button onClick={() => onSubmitarchivelink(true, index)}>
                              <img src={archive} alt='archive' className='h-7 w-7' />
                            </button>
                            
                          </td>
                        </tr>
                        ))}
                </tbody>
	          </table>
            </div>
          </div>


      {/* Addlinks Modal*/}
      <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
      >
        <div>
          <AddLinks closeModal={() => setIsModalOpen(false)}/>
        </div>
      </ReactModal>

      
      <ReactModal
      isOpen={isAchiveModalOpen}
      onRequestClose={() => setIsArchiveModalOpen(false)}
      className=" h-0 w-0"
      >
      {/* Archive Modal*/}  
      <ArchiveLinks
       onClose={handleCloseEditLinks}
      selected={selectedLink}
              />

      {/* Edit/Update Modal         */}
      </ReactModal>
        < EditLinks
              showEditlink={showEditlink}
              onClose={() => setshowEditlink(false)}
              selected={selectedLink}
            />
            
      </>

    
  );
  }

