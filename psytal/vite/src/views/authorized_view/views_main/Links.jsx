import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import AddLinks from '../views_components/AddLinks.jsx';

export default function Links() {
  const [showLinks, setShowLinks] = useState(false);
  const [error, setError] = useState({ __html: '' });
  const [links, setLinks] = useState([]);
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');

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

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    try {
      const response = await axiosClient.post('/addlink', { code, description, instructor });
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

  // Sample data 
  const sampleLinks = [
    { id: 1, code: 'CS101', description: 'Introduction to Computer Science', instructor: 'John Sturgis' },
    { id: 2, code: 'MATH202', description: 'Advanced Mathematics', instructor: 'Sheldon Cooper' },
   
  ];

  return (
    <>
      <div className="w-full px-4 mx-auto pt-0">
        <div className="rounded-t bg-white h-10 px-6 pt-5 pb-12">
          <div className="flex justify-between">
            <h6 className="block uppercase tracking-wide text-green-700 text-base font-semibold">academic links</h6>
            <button
              onClick={() => setShowLinks(true)}
              className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold py-1 px-4"
            >
              Add Links
            </button>
          </div>
        </div>
        <hr className="border-gray-300" />
        <table className="table w-full table-striped text-gray-700 m-3 bg-white">
          <thead>
            <tr>
            <th className="text-left bg-gray-200 ">Code</th>
            <th className="text-left bg-gray-200 ">Description</th>
            <th className="text-left bg-gray-200 ">Instructor</th>
            <th className="text-left bg-gray-200 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render sampleLinks or fetched links */}
            {links.length > 0
              ? links.map((link) => (
                  <tr key={link.id}>
                    <td className="text-left">{link.code}</td>
                    <td className="text-left">{link.description}</td>
                    <td className="text-left">{link.instructor}</td>
                  </tr>
                ))
              : sampleLinks.map((link) => ( //Delete after connecting to database
                  <tr key={link.id}>
                    <td className="text-left">{link.code}</td>
                    <td className="text-left">{link.description}</td>
                    <td className="text-left">{link.instructor}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <AddLinks
        showLinks={showLinks}
        onClose={() => setShowLinks(false)}
        onSubmit={onSubmit}
        code={code}
        setCode={setCode}
        description={description}
        setDescription={setDescription}
        instructor={instructor}
        setInstructor={setInstructor}
      />
    </>
  );
}
