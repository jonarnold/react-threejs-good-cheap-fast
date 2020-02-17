import React, { useState } from 'react';
import './App.css';
import GoodFastCheap from './components/GoodFastCheap';
import Controls from './components/Controls';

function App() {
  const [selection, setSelection] = useState(null);

  return (
    <div className="App">
      <GoodFastCheap selection={selection} />
      <Controls setSelection={setSelection} />
    </div>
  );
}

export default App;
