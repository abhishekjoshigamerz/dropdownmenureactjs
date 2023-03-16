import React, { useState } from 'react';
import './dropdown.css';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Dropdown');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const clickOnOption = (id) => {
    setIsOpen(false);
    // Do something with the selected option
    
    setButtonText(id);
  };
  return (
    <>
    
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <h2>Dropdown Menu item</h2>
      <button onClick={() => setButtonText('Dropdown')} className='dropDownTitle'>{buttonText}</button>
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





