import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import "./CourseList.css";

class CourseList extends Component {

  constructor(props) {
    super(props);
    this.state = {courses: [], isLoading: true};
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/courses')
      .then(response => response.json())
      .then(data => this.setState({courses: data, isLoading: false}));
  }

  render() {
    const {courses, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const courseList = courses.map(course => {
      const courseDeats = ``;
      return <tr key={course.id}>
        <td style={{whiteSpace: 'nowrap'}}>{course.name}</td>
        <td>{courseDeats}</td>
      </tr>
    });

    return (
      <div>
        <Container fluid>
          <Table className="mt-4">
            <tbody>
            {courseList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CourseList;