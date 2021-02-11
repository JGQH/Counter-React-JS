import { useState } from 'react';

const Counter = ({max = 10}) => {
  let [value, setValue] = useState(0);
  return (
    <div className="counter-block">
      <p>{value}/{max}</p>
      <div>
        <button onClick={() => setValue(value + 1)} disabled={value == max}>Add Counter</button>
        <button onClick={() => setValue(value - 1)} disabled={value == 0}>Remove Counter</button>
      </div>
    </div>
  );
}

export default Counter;