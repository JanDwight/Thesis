import React, { useState, useEffect, Component } from 'react';
import axiosClient from '../../../axios.js';
import AddLinks from '../views_components/AddLinks.jsx';
import ReactModal from 'react-modal';
import arhive from "@assets/delete.png"
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditLinks from '../views_components/EditLinks.jsx';
import ArchiveLinks from '../views_components/ArchiveLinks.jsx';

export default function Links() {
  //Calling the Archivelinks
  const [showEditlink, setshowEditlink] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [isAchiveModalOpen, setIsArchiveModalOpen] = useState(false);
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
      console.log('selected Link: ' + selectedLink);
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


  return (
    <>
    <div className="w-full h-[auto] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
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
    
      <div>
            <table className="table-auto w-full mt-5 rounded border-separate border-spacing-y-3" >
		            <thead>
		              <tr>
                    <th className="text-center">Class Code</th>
                    <th className="text-center">Class Description</th>
                    <th className="text-center">Instructor</th>
                    <th className="text-center">Link Code</th>
		              </tr>
                </thead>
                 <tbody>
                     {links.map((link, index) => (
                      <tr 
                        key={index} 
                        className="bg-[#7EBA7E] p-5"
                        onSubmit={addLinks}>
                          <td className="text-center rounded-l-full p-2 overflow-hidden overflow-wrap break-word">{link.class_code}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">{link.class_description.slice(0.30)}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">{link.instructor_name}</td>
                          <td className="text-center p-2 overflow-hidden overflow-wrap break-word">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                           {link.url.slice(0, 50)}... {/* Displaying the first 10 characters */}
                            </a>
                          </td>
                          <td className= "text-center rounded-r-full">
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
