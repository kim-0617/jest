import React, { useState } from "react";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import DelayedToggle from "./components/DelayedToggle";
import UserProfile from "./components/UserProfile";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  // return <Profile username="velopert" name="김민준" />;
  // return <Counter />;
  // return <DelayedToggle />;
  // return <UserProfile id={1} />;

  <>{data}</>;
};

export default App;
