import { useEffect, useState } from "react";
import { Account } from "./Account";
import "./App.css";
import Login from "./Login";
import Settings from "./Settings";
import Signup from "./Signup";
import Status from "./Status";
import UserPool from "./UserPool";

function App() {
  const user = UserPool.getCurrentUser();

  return (
    <Account>
      <Signup />
      <Login />
      <Status />
      <Settings />
    </Account>
  );
}

export default App;
