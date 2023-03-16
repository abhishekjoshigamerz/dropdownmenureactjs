import React from 'react';
import Dropdown from './dropdown/dropdown';


function App() {
  //array of options which will be shown in dropdown
  const options = ['Option1','Option2','Option3'];
  
  return (
    <div className="App">
      
      <Dropdown options={options} />
    </div>
  );
}

export default App;
