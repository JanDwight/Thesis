import React from 'react'
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios';
import ReactModal from 'react-modal';
import PreRegistrationFormView from '../views_components/Pre_Registration_Components/PreRegistrationFormView';

export default function PreRegistration() {
  const [loading, setLoading] = useState(true);
  const [isPreRegFormModalOpen, setIsPreRegFormModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

 
const handleRowClick = (items) => {
  setIsPreRegFormModalOpen(true);
  setSelectedData(items);
}

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get('/listpreregincoming')
      .then((res) => {
        setLoading(false);
        setData(res.data);  // Assuming res.data is an array
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-full h-[500px] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
      <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
        <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Pre-Registration</div>
        
      </div>

      <div>
      <table className="table w-full table-striped">
        <thead>
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Date of Submition</th>
            <th className="text-left p-2">Status</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
              <tr 
                onClick={() => handleRowClick(item)}
                key={index} 
                className={`${index % 2 === 0 ? 'bg-[#D0DDE1]' : 'bg-white'}`}
              >
              <td className="text-left p-2">
                <div className="m-2">{item.full_name}</div>
              </td>
              <td className="text-left p-2">
                <div className="m-2">{item.created_at}</div>
              </td>
              <td className="text-left p-2">
                <div className="bg-blue-600 w-fit py-3 px-3 rounded-xl">{item.pre_reg_status}</div>
              </td>
            </tr>
          ))}
        </tbody>
          
      </table>
        
      </div>
      
      {/* For the Pop ups */}
      <ReactModal
            isOpen={isPreRegFormModalOpen}
            onRequestClose={() => setIsPreRegFormModalOpen(false)}
            
            className="w-fit h-[98%] bg-[#FFFFFF] rounded-3xl shadow-2xl mt-[1%] mx-auto p-5 overflow-y-scroll"
        >
            <div>
                <PreRegistrationFormView 
                  closeModal={() => setIsPreRegFormModalOpen(false)}
                  prereg={selectedData}
                />
            </div>
        </ReactModal>
    </div>
  )
}

