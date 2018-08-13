import React, { Component } from 'react';
import './App.css';


const employees = [
  {
    id: 1,
    first: 'Ezekiel',
    last: 'Elliot'
    
  },
  {
    id: 2,
    first: 'Dak',
    last: 'Prescott'
    
  },
  {
    id: 3,
    first: 'Zack',
    last: 'Martin'
    
  },
  {
    id: 4,
    first: 'Travis',
    last: 'Fredrick'
    
  },
  {
    id: 5,
    first: 'Jason',
    last: 'Garrett'
    
  },
  {
    id:6,
    first: 'Jerry',
    last: 'Jones'
  },
  {
    id:7,
    first: 'Jim',
    last: 'Jones'
  }
]

function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees,
      term: '',
      
    }
   
    this.searchHandler = this.searchHandler.bind(this);

  }
  searchHandler(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {term, employees} = this.state;
    return (
      <div className="App">
      <h1>Search</h1>
     
        <form>
          <input type="text" id="input" onChange={this.searchHandler} value={term} />
        </form>
        <h2>Dallas Cowboys Staff and Employees </h2>

         {employees.filter(searchingFor(term)).map(employee => 
          <div key={employee.id}>
            <h1>{employee.first}</h1>
            <h1>{employee.last}</h1><br></br>
          </div>
         )
        }
            
         
        </div>
        
      
    );
  }
}

export default App;