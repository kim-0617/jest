import React, { useState, useCallback } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
      </div>
      <div>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
