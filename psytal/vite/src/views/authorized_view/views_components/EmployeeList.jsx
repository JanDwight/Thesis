import React, { Component } from 'react';
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditUsers from '../views_components/EditUsers.jsx';
import ArchiveUsers from '../views_components/ArchiveUsers.jsx';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isArchiveUsersOpen: false, // the custom modal for archiving users is closed
      isEditUsersOpen: false, // the custom modal for editing users is closed
      selectedEmployee: null, // store the selected employee for the modals
    };
  }

  componentDidMount() {
    // Fetch employee data from the database here
    // sample data
    const sampleData = [
      { id: 1803580, name: 'John Doe', role: 'Admin' },
      { id: 2159381, name: 'Sam Wilson', role: 'Instructor' },
      { id: 9423492, name: 'John Smith', role: 'Staff' },
      
    ];

    this.setState({ data: sampleData }); // Update the state with fetched data
  }

  //<><><> Open ArchiveUsers modal
  handleArchiveClick = (employee) => {
    console.log('Archive Window Open');
    this.setState({
      selectedEmployee: employee,
      isArchiveUsersOpen: true,
    });
  };

  //<><><> Close ArchiveUsers modal
  handleCloseArchiveUsers = () => {
    console.log('Archive Cancel Pressed');
    this.setState({
      isArchiveUsersOpen: false,
    });
  };

  //<><><> Open EditUsers modal
  handleEditUsersClick = (employee) => {
    console.log('Edit Window Open');
    this.setState({
      selectedEmployee: employee,
      isEditUsersOpen: true,
    });
  };

  //<><><> Close EditUsers modal
  handleCloseEditUsers = () => {
    console.log('Edit Cancel Pressed');
    this.setState({
      isEditUsersOpen: false,
    });
  };

  //<><><> Handle saving user changes from EditUsers modal
  handleSaveUserChanges = (updatedUser) => {
    // Handle saving the changes to the user data
    console.log('User Changes Saved:', updatedUser);
    // You can update your data or perform other actions here
    // Close the EditUsers modal
    this.handleCloseEditUsers();
  };

  render() {
    const { data, selectedEmployee } = this.state;
    const { filterText } = this.props; // Receive filterText from parent component

    // Apply filtering
    const filteredData = data.filter(
      (employee) =>
        employee.id.toString().includes(filterText) || // Filter by ID
        employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.role.toLowerCase().includes(filterText.toLowerCase())
    );


  

    return (
      <>
      <div>
        <table className="table w-full table-striped text-gray-700">
          <thead>
            <tr>
              <th className="text-left bg-gray-200 p-2">School ID</th>
              <th className="bg-gray-200 text-left p-2">Name</th>
              <th className="bg-gray-200 text-left p-2">Role</th>
              <th className="bg-gray-200 text-left p-2">Action</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee, index) => (
              <tr key={index} className={index % 2 === 0 ? 'odd:bg-green-100' : ''}>
                <td className="text-left p-2">{employee.id}</td>
                <td className="text-left p-2">{employee.name}</td>
                <td className="text-left p-2">{employee.role}</td>
                {/* Add more cells as needed */}
                <td className="text-left p-2">
                <div className="flex items-center">
                  <img
                    src={edit} // Replace 'editImage' with the path to your edit image
                    alt='edit'
                    className='h-5 w-5 cursor-pointer' // Add 'cursor-pointer' to make it look clickable
                    onClick={() => this.handleEditUsersClick(employee)}
                  />
                  <img
                    src={archive} // Replace 'archiveImage' with the path to your archive image
                    alt='archive'
                    className='h-7 w-7 cursor-pointer' // Add 'cursor-pointer' to make it look clickable
                    onClick={() => this.handleArchiveClick(employee)}
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
            // Add other props/functions as needed for archiving
          />
        )}

        {this.state.isEditUsersOpen && (
          <EditUsers
            showModal={this.state.isEditUsersOpen}
            onClose={this.handleCloseEditUsers}
            user={selectedEmployee} // Pass the selected employee to EditUsers
            onSave={this.handleSaveUserChanges} // Pass the save function
          />
        )}

      </div>
      </>
    );
  }
}

export default EmployeeList;
