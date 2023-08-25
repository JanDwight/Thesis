import React, { Component } from 'react';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Fetch employee data from the database here
    // sample data
    const sampleData = [
      { name: 'John Doe', role: 'Staff' },
      { name: 'Jane Smith', role: 'Instructor' },
    ];

    this.setState({ data: sampleData }); // Update the state with fetched data
  }

  render() {
    const { data } = this.state;
    const { filterText } = this.props; // Receive filterText from parent component

    // Apply filtering
    const filteredData = data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.role.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <table className="table w-full table-striped text-gray-700">
          <thead>
            <tr>
              <th className="bg-gray-200 text-left p-2">Name</th>
              <th className="bg-gray-200 text-left p-2">Role</th>
              <th className="bg-gray-200 text-left p-2">Action</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee, index) => (
              <tr key={index} className={index % 2 === 0 ? 'odd:bg-green-100' : ''}>
                <td className="text-left p-2">{employee.name}</td>
                <td className="text-left p-2">{employee.role}</td>
                {/* Add more cells as needed */}
                <td className="text-left">{/* Add action buttons here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
