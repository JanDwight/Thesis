import React, { Component } from 'react';

class DataTable1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        
        <table>
          <thead>
            <tr>
              <th>School ID</th>
              <th>Name</th>
              <th>Year & Section</th>
              <th>Action</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{school.id}</td>
                <td>{student.name}</td>
                <td>{student.yrsection}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default function StudentList() {
  return (
    <div>
      *Insert Sample Table
      <DataTable1 />
    </div>
  );
}
