import './ToggleText.css'
import { useState } from 'react';
function Toggle(){

  const[display, setDisplay] = useState(true);

  return(
    <div  className='toggle-container'>
      <h1>Hide and show text</h1>

      {
        display &&  <p id="text">I love coding in react js</p>
      }

   
      <button id='toggle' onClick={() =>{
        setDisplay(!display)
      }}>

       {display ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default Toggle