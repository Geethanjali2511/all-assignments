import { useState } from 'react'
import React from 'react';
//import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//const axios = require('axios');


function App() {
  const [todos, setTodos] = React.useState({
    title:"Go to gym",
    description:"test",
    id:1
  });
    // fetch all todos from server
    React.useEffect(() =>{
      fetch("http://localhost:3000/todos/", {
        method:"GET"
      }).then((response)=>{
        response.json().then((data)=>{
          console.log(data);
        })
      });
 },[] );

  return (
    
      <div>
        {todos.title}
        <br/>
        {todos.description}
        <br/>
      </div>
  
  )
}

export default App
