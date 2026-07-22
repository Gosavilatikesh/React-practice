import { Children, createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] =
    useState([JSON.parse(localStorage.getItem("registeredUsers"))]) || [];
  const [logedInUser, setlogedInUser] = useState(
    JSON.parse(localStorage.getItem("logedInUser")),
  );

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        logedInUser,
        setlogedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
