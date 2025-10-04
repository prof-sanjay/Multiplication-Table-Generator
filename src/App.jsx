import React, { useState } from "react";
import './index.css'; 

function App() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number); 
    

    if (isNaN(num)) {
      alert("Please enter a valid number");
      return;
    }
    
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(`${num} x ${i} = ${num * i}`);
    }
    
    setTable(result);
  };

  return (
    <div className="container">
      <h2>Multiplication Table Generator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        className="number-input"
      />
      <button onClick={generateTable} className="generate-button">
        Generate
      </button>

      <div className="table-container">
        {table.length > 0 && (
          <ul className="table-list">
            {table.map((item, index) => (
              <li key={index} className="table-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;