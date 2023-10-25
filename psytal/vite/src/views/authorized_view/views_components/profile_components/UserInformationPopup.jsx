import React, {useState} from 'react'

export const UserInformationPopup = ({onCloseUserInfo, data, onUserInformationChange}) => {
    //calling the sample data
    const [userinformation, setUserInformation] = useState(data);

    //changing the email
    const handleUserInformationChange = (event) => {
        setUserInformation(event.target.value);
      };

    //Bahalakana dito hahahha
    const handleSubmit = () => {
        onUserInformationChange(email);
        onClose();
      };

  return (
    <div className="flex-col mx-2 mb-2"> 
        <div className='text-lg font-serif'>
            <i>User Informatiom -<strong> Admin</strong></i>
        </div> <hr className="mt-2" />

        <div className=' flex flex-col  items-center justify-center'>
            <table className="items-center mt-5" style={{border:1}}>
                <tr className='bg-gray-200 '>
                    <th className='px-5'>Name</th>
                    <td>
                        <input className="bg-gray-200 "
                            type="text"
                            name="name"
                            value={userinformation.displayname}
                            onChange={handleUserInformationChange}
                            placeholder="Full name"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                <tr>
                    <th className='px-5'>Email</th>
                    <td>
                        <input 
                            type="email"
                            name="oldemail"
                            value={userinformation.email}
                            onChange={handleUserInformationChange}
                            placeholder="Email"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                <tr className='bg-gray-200 '>
                    <th className='px-5'>Position</th>
                    <td>
                        <input className="bg-gray-200 "
                        type='text'
                        name="position"
                        value={userinformation.position}
                        onChange={handleUserInformationChange}
                        placeholder='Position'
                        style={{
                            fontSize: 16,
                            }}
                        />
                    </td>
                </tr>
            </table>
            </div>

        <div className='mt-5 flex felx-row-2 justify-center'>
            <button onClick={handleSubmit} 
                className="bg-[#0FE810] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-xl">
                Confirm
            </button>
            <button onClick={onCloseUserInfo} className="bg-[#f34450] hover:bg-red-700 text-white font-bold py-2 px-4 ml-3 rounded-xl">
                Cancel
            </button>                    
        </div>

    </div>
  )
}
