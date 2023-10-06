import React, { useState, } from 'react';
import axiosClient from '../../../axios.js';
import EditLinks from '../views_components/EditLinks.jsx'; //<-- Import EditLinks component

export default function AddLinks({closeModa}) { 
  const [formData, setFormData] = useState({
    class_code: '',
    class_description: '',
    instructor_name: '',
    url: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');  // Add this line
    // Make a POST request to your backend endpoint (/addlink)
    axiosClient.post('/addlink', selected)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors, including validation errors
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
        } else {
          console.error(error.response.data);
        }
      });

    // Close the modal
    closeModal();
  };

const updateLink = async (updatedLink) => {
    try {
      const response = await axios.put(`/updatelink/${updatedLink.id}`, updatedLink);
      console.log('Link updated successfully:', response.data);
      fetchLinks();
      handleCloseEditLinks(); // Close the edit modal
    } catch (error) {
      console.error('Error updating link:', error);
    }
  };


  
  return (
    <>
      {/* ... your JSX ... */}
      <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>Add Link</div>
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mt-10 flex flex-col-2 justify-between'>
          <input
              id="class_code"
              name="class_code"
              type="text"
              placeholder='Class Code'
              value={formData.class_code}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />         
        </div>
        <div className='mt-5'>
          <textarea
            id="class_description"
            name="class_description"
            type="text"
            placeholder='Class Description'
            value={formData.class_description}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div>
        <div className='mt-5'>
          <input
            id="instructor_name"
            name="instructor_name"
            type="text"
            placeholder='Instructor'
            value={formData.instructor_name}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div><div className='mt-5'>
          <input
            id="url"
            name="url"
            type="text"
            placeholder='Link'
            value={formData.url}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
           
        </div>
        {/* ... your Archive form inputs ... */}

        
     
        {/* ... your form inputs ... */}
        <button type="submit" className="bg-[#0FE810] rounded-2xl mt-5 px-5 text-white font-size">
          Add Link
        </button>
        <button onClick={closeModal} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white font-size">
          Cancel
        </button>
          </form>
        </div>

    </>
    
  );
}
  
    
    
  
  