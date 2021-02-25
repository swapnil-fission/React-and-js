import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from "./funcDemo";
import ClassDemo from "./ClassDemo";

function App() {
  return (
   <div className="App">
     <h1>We are using react application</h1>
     <Welcome name="Swapnil" />
     <p>Hello</p>
     <ClassDemo />
     
    </div>
  );
  // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Now it is working'));
}

export default App;
