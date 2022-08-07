import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session: any) => {
      console.log(session);
      setStatus(true);
    });
  }, [getSession]);

  return (
    <div>
      {status ? <button onClick={logout}> logout</button> : "PLease log in"}
    </div>
  );
};

export default Status;
