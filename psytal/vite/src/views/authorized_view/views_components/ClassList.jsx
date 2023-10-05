import React, { Component } from 'react';
import edit from "@assets/icons8createpost.png";
import archive from "@assets/delete.png"
import EditClasses from '../views_components/EditClasses.jsx';
import ArchiveClasses from '../views_components/ArchiveClasses.jsx';
import axiosClient from '../../../axios.js';

class ClassList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isArchiveClassesOpen: false,
        isEditClassesOpen: false,
        selectedClass: null,
      };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () =>{

    // Fetch data from the Laravel API endpoint
    axiosClient.get('/classes') // Replace with your actual API endpoint
        .then((response) => {
          // Set the retrieved data in the component state
          this.setState({ data: response.data });
          //this.fetchData(); this line will update the page real-time but will start in infinite loop of fetch
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        }); // Empty dependency array to fetch data only once on component mount

  }

  //<><><> Open ArchiveClasses modal
  handleArchiveClick = (subject) => {
    console.log('Archive Window Open');
    this.setState({
      selectedClass: subject,
      isArchiveClassesOpen: true,
    });
  };

   //<><><> Close ArchiveClasses modal
   handleCloseArchiveClasses = () => {
    this.setState({
      isArchiveClassesOpen: false,
    });
  };

  //<><><> Open EditClasses modal
  handleEditClassesClick = (subject) => {
    console.log('Edit Window Open');
    this.setState({
      selectedClass: subject,
      isEditClassesOpen: true,
      
    });
  };

//<><><> Close EditClasses modal
handleCloseEditClasses = () => {
  this.setState({
    isEditClassesOpen: false,
  });
};

handleSaveClassChanges = () => {
  // saving
  this.setState({
    isEditClassesOpen: false,
  });
  console.log('Class Changes Saved:');
};

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
              <th className="bg-gray-200 text-left p-2">Year/Section</th> 
              <th className="bg-gray-200 text-left p-2">Instructor</th>
              <th className="bg-gray-200 text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>{filteredData.map((subject, index) => (
              <tr key={index} className='odd:bg-green-100'>
                <td className="text-left p-2">{subject.course_code}</td>
                <td className="text-left p-2">{subject.course_title}</td>
                <td className="text-left p-2">{subject.class_year}</td> 
                <td className="text-left p-2">{subject.instructor_name}</td>
                <td className="text-left p-2">
                  <div className="flex items-center">
                    <img
                      src={edit}
                      alt='edit'
                      className='h-5 w-5 cursor-pointer'
                      onClick={() => this.handleEditClassesClick(subject)}/>
                    <img
                      src={archive} 
                      alt='archive'
                      className='h-7 w-7 cursor-pointer' 
                      onClick={() => this.handleArchiveClick(subject)}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.isArchiveClassesOpen && (
          <ArchiveClasses
            showModal={this.state.isArchiveClassesOpen}
            onClose={this.handleCloseArchiveClasses}
            subject={selectedClass} // Pass the selected subject to EditClasses
            // Add other props/functions as needed for archiving
          />
        )}
        {this.state.isEditClassesOpen && (
          <EditClasses
            showModal={this.state.isEditClassesOpen}
            onClose={this.handleCloseEditClasses}
            subject={selectedClass} 
            onSave={this.handleSaveClassChanges}
          />
        )}
      </div>
    );
  }
}

export default ClassList;