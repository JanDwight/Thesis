import React, {useState} from 'react'

export const InstructorEditEmail = ({onCloseInstructorEditEmail, displayData, onInstructorEmailChange}) => {
    const [instructor_email, setInstructorEmail]= useState(displayData);

    const handleInstructorEmailChange = (event) => {
        setInstructorEmail(event.target.value);
    }

    const handleSubmit = () => {
        onInstructorEmailChange(instructor_email);
        onClose();
      };
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full rounded-t-lg px-4 py-5 bg-white border-0 mt-3">
        <form>
            <div className="flex flex-wrap flex-col mx-2 mb-2">
                <label className="text-lg font-franklin">Email:</label>
                <input className="appearance-none block bg-gray-300 rounded-md w-full py-1.5 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    type="email"
                    name="oldemail"
                    value={instructor_email.email}
                    readOnly
                    placeholder="Old Email"
                    style={{
                        border: "none",
                        outline: "none",
                        fontSize: 16,
                        }}
                />
                        
                <label className="mt-3 text-lg font-franklin">New Email</label>
                <input className="appearance-none block bg-gray-300 rounded-md w-full py-1.5 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    type="email"
                    name="newemail"
                    value={instructor_email.newemail}
                    onChange={handleInstructorEmailChange}
                    placeholder="New Email"
                    style={{
                        border: "none",
                        outline: "none",
                        fontSize: 16,
                        }}
                />
            </div>

            <div className='mt-5 flex felx-row-2 justify-center'>
                <button onClick={handleSubmit} 
                    className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-xl">
                    Confirm
                </button>
                <button onClick={onCloseInstructorEditEmail} 
                    className="bg-[#E2202C] hover:bg-[#E2202C] text-white font-bold py-2 px-4 rounded-xl">
                    Cancel
                </button>  
            </div>
        </form>
    </div>
  )
}
