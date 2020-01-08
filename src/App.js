import React, { Component } from 'react';
import { teachers } from './teachers.js';


//returns a boolean output (if query matche name OR do nothing if no query)
function searchFilter( query ) {
  return function( a ) {
    return a.name.toLowerCase().includes( query.toLowerCase() ) || !query; 
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      teachers: teachers
    }
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    this.setState({searchQuery: event.target.value})
  }

  render() {
    // destructring
    const { teachers, searchQuery } = this.state;
    return(
      <div className='tc'>
        <form>
                {/*changes the state searchQuery*/}
          <input type="text" onChange={this.inputHandler} value={searchQuery}/>
        </form>
        <ul>
          {
            teachers.filter(searchFilter(searchQuery)).map( teacher =>
              <li key={teacher.id}>
                <h2 className='bg-red'> {teacher.name} </h2>
                <h2> {teacher.category} </h2>
                <h3> {teacher.email} </h3>
              </li>
            )
          }
        </ul>
      </div>
      )
  }
}

export default App;
