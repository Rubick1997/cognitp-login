import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      Login
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
          });

          const autDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
          });
          user.authenticateUser(autDetails, {
            onSuccess: (data) => {
              console.log("onSuccess: ", data);
            },
            onFailure: (err) => {
              console.log("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
              console.log("newPasswordRequired: ", data);
            },
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
