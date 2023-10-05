import React, {useState} from 'react'

export const StudentUserInformationPopup = ({onCloseStudentUserInfo, displayData, onStudentUserInformationChange}) => {
    //calling the sample data
    const [student_userinformation, setStudentUserInformation] = useState(displayData);

    //changing the email
    const handleStudentUserInformationChange = (event) => {
        setStudentUserInformation(event.target.value);
      };

    //Bahalakana dito hahahha
    const handleSubmit = () => {
        onStudentUserInformationChange(student_userinformation);
        onClose();
      };
      
  return (
    <div className="flex-col mx-2 mb-2"> 
        <div className='text-lg font-serif'>
            <i>User Role : <strong> Student</strong></i>
        </div> <hr className="mt-2" />

        <form>
            <table className=" inline-table mt-5">
                <tbody>
                {/**Name */}
                <tr className='bg-gray-200'style={{border:1 }}>
                    <th className='px-5'>Name</th>
                    <td>
                        <input className="bg-transparent"
                            type="text"
                            name="name"
                            value={student_userinformation.name}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Full name"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**ID */}
                <tr>
                    <th className='px-5'>Student ID</th>
                    <td>
                        <input 
                            type="number"
                            name="student_id"
                            value={student_userinformation.student_id}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Student ID"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Year and Section */}
                <tr>
                    <th className='px-5'>Year and Section</th>
                    <td>
                        <input 
                            type="text"
                            name="yearsection"
                            value={student_userinformation.yearsection}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Year & Section"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Semester Enrolled */}
                <tr>
                    <th className='px-5'>Semester Enrolled</th>
                    <td>
                        <input 
                            type="text"
                            name="sem_enrolled"
                            value={student_userinformation.sem_enrolled}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Semester Enrolled"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Email */}
                <tr>
                    <th className='px-5'>Email</th>
                    <td>
                        <input 
                            type="email"
                            name="oldemail"
                            value={student_userinformation.email}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Email"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Conatct Number */}
                <tr>
                    <th className='px-5'>Contact Number</th>
                    <td>
                        <input 
                            type="number"
                            name="contact_num"
                            value={student_userinformation.contact_num}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Conatact Number"
                            maxLength={11}
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Date of Birth */}
                <tr>
                    <th className='px-5'>Date of Birth</th>
                    <td>
                        <input 
                            type="date"
                            name="date_of_birth"
                            value={student_userinformation.date_of_birth}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Date of Birth"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                {/**Adress */}
                <tr>
                    <th className='px-5'>Address</th>
                    <td>
                        <input 
                            type="text"
                            name="adress"
                            value={student_userinformation.address}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Address"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                </tbody> 
            </table>

        <div className='text-md font-serif py-3'>
            <i> EMERGENCY CONTACTS :</i>
            <table className='mt-3'>
                <tbody>
                {/**Name of emergency Contact */}
                <tr>
                    <th className='px-5'>Name:</th>
                    <td>
                        <input 
                            type="text"
                            name="emergency_contact_name"
                            value={student_userinformation.emergency_contact_name}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Name"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>

                <tr>
                    <th className='px-5'>Contact Number:</th>
                    <td>
                        <input 
                            type="number"
                            name="emergency_contact)_num"
                            value={student_userinformation.emergency_contact_num}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Contact Number"
                            maxLength={11}
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>

                <tr>
                    <th className='px-5'>Address:</th>
                    <td>
                        <input 
                            type="text"
                            name="emergency_contact_address"
                            value={student_userinformation.emergency_contact_address}
                            onChange={handleStudentUserInformationChange}
                            placeholder="Address"
                            style={{
                                fontSize: 16,
                                }}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        
    </form>
        <div className='mt-5 flex felx-row-2 justify-center'>
            <button 
                onClick={handleSubmit} 
                className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-xl">
                Confirm
            </button>
            <button onClick={onCloseStudentUserInfo} className="bg-[#E2202C] hover:bg-[#E2202C] text-white font-bold py-2 px-4 rounded-xl">
                Cancel
            </button>                    
        </div>

    </div>
  )
}
