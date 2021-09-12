import React from 'react';

const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

  let chosenPerson = '';

function Users(props) {
    return <h1 key={props.index}>{props.name}</h1>
}

export function SearchForm() {
    return (
        <React.Fragment>
            <div>
               {people.filter(person => person.name.toLowerCase().indexOf(chosenPerson.toLowerCase()) > -1).map((person, index) => (
                  <Users key={index} name={person.name}></Users>
                )
               )} 
            </div>
        </React.Fragment>
    )
}
