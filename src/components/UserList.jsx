import { useState } from "react";
import users from "../dataset.json";
import "./UserList.css";

const ROLES = ["Admin", "Customer", "Vendor"];

export default function UserList() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [showAll, setShowAll] = useState(true);

  const filteredUsers = !showAll
    ? []
    : activeFilter
    ? users.filter((user) => user.role === activeFilter)
    : users;

  function handleFilterClick(role) {
    setActiveFilter(activeFilter === role ? null : role);
    setShowAll(true);
  }

  function handleToggle() {
    setShowAll((prev) => !prev);
    setActiveFilter(null);
  }

  function getFilterBtnClass(role) {
    if (activeFilter !== role) return "filter-btn";
    return `filter-btn active-${role.toLowerCase()}`;
  }

  return (
    <div className="container">
      <h1 className="title">User List</h1>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {ROLES.map((role) => (
          <button
            key={role}
            className={getFilterBtnClass(role)}
            onClick={() => handleFilterClick(role)}
          >
            {role}
          </button>
        ))}
        <button className="toggle-btn" onClick={handleToggle}>
          {showAll ? "Hide Users" : "Show All Users"}
        </button>
      </div>

      {/* Status label */}
      <p className="filter-label">
        {!showAll
          ? "Users hidden"
          : activeFilter
          ? `Showing: ${activeFilter}s (${filteredUsers.length})`
          : `Showing all users (${filteredUsers.length})`}
      </p>

      {/* User List */}
      {filteredUsers.length > 0 ? (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li key={user.id} className="user-card">
              <span className="user-id">#{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className={`user-role role-${user.role.toLowerCase()}`}>
                {user.role}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">No users to display.</div>
      )}
    </div>
  );
}
