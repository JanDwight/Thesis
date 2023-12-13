import React, { useState } from 'react';
import axiosClient from '../../../../axios';

export default function EditEmailDomain({ closeModal, selectedEmailDomain }) {
    const [error, setError] = useState({__html: ""});

    const [emailDomain, setEmailDomain] = useState(
        selectedEmailDomain && selectedEmailDomain.email_domains ? selectedEmailDomain.email_domains : ''
    );

    const emailDomainId = selectedEmailDomain && selectedEmailDomain.id ? selectedEmailDomain.id : ''

    //update Email Domains
    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
        
        axiosClient
        .put(`/updateemaildomain/${emailDomainId}`, {
            email_domains: (emailDomain)
        })
        .then(({ data }) => {
            console.log(data)
        })
    }

    return (
        <>
            <div className='flex justify-center'>
                <form onSubmit={onSubmit}>
                    <input 
                        id="emailDomain"
                        type="text" 
                        placeholder={emailDomain}
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
        </>
    );
}
