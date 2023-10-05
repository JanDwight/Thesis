import React, { useState, useEffect, Component } from 'react';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import AddLinks from '../views_components/AddLinks.jsx';
import ReactModal from 'react-modal';
import arhive from "@assets/delete.png"
import ArchiveLinks from '../views_components/ArchiveLinks.jsx';
import edit from "@assets/icons8createpost.png";



export default function Links() {
  //Calling the Archivelinks
  const [showArchivelink, setShowArchivelink]= useState(false);
  const [errors, setErrors] = useState({ __html: '' });
 
    const addLinks = async (linkData) => {
      try {
        const response = await axios.post('/addlink', linkData);
        // Handle the response (e.g., show success message)
      } catch (error) {
        // Handle errors (e.g., display validation errors)
        console.error(error);
      }
    };
    const onSubmitarchivelink = async (linkId) => {
      try {
        const response = await axiosClient.post('/archivelink', { linkId });
        fetchLinks();
        setShowLinks(false);
    } catch (error) {
        // Handle errors
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

  class LinksList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [], // Initialize with an empty array
        isArchiveLinksOpen: false, // Initially, the custom modal for archiving links is closed
        isEditLinksOpen: false, // Initially, the custom modal for editing links is closed
        selectedLink: null, // Store the selected Link for the modals
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData = () => {
      axiosClient.get('/getlinks')
        .then((response) => {
          const data = response.data;
  
          // Map the roles to strings
          const mappedData = data.map(link => ({
            ...link,
            // You can modify the fields as needed
          }));
  
        })
        .catch((error) => {
          console.error('Error fetching data from the database:', error);
        });
    }
  
    handleArchiveClick = (link) => {
      console.log('Archive Window Open');
      this.setState({
        selectedLink: link,
        isArchiveLinksOpen: true,
      });
    };
  
    handleEditLinksClick = (link) => {
      console.log('Edit Window Open');
      this.setState({
        selectedLink: link,
        isEditLinksOpen: true,
      });
    };
  
    handleCloseArchiveLinks = () => {
      console.log('Archive Links Closed');
      this.setState({
        isArchiveLinksOpen: false,
      });
    };
  
    handleCloseEditLinks = () => {
      console.log('Edit Links Closed');
      this.setState({
        isEditLinksOpen: false,
      });
    };
  
    handleSaveLinkChanges = (updatedLink) => {
      // saving
      console.log('Link Changes Saved:', updatedLink);
    };
  
    render() {
      const { data, selectedLink } = this.state;
    }
  

  }



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
    

      <div className="mx-7 flex flex-col-4 mt-3 justify-between">
        <div className='text-lg font-serif'>Title</div>
        <div className="text-lg font-serif hidden md:hidden lg:contents">Description</div>
        <div className='text-lg font-serif'>Author</div>
        <div className="text-lg font-serif hidden md:hidden lg:contents">Action</div>
      </div>

      <div className="mt-2">
          {links.map((link) => (
            <form key={link.id} onSubmit={(e) => e.preventDefault()}>
              <a className="mx-7 font-bold  flex-col-10 flex justify-between">
                <div className="text-left">{link.class_code}</div>
                <div className="text-left">{link.class_description}</div>
                <div className="text-left">{link.instructor_name}</div>
                <div className="text-left">{link.url}</div>
                <div className="text-left">
                <img
                src={edit} // Replace 'editImage' with the path to your edit image
                alt='edit'
                className='h-5 w-5 cursor-pointer' // Add 'cursor-pointer' to make it look clickable
                onClick={() => this.handleEditUsersClick(student)}
                  />
                  </div>
                <div>
                  <button onClick={() => onSubmitarchivelink(link.id)}>
                    <img src={arhive} alt='archive' className='h-7 w-7' />
                  </button>
                </div>
              </a>
            </form>
          ))}
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
      />

    {this.state.isEditUsersOpen && (
      <EditUsers
        showModal={this.state.isEditUsersOpen}
        onClose={this.handleCloseEditUsers}
        user={selectedStudent} // Pass the selected student to EditUsers
        onSave={this.handleSaveUserChanges} // Pass the save function
      />
    )}  

    </>
    
  );
}
