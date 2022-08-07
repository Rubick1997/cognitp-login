import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { createContext } from "react";
import UserPool from "./UserPool";

const AccountContext = createContext<any>("");

const Account = (props: any) => {
  const getSession = async () => {
    return await new Promise(async (resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession(async (err: Error, session: any) => {
          if (err) {
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results: any = {};
                  for (let attribute of attributes as CognitoUserAttribute[]) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }
                  resolve(results);
                }
              });
            });
            resolve({
              user,
              ...session,
              ...(attributes as CognitoUserAttribute[]),
            });
          }
        });
      } else {
        reject();
      }
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider value={{ getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
