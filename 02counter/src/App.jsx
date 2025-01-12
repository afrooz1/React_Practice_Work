import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log('clicked add', counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      console.log('clicked remove', counter);
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai And React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue} disabled={counter === 0}>
        Remove Value: {counter}
      </button>
    </>
  );
}

export default App;
