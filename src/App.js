import React, { useState } from 'react';
import './App.css';
import Person from './components/Person'
import Example from './components/Example'
function App() {
  const [persons, setPersons] = useState([
    { name: 'duc', age: 122 },
    { name: 'duc12', age: 123 },
  ])
  const changeNameHandler = (e) => {
    console.log(e)
    setPersons([
      { name: 'duc new', age: 2 },
      { name: 'duc12 new', age: 1 },
    ])
  }
  const switchNameHandler = (e) => {
    setPersons([
      { name: e.target.value, age: 2 },
      { name: 'duc12 new', age: 1 },
    ])
  }
  const list = [1, 2, 3, 4, 5]

  return (
    <>
      <div className="App">
        Reactjs App
        <button onClick={(e) => changeNameHandler(e)}>Change name</button>
        <Person changed={switchNameHandler} click={changeNameHandler} name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age} />
        <Person name='duc2' age='13' >
          chirden persion
        </Person>
        <Example />

        điều kiện render
        {true ? <div>aaaa test</div> : null}

        list map
        {
          list.map((item,index) => {
            return (
              <p key={item}>{item}</p>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
