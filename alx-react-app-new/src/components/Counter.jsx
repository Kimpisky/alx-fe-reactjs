import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid lightgray', borderRadius: '6px' }}>
      <p style={{ fontSize: '18px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
