import React from "react";
import "./UserTable.css";

const UserTable = (props) => {
  return (
    <div className="table">
      <h2>View Course</h2>
      <table className="tableDesighn">
        <thead>
          <tr>
            <th>CourseName</th>
            <th>CourseDescription</th>
            <th>CoursePrice</th>
            <th>CourseDuration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.coursename}</td>
                <td>{user.coursedescription}</td>
                <td>{user.courseprice}</td>
                <td>{user.courseduration}</td>

                <td>
                  <button
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => props.deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
