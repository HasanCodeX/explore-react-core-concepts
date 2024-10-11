import { useState } from 'react';
import reactLogo from './assets/react.svg'; // Assuming logo is correct
import viteLogo from '/vite.svg'; // Assuming this path is correct
import './App.css';
import Countre from './Counter'; // Ensure this matches your actual filename
import Team from './Team'; // Ensure this matches your actual filename
import Friends from './Friends'; // Ensure this matches your actual filename

function App() {
  const [count, setCount] = useState(0);

  // Define handleClick function
  const handleClick = () => {
    setCount(count + 1);
    console.log('Button 1 clicked, count:', count + 1);
  };

  // Define handleClick2 function for the second button
  const handleClick2 = () => {
    setCount(count + 2);
    console.log('Button 2 clicked, count:', count + 2);
  };

  // Define handleClick3 function for the third button
  const handleClick3 = () => {
    alert('Third button clicked!');
  };

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends />
      <Team />
      <Countre /> {/* Using Countre component correctly */}

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <p>Count: {count}</p>
      <button onClick={handleClick3}>Click Me 3</button>
    </>
  );
}

export default App;
