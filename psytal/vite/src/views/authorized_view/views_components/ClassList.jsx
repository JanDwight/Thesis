import React, { Component } from 'react';
import axiosClient from '../../../axios.js';

class ClassList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isArchiveClassesOpen: false, // not yet created
        isEditClassessOpen: false, // not yet created
        selectedClass: null, // not yet created
      };
  }

  componentDidMount() {
    // Fetch data from the Laravel API endpoint
    axiosClient.get('/classes') // Replace with your actual API endpoint
        .then((response) => {
          // Set the retrieved data in the component state
          this.setState({ data: response.data });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        }); // Empty dependency array to fetch data only once on component mount
  }

  //for search
  render() {
    const { data, selectedClass } = this.state;
    const { filterText } = this.props; // Receive filterText from parent component

    // Apply filtering for searchbar
    const filteredData = data.filter(
      (classes) =>
        classes.course_code.toString().includes(filterText) || // Filter by ID
        classes.course_title.toLowerCase().includes(filterText.toLowerCase()) ||
        classes.class_year.toLowerCase().includes(filterText.toLowerCase()) ||
        classes.instructor_name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <table className="table w-full table-striped text-gray-700">
          <thead>
            <tr>
              <th className="text-left bg-gray-200 p-2">Course Code</th>
              <th className="bg-gray-200 text-left p-2">Description</th>
              <th className="bg-gray-200 text-left p-2">Year/Section</th> {/*try concat*/}
              <th className="bg-gray-200 text-left p-2">Instructor</th>
              <th className="bg-gray-200 text-left p-2">Action</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((subject) => (
              <tr key={subject.id} className='bg-green-100'>
                <td className="text-left p-2">{subject.course_code}</td>
                <td className="text-left p-2">{subject.course_title}</td>
                <td className="text-left p-2">{subject.class_year}</td> {/*try concat with section*/}
                <td className="text-left p-2">{subject.instructor_name}</td>
                <td className="text-left p-2">Archive Delete</td>
                {/* Add more table cells for other columns */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassList;