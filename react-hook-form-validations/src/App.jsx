import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  
  const [updatedData, setUpdatedData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                user={elem}
                key={elem.id}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
          updatedData={updatedData} 
          setUsers={setUsers} 
          setToggle={setToggle} 
          users={users} />
        </div>
      )}
    </div>
  );
};

export default App;
