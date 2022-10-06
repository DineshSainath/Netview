import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState("ON");
  var status = 1;

  function toggleChange(){
    if(toggle == "ON"){
      setToggle("OFF");
      status = 0;
    }
    else {
      setToggle("ON");
      status = 1;
    }
    sidePanel();
  }


  function test(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          //function: ()=>alert("React chrome extension alert")
          function: ()=>{alert("Hello Sunni")}
        }
      )
    })
  }

  function sidePanel(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;

      if(status == 0){

      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId}, files: ['content.js']
          //function: ()=>alert("React chrome extension alert")
        }
      ) }
      else if(status == 1) {  
        chrome.scripting.executeScript(
          {
            target: {tabId: activeTabId}, files:['content2.js'], 
      }
    )}})
  }

  return (
    <div className="App">
      <button onClick={test}>Send alert</button>
      <button onClick={toggleChange} id="toggle-btn">{toggle}</button>
    </div>
  );
}

export default App;
