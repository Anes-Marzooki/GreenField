import React, { Component } from 'react';
import { teachers } from './teachers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: teachers,
    }

  }
  render() {
    return(
      <div>
        <ul>
          {
            this.state.teachers.map( teacher => {
              <li key={teacher.id}>
                <h2> {teacher.name} </h2>
                <h2> {teacher.category} </h2>
                <h3> {teacher.email} </h3>
              </li>
            })
          }
        </ul>
      </div>
      )
  }
}

export default App;
