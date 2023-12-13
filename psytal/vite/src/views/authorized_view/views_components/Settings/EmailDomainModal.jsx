import React, { useState, useEffect } from 'react'
import axiosClient from '../../../../axios';
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import ReactModal from 'react-modal';
import EditEmailDomain from './EditEmailDomain';

export default function EmailDomainModal({closeModal}) {
    const [error, setError] = useState({__html: ""});

    const [emailDomain, setEmailDomain] = useState('');
    const [emailDomainList, setEmailDomainList] = useState([]);

    const [showEditEmailDomainModal, setShowEditEmailDomainModal] = useState(false);
    const [selectedEmailDomain, setSelectedEmailDomain] = useState('');

    //For fetching the list of the saved Email Domain from the Database
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosClient.get('/emaildomainindex');
            setEmailDomainList(response.data[0]);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);    

    //For saving the Email Domain to the data base
    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
        
        axiosClient
        .post('/addemaildomains', {
            email_domains: (emailDomain)
        })
        .then(({ data }) => {
          setSuccessMessage({
            data,
          });
        })
    }

    //For Updating Email Domains
    const handleEditClick = (item) => {
        setShowEditEmailDomainModal(true);
        setSelectedEmailDomain(item);
    };

    //For Archiving Email Domain
    const onSubmitarchivelink = (item) => {
        
    };

  return (
    <>
        <div>
            <form onSubmit={onSubmit}>
                <label className='pr-2'>
                    Email Domain: 
                </label>

                <input 
                    id="emailDomain"
                    type="text" 
                    placeholder="@example.com"
                    value={emailDomain}
                    onChange={ev => setEmailDomain(ev.target.value)}
                />

                {/**===========SUMBIT Button============= */}
                <div className="text-center items-center my-8">
                    <button 
                        type='button'
                        onClick={closeModal}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                          Cancel
                    </button>
                    <button 
                        type="submit"
                        className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                          Submit
                    </button>
                </div>  
            </form>
        </div>

        <div className='pt-2'>
            <table className="table w-full table-striped">
                <tbody>
                    {emailDomainList.map((item, index) => (
                        <tr 
                            key={index} 
                            className={`${index % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}
                        >
                            <td className="text-left p-2">
                                <div className="m-2">{item.email_domains}</div>
                            </td>

                            <td className= "flex items-center p-2">
                              <button onClick={() => handleEditClick(item)}>
                                <img src={edit} alt='edit' className='h-5 w-5 cursor-pointer transform transition-transform hover:scale-125'/>
                              </button>
                              <button onClick={() => onSubmitarchivelink(true, index)}>
                                <img src={archive} alt='archive' className='h-7 w-7 cursor-pointer transform transition-transform hover:scale-125'/>
                              </button>      
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <ReactModal
            isOpen={showEditEmailDomainModal}
            onRequestClose={() => setShowEditEmailDomainModal(false)}
            className="w-full md:w-[30%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
        >
            <div>
                <EditEmailDomain
                    closeModal={() => setShowEditEmailDomainModal(false)}
                    selectedEmailDomain={selectedEmailDomain}
                />
            </div>
        </ReactModal>
    </>
  )
}
