import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleAdd = () => {
    setCount(prevCount => prevCount + 1); // Using the previous count to ensure correct update
  };

  return (
    <div style={{ border: "2px solid yellow", padding: "10px", margin: "10px 0" }}> {/* Adding padding and margin for better layout */}
      <h3>Counter: {count}</h3> {/* Display the current count */}
      <button onClick={handleAdd}>Add 1</button> {/* Button to increment the count */}
    </div>
  );
}
