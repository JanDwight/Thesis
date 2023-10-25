import React, {useEffect, useState} from 'react'
import avatar from "@assets/icons8avatar.png";
import edit from "@assets/icons8createpost.png";
import ReactModal from 'react-modal';
import { StudentEditEmail } from './StudentEditEmail';
import { StudentEditPassword } from './StudentEditPassword';
import { StudentUserInformationPopup } from './StudentUserInformationPopup';
import axiosClient from '../../../../axios';
import { UserInformationPopup } from './UserInformationPopup';
import { EditEmail } from './EditEmail';
import { EditPassword } from './EditPassword';
import { EditDisplayName } from './EditDisplayName';

export default function UserProfile({closeModal}) {
    // Use functional update for the state to prevent re-renders
    const [data, setData] = useState(() => null);
    // Ensure data.role is an integer
    const roleInt = data ? parseInt(data.role, 10) : 0; 

  useEffect(() => {
    axiosClient.get('/getuserdetails')
    .then((res) => {
      // Use functional update to prevent re-renders caused by unchanged state
      setData(res.data);
    });
  }, []);
    
    //CALLING EditDisplayName
    const [isEditDisplayName, setIsEditDisplayName] = useState(false);
    //CALLING EditPassword
    const [isEditPasswordOpen, setIsEditPasswordOpen] = useState(false);
    //CALLING EditPEmail
    const [isEditEmailOpen, setIsEditEmailOpen] = useState(false);
    //CALLING UserInformation
    const [isUserInformationOpen, setIsUserInformationOpen] = useState(false);
    //Password can be seen/not
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    
  return (
    <>
    <div>
      <form action="">
        <div className='flex flex-row-3 w-full'>
            <img className="object-cover w-20 h-20 mx-2 rounded-full" src={avatar} alt="avatar"/>
            <div className="flex flex-row justify-between mx-2 mb-2">
                <input
                    className="block w-full rounded-md py-1.5 text-gray-700 bg-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" 
                    type="text"
                    name="displayname"
                    value={data && data.name ? data.name : 'Nothing to Show'}
                    //onChange={handleProfile}
                    readOnly
                    placeholder="displayname"
                    style={{
                        border: "none",
                        fontWeight: "bold",
                        margin: 4,
                        fontSize: 40,
                        color: '#1f2937'
                    }}
                />                    
                <div className='mt-10 p-2 bg-gray-200'>
                        <img onClick={()=>setIsEditDisplayName(true)}
                            src={edit} 
                            alt='edit'
                            className='h-5 w-5 cursor-pointer' 
                        /> 
                    </div>
            </div> 
            
            <div className="flex flex-col justify-between mx-2 mb-2">
                {roleInt > 3 && (
                    <label onClick={()=> setIsUserInformationOpen (true)}
                        className='cursor-pointer mx-3 px-2 py-1 bg-green-500 hover:bg-green-700 rounded-md'>User Information
                    </label>
                )}
                
            </div>                        
        </div>

        <div className="flex flex-wrap flex-col px-3 mx-16 mt-5 mb-2">
            
            <div className="w-full px-3 md:mb-0 mt-2">
                <label className=" text-gray-700 text-lg font-bold mb-2  p-2 rounded-md ">Account Information: </label> 
            </div>
            
            <div className='mx-10 mt-2'>
                <label className=" text-gray-700 text-md font-bold px-2 mb-2">Email: </label>
            </div>
            <div className='flex flex-row mx-16 mt-2'>
                <input
                    className="appearance-none block bg-gray-300 rounded-md w-full py-1.5 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    type="email"
                    name="email"
                    value={data && data.email ? data.email : 'Nothing to Show'}
                    readOnly
                    //onChange={handleProfile}
                    placeholder="Email"
                    style={{
                    border: 1,
                    outline: "none",
                    fontSize: 16,
                    }}
                />
                <div className='p-2 bg-gray-200 rounded-md mx-2'>
                    <img onClick={()=> setIsEditEmailOpen(true)}
                        src={edit} // Replace 'editImage' with the path to your edit image
                        alt='edit'
                        className='h-6 w-6 cursor-pointer' // Add 'cursor-pointer' to make it look clickable
                    />
                </div>
            </div>

            <div className='mx-10 mt-2'>
                <label className=" text-gray-700 text-md font-bold px-2 mb-2">Password: </label>
            </div>
            <div className='flex flex-row mx-16 mt-2'>
                <input
                    className="appearance-none block bg-gray-300 rounded-md w-full py-1.5 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    type={isVisible ? "text" : "password"}
                    name="password"
                    value={'contextPass'} //not yet Working(Temporary)
                    autoComplete='test'
                    readOnly
                    //onChange={handleProfile}
                    placeholder="Password"
                    style={{
                    border: 1,
                    outline: "none",
                    fontSize: 16,
                    }}
                />
                <div className='p-2 bg-gray-200 rounded-md mx-2'>
                    <img onClick={()=> setIsEditPasswordOpen(true)}
                        src={edit} // Replace 'editImage' with the path to your edit image
                        alt='edit'
                        className='h-6 w-6 cursor-pointer' // Add 'cursor-pointer' to make it look clickable
                    />
                </div>
            </div>
            <div>
                <label onClick={toggleVisibility} className=' text-blue-400 text-sm px-2 mb-2'>
                    {isVisible ? "Hide Password" : "Show Password"}
                </label>
            </div>
        </div>       

        <div className='mt-5 grid grid-row-2 justify-center'>
            <button onClick={closeModal} className="bg-[#f34450] hover:bg-red-700 rounded-2xl mt-3 px-5 text-white font-size">
                Close
            </button>
        </div>
      </form>
    </div>

    {/**Setting the Edit Display Name */}
    <ReactModal
            isOpen={isEditDisplayName}
            onRequestClose={()=> setIsEditDisplayName(false)}
            className="w-full lg:w-[30%] h-fit bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5">
                <div>
                    <EditDisplayName 
                        onCloseEditDisplayname={()=> setIsEditDisplayName(false)} data={data} />
                </div>
        </ReactModal>

    {/**Setting the Edit Email*/}
    <ReactModal
    isOpen={isEditEmailOpen}
    onRequestClose={() => setIsEditEmailOpen(false)}
    className="w-full lg:w-[30%] h-fit bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
    >
        <div>
            <EditEmail 
                onCloseEditEmail={()=> setIsEditEmailOpen (false)}
                data={data}/>
        </div>
    </ReactModal>

    {/**Setting the Edit Password*/}   
    <ReactModal
    isOpen={isEditPasswordOpen}
    onRequestClose={() => setIsEditPasswordOpen(false)}
    className="w-full lg:w-[30%] h-fit bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
    >
        <div><EditPassword  onCloseEditPassword={()=> setIsEditPasswordOpen (false)} data={data}/></div>
    </ReactModal>

    {/**Setting the User Information*/} 
    <ReactModal
    isOpen={isUserInformationOpen}
    onRequestClose={()=> setIsUserInformationOpen(false)}
    className="w-full lg:w-[30%] h-fit bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
    >
        <div><UserInformationPopup  onCloseUserInfo={()=> setIsUserInformationOpen (false)} data={data}/></div>
    </ReactModal>

    </>
  )
}
