import React, { Component } from 'react';
import { teachers } from './teachers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: teachers,
      searchQuery: ''
    }

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    this.setState({searchQuery: event.target.value})
  }
  render() {
    return(
      <div className='tc'>
        <form>
          <input type="text" onChange={this.inputHandler} />
        </form>
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
