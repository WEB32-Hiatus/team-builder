import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

const initialTeamMembers = [
  {firstName: 'James', lastName: 'Hook', email: 'jameshook@gmail.com', role: 'Captain'},
  {firstName: 'Peter', lastName: 'Pan', email: 'peterpan@gmail.com', role: 'Lost Boy Leader'}
]

function App() {

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState({firstName: '', lastName: '', email: '', role: ''})

  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value 
    setFormValues({
      ...formValues, 
      [inputThatChanged]: newValueForInput, 
    })
  }

  const onFormSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email, 
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newTeamMember])
  }

  return (
    <div className="App">
      <h1>Team Members:</h1>
      {teamMembers.map(item => <p key={item.id}>Name: {item.firstName} {item.lastName} Email: {item.email} Role: {item.role}</p>)}
    </div>
  );
}

export default App;
