import React, { useState, useEffect } from 'react';
import axiosClient from '../../../axios.js';

function ClassList() {
  const [data, setData] = useState([]); // State to store the data

  useEffect(() => {
    // Fetch data from the Laravel API endpoint
    axiosClient.get('/classes') // Replace with your actual API endpoint
      .then((response) => {
        // Set the retrieved data in the component state
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Description</th>
            <th>Year/Section</th> {/*try concat*/}
            <th>Instructor</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.course_code}</td>
              <td>{subject.course_title}</td>
              <td>{subject.class_year}</td> {/*try concat with section*/}
              <td>{subject.instructor_name}</td>
              {/* Add more table cells for other columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;