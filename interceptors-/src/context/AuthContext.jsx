import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const users = localStorage.getItem("registeredUsers");
    return users ? JSON.parse(users) : [];
  });

  const [logedInUser, setlogedInUser] = useState(() => {
    const user = localStorage.getItem("logedInUser");
    return user ? JSON.parse(user) : null;
  });

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