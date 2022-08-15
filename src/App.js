import React, { useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";
function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (username, userage) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
