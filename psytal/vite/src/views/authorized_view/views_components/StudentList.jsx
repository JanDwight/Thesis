import React, { Component } from 'react';
import edit from "@assets/icons8createpost.png";
import arhive from "@assets/delete.png"

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
      { id: 190132, name: 'Juan Garcia', yrsection: 'BsPsych 4A' },
      { id: 200167, name: 'Jan Dwight', yrsection: 'BsPsych 3B' },
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
              <tr key={index} className={index % 2 === 0 ? 'odd:bg-green-100' : ''}>
                <td className="text-left p-2">{student.id}</td>
                <td className="text-left p-2">{student.name}</td>
                <td className="text-left p-2">{student.yrsection}</td>
                <td className="text-left p-2">
                  <td>
                    <img src={edit} alt='edit' class='h-5 w-5' />
                  </td>
                  <td>
                    <img src={arhive} alt='archive' class='h-7 w-7'/>
                  </td>                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
