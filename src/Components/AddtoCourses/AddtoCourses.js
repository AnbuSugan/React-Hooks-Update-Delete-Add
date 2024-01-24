import React, { useState } from "react";
import "./AddtoCourses.css";
import UserTable from "../tables/UserTable";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";

const AddtoCourses = () => {
  const usersData = [
    {
      id: 1,
      coursename: "Html",
      coursedescription: "web Technology",
      courseprice: "Rs.10000",
      courseduration: "3 Months",
    },
    {
      id: 2,
      coursename: "Css",
      coursedescription: "web Technology",
      courseprice: "Rs.30000",
      courseduration: "4 Months",
    },
    {
      id: 3,
      coursename: "Bootstrap 5",
      coursedescription: "web Technology",
      courseprice: "Rs.50000",
      courseduration: "6 Months",
    },
  ];
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    coursename: "",
    coursedescription: "",
    courseprice: "",
    courseduration: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      coursename: user.coursename,
      coursedescription: user.coursedescription,
      courseprice: user.courseprice,
      courseduration: user.courseduration,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="courseDetails">
      <h1>Course Details</h1>
      <div>
        <div>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
};

export default AddtoCourses;
