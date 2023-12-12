import React, { useState, useEffect } from 'react'
import axiosClient from '../../../../axios';

export default function EmailDomainModal() {
    const [error, setError] = useState({__html: ""});

    const [emailDomain, setEmailDomain] = useState('');
    const [emailDomainList, setEmailDomainList] = useState([]);

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

        <div className='pt-2'>
            <table className="table w-full table-striped">
                <tbody>
                    {emailDomainList.map((item, index) => (
                        <tr 
                            onClick={() => handleRowClick(item)}
                            key={index} 
                            className={`${index % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}
                        >
                            <td className="text-left p-2">
                                <div className="m-2">{item.email_domains}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

                {/**===========SUMBIT Button============= */}
                <div className="text-center items-center my-8">
                    <button 
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
    </>
  )
}
