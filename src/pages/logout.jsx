import React from "react";
import { useAuth } from "../utils/store/authStore";

const Logout = () => {

  const [, { onLogout }] = useAuth();

  React.useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <></>;
};

export default Logout;
