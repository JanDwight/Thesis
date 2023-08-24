import React, { Component } from 'react'

class DataTable2 extends Component {
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
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default function EmployeeList() {
  return (
    <div>
      *Insert Sample Table
      <DataTable2 />
    </div>
  )
}
