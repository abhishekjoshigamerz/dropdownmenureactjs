import React, { useState } from 'react';
import './dropdown.css';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Dropdown');
  //when user hovers on drop down menu
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  //when user leaves drop down menu
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  //when user clicks on an option
  const clickOnOption = (id) => {
    setIsOpen(false);
    // Do something with the selected option
    
    setButtonText(id);
  };
  return (
    <>
    
    <div className="dropdown"  onMouseLeave={handleMouseLeave}>
    <h2>Dropdown Menu item</h2>
      <button onClick={() => setButtonText('Dropdown')} className='dropDownTitle' onMouseEnter={handleMouseEnter}>{buttonText}</button>
      {isOpen && (
        <ul className="dropdown-menu">
          
            {options.map((option) => (
               <li key={option} onClick={() => clickOnOption(option)} > {option} </li>  
            ))}
         
        </ul>
      )}
    </div>
    </>
  );
}

export default Dropdown;





