import React from "react";
import { useCallback } from "react";
import { useState } from "react";

function TodoForm({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
