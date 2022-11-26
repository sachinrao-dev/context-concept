import React, { useContext } from 'react';
import './App.css';
import BooksContext from './context/Book';

function App() {
  const num = useContext(BooksContext);
  console.log(num, "number from context");
  return (
    <div className="App">
      <h1>{num}</h1>
    </div>
  );
}

export default App;
