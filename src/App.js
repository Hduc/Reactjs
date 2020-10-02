import React,{useState} from 'react';
import './App.css';
import Person from './components/Person'
import Example from './components/Example'
function App() {
  const [persons,setPersons] = useState([
    {name:'duc',age:122},
    {name:'duc12',age:123},
  ])
  const changeNameHandler = (e) =>{
    console.log(e)
    setPersons([
      {name:'duc new',age:2},
      {name:'duc12 new',age:1},
    ])
  }
  return (
    <>
      <div className="App">
        Reactjs App
        <button onClick={(e) => changeNameHandler(e)}>Change name</button>
        <Person name={persons[0].name} age = {persons[0].age}/>
        <Person name={persons[1].name} age = {persons[1].age}/>
        <Person name='duc2' age='13' >
          chirden persion
        </Person>
        <Example />
      </div>
    </>
  ); 
}

export default App;
