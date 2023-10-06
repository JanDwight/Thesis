import React, { useState, useEffect, Component } from 'react';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import AddLinks from '../views_components/AddLinks.jsx';
import ReactModal from 'react-modal';
import arhive from "@assets/delete.png"
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditLinks from '../views_components/EditLinks.jsx';
import ArchiveLinks from '../views_components/ArchiveLinks.jsx';

export default function Links() {
  //Calling the Archivelinks
  const [showArchivelink, setShowArchivelink]= useState(false);
  const [isEditLinksOpen, setIsEditLinksOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [isAchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  
    const addLinks = async (linkData) => {
      try {
        const response = await axios.post('/addlink', linkData);
        // Handle the response (e.g., show success message)
      } catch (error) {
        // Handle errors (e.g., display validation errors)
        console.error(error);
      }
    };
    
    const onSubmitarchivelink = async (archiveModalValue, index) => {
      setSelectedLink(index);
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

      // class LinksList extends Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       data: [], // Initialize with an empty array
      //       isArchiveLinksOpen: false, // Initially, the custom modal for archiving links is closed
      //       isEditLinksOpen: false, // Initially, the custom modal for editing links is closed
      //       selectedLink: null, // Store the selected Link for the modals
      //     };
      //   }
      
      //   componentDidMount() {
      //     this.fetchData();
      //   }

      // }
        
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
    setSelectedLink(link);
    setIsEditLinksOpen(true);
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
                    <th className="text-center">Title</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Author</th>
                    <th className="text-center">Action</th>
		              </tr>
                </thead>
                 <tbody>
                     {links.map((link, index) => (
                      <tr 
                        key={index} 
                        className="bg-[#7EBA7E] p-5"
                        onSubmit={addLinks}>
                          <td className="text-center rounded-l-full p-2">{link.class_code}</td>
                          <td className="text-center p-2">{link.class_description}</td>
                          <td className="text-center p-2">{link.instructor_name}</td>
                          <td className="text-center p-2">{link.url}</td>
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
      isEditLinksOpen = {isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
      >
              <div>
              <EditLinks
                link={selectedLink}
                onClose={handleCloseEditLinks}
                onSave={updateLink}
              />
              </div>
            
      </ReactModal>

      <ReactModal
      isOpen={isAchiveModalOpen}
      onRequestClose={() => setIsArchiveModalOpen(false)}
      className=" h-0 w-0"
      >
              <div>
              <ArchiveLinks
                showArchivelink={showArchivelink}
                onclose={() => setShowArchivecourse(false)}
                selected={selectedLink}
              />
              </div>
            
      </ReactModal>

     
      {/* <ArchiveLinks
          showArchivelink={showArchivelink}
          //onclose={() => setShowArchivecourse(false)}
          index={selectedLink}
        /> */}
      </>
      

    
  );
}
