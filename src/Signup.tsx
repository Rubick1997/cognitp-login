import { useState } from "react";
import UserPool from "./UserPool";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      Sign Up
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          UserPool.signUp(email, password, [], [], (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log(data);
          });
        }}
        className="form"
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
