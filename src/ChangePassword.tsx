import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { getSession } = useContext(AccountContext);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          getSession().then(({ user }: any) => {
            user.changePassword(
              password,
              newPassword,
              (err: any, result: any) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log(result);
                }
              }
            );
          });
        }}
        className="form"
      >
        <label htmlFor="email">Old Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
