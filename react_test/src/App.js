import React from "react";
import Hello from "./components/Hello";
import Timer from "./components/Timer";

const user = {
  name: "Mike",
  age: 30,
  gender: "male",
};

function App() {
  return (
    <>
      {/* <Hello user={user} /> */}
      <Timer />
    </>
  );
}

export default App;
