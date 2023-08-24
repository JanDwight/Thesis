import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Initialize with an empty array
    };
  }

  componentDidMount() {
    // Fetch student data from the database here
    // sample data 
    const sampleData = [
      { id: 190132, name: 'John Doe', yrsection: 'BsPsych 4A' },
      { id: 200167, name: 'Jane Smith', yrsection: 'BsPsych 3B' },
    ];

    this.setState({ data: sampleData }); // Update the state with fetched data
  }

  render() {
    const { data } = this.state;
    const { filterText } = this.props;

    // Apply filtering 
    const filteredData = data.filter(
      (student) =>
        student.id.toString().includes(filterText) || // Filter by ID
        student.name.toLowerCase().includes(filterText.toLowerCase()) ||
        student.yrsection.toLowerCase().includes(filterText.toLowerCase())
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
              <tr key={index} className={index % 2 === 0 ? 'odd:bg-highlightGreen' : ''}>
                <td className="text-left">{student.id}</td>
                <td className="text-left">{student.name}</td>
                <td className="text-left">{student.yrsection}</td>
                <td className="text-left">{/* Add action buttons here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
