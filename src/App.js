import React from 'react';
import Dropdown from './dropdown/dropdown';


function App() {
  const options = ['Option1','Option2','Option3'];
  console.log(options);
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
