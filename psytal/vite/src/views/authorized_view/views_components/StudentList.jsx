import React, { Component } from 'react';
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditUsers from '../views_components/EditUsers.jsx'; //<-- Import EditUsers component
import ArchiveUsers from '../views_components/ArchiveUsers.jsx';
import axiosClient from '../../../axios.js';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Initialize with an empty array
      isArchiveUsersOpen: false, // Initially, the custom modal for archiving users is closed
      isEditUsersOpen: false, // Initially, the custom modal for editing users is closed
      selectedStudent: null, // Store the selected student for the modals
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () =>{
    //<><><> try function componentDidMount the use useEffect for axios
    axiosClient.get('/users')
    .then((response) => {
      const data = response.data;

      // Filter the data to only include role 4 (student)
      const filteredData = data.filter(user => [4].includes(user.role));

      // Define a mapping object to map numeric roles to strings
      const roleMapping = {
        1: 'Admin',
        2: 'Staff',
        3: 'Instructor',
        4: 'Student',
      };

      // Map the roles to strings
      const mappedData = filteredData.map(user => ({
        ...user,
        role: roleMapping[user.role] || 'Unknown', // Default to 'Unknown' if role is not found in mapping
      }));

      this.setState({ data: mappedData });
      //this.fetchData();

    })
    .catch((error) => {
      console.error('Error fetching data from the database:', error);
    });
  }

  //<><><> Open ArchiveUsers modal
  handleArchiveClick = (student) => {
    console.log('Archive Window Open');
    this.setState({
      selectedStudent: student,
      isArchiveUsersOpen: true,
    });
  };

  //<><><> Open EditUsers modal
  handleEditUsersClick = (student) => {
    console.log('Edit Window Open');
    this.setState({
      selectedStudent: student,
      isEditUsersOpen: true,
    });
  };

  //<><><> Close ArchiveUsers modal
  handleCloseArchiveUsers = () => {
    console.log('Archive User Closed');
    this.setState({
      isArchiveUsersOpen: false,
    });
  };

  //<><><> Close EditUsers modal
  handleCloseEditUsers = () => {
    console.log('Edit User Closed');
    this.setState({
      isEditUsersOpen: false,
    });
  };

  //<><><> Handle saving user changes from EditUsers modal
  handleSaveUserChanges = (updatedUser) => {
    // saving
    console.log('User Changes Saved:', updatedUser);
  };

  render() {
    const { data, selectedStudent } = this.state;
    const { filterText } = this.props;

    // Apply filtering for search bar
    const filteredData = data.filter(
      (student) =>
        student.id.toString().includes(filterText) || // Filter by ID
        student.name.toLowerCase().includes(filterText.toLowerCase()) 
        //filtering using roles is disabled because roles are int not string so they cannot be set to lowercase
    );

    return (
      <div>
       <table className="table w-full table-striped text-gray-700">
          <thead>
            <tr>
              <th className="text-left bg-gray-200 p-2">School ID</th>
              <th className="text-left bg-gray-200 p-2">Name</th>
              <th className="text-left bg-gray-200 p-2">Year & Section</th>
              <th className="text-left bg-gray-200 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index} className={index % 2 === 0 ? 'odd:bg-green-100' : ''}>
                <td className="text-left p-2">{student.id}</td>
                <td className="text-left p-2">{student.name}</td>
                <td className="text-left p-2">{student.yrsection}</td>
                <td className="text-left p-2">
                <div className="flex items-center">
                  <img
                    src={edit} 
                    alt='edit'
                    className='h-5 w-5 cursor-pointer' 
                    onClick={() => this.handleEditUsersClick(student)}
                  />
                  <img
                    src={archive} 
                    alt='archive'
                    className='h-7 w-7 cursor-pointer' 
                    onClick={() => this.handleArchiveClick(student)}
                  />
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.state.isArchiveUsersOpen && (
          <ArchiveUsers
            showModal={this.state.isArchiveUsersOpen}
            onClose={this.handleCloseArchiveUsers}
            user={selectedStudent} // Pass the selected student to EditUsers
            // Add other props/functions as needed for archiving
          />
        )} 
        {this.state.isEditUsersOpen && (
          <EditUsers
            showModal={this.state.isEditUsersOpen}
            onClose={this.handleCloseEditUsers}
            user={selectedStudent} // Pass the selected student to EditUsers
            onSave={this.handleSaveUserChanges} // Pass the save function
          />
        )}
        
      </div>
    );
  }
}

export default StudentList;
