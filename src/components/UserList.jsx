import { useState } from "react";
import users from "../dataset.json";

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
    if (activeFilter === role) {
      // Clicking the same filter again resets it
      setActiveFilter(null);
    } else {
      setActiveFilter(role);
    }
    setShowAll(true);
  }

  function handleToggle() {
    setShowAll((prev) => !prev);
    setActiveFilter(null);
  }

  return (
    <div className="container">
      <h1 className="title">User List</h1>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {ROLES.map((role) => (
          <button
            key={role}
            className={`filter-btn ${activeFilter === role ? "active" : ""}`}
            onClick={() => handleFilterClick(role)}
          >
            {role}
          </button>
        ))}

        {/* Bonus: Toggle show all / hide all */}
        <button className="toggle-btn" onClick={handleToggle}>
          {showAll ? "Hide Users" : "Show All Users"}
        </button>
      </div>

      {/* Active filter label */}
      <p className="filter-label">
        {!showAll
          ? "Users hidden"
          : activeFilter
          ? `Showing: ${activeFilter}s (${filteredUsers.length})`
          : `Showing all users (${filteredUsers.length})`}
      </p>

      {/* User List */}
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
    </div>
  );
}
