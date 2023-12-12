import React, { useState } from 'react'
import axiosClient from '../../../../axios';

export default function EmailDomainModal() {
    const [error, setError] = useState({__html: ""});

    const [emailDomain, setEmailDomain] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
        
        axiosClient
        .post('/addemaildomains', {
            email_domains: (emailDomain)
        })
        .then(({ data }) => {
          setSuccessMessage({
            message: 'Email Domain Added Successfuly',
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
