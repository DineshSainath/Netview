import logo from './logo.svg';
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
          target: {tabId: activeTabId},
          //function: ()=>alert("React chrome extension alert")
          function: ()=>{
        
          const hostbutton = document.createElement('div');
hostbutton.innerHTML = 'Start New Room';

const status = document.createElement('div');
status.id = 'status-container';

const main_container = document.createElement('DIV');
main_container.id = "panel";
const start_container = document.createElement('DIV');
const roomlabel = document.createElement('DIV');
const input = document.createElement('INPUT');
const letspartytitle = document.createElement('DIV');
const nameinput = document.createElement('INPUT');
const joinbutton = document.createElement('DIV');
const closeBtn = document.createElement('div');

hostbutton.id = 'host-btn';
main_container.classList.add('main-container');
start_container.classList.add('start-container');

letspartytitle.id = 'lets-party-title';
letspartytitle.innerHTML = "Let's Party! 📺 ";

roomlabel.id = 'room-label';
input.id = 'room-id-input';
nameinput.id = 'name-id';
nameinput.placeholder = 'Enter display name';
input.placeholder = 'Enter room Code';
joinbutton.id = 'join-btn';
closeBtn.id = 'close-btn';

roomlabel.innerHTML = `OR`;
joinbutton.innerHTML = `Join`;
closeBtn.innerHTML = '❌';

start_container.appendChild(letspartytitle);
start_container.appendChild(hostbutton);
start_container.appendChild(roomlabel);
start_container.appendChild(input);
start_container.appendChild(joinbutton);
start_container.appendChild(status);

start_container.appendChild(nameinput);

main_container.appendChild(start_container);
main_container.appendChild(closeBtn);

document.querySelector('body').appendChild(main_container);
document.querySelector('body').style.width="80.5%";

function rem(){
  // const r = document.getElementById("panel");
  //   r.remove();
    main_container.remove();
}


        }
        }
      ) }
      else if(status == 1) {
        chrome.scripting.executeScript(
          {
            target: {tabId: activeTabId},
            //function: ()=>alert("React chrome extension alert")
            function: ()=>{ 
              const r = document.getElementById("panel");
              r.remove(); 
              document.querySelector('body').style.width="100%"; 
                }})

      }
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Send alert</button>
      <button onClick={toggleChange} id="toggle-btn">{toggle}</button>
    </div>
  );
}

export default App;
