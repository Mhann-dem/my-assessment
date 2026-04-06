# UserList — Junior Frontend Developer Assessment

A React application that displays a filterable list of users, built as part of a Junior Frontend Developer technical assessment.

---

## Features

- Displays all 50 users on load
- Filter users by role: **Admin**, **Customer**, or **Vendor**
- Click an active filter again to reset back to all users
- Toggle to show or hide the full user list
- Color-coded role badges for quick visual scanning
- Live count of users currently displayed

---

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — development server and build tool
- Plain CSS — component-scoped styles

---

## Project Structure

```
my-assessment/
├── public/
├── src/
│   ├── components/
│   │   ├── UserList.jsx       # Main component
│   │   └── UserList.css       # Component styles
│   ├── dataset.json           # 50-user data source
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone or download the project
cd my-assessment

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

---

## How It Works

### State

The component uses two `useState` variables:

| State | Type | Purpose |
|---|---|---|
| `activeFilter` | `string \| null` | Tracks the selected role filter |
| `showAll` | `boolean` | Controls whether the list is visible |

### Filtering Logic

`filteredUsers` is a derived value — computed on every render from `activeFilter` and `showAll`. No extra state is needed:

```js
const filteredUsers = !showAll
  ? []
  : activeFilter
  ? users.filter((user) => user.role === activeFilter)
  : users;
```

### Event Handlers

```js
// Clicking the same filter again resets it
function handleFilterClick(role) {
  setActiveFilter(activeFilter === role ? null : role);
  setShowAll(true);
}

// Toggle hides the list and resets any active filter
function handleToggle() {
  setShowAll((prev) => !prev);
  setActiveFilter(null);
}
```

---

## Dataset

Users are stored in `src/dataset.json` and imported directly into the component:

```js
import users from "../dataset.json";
```

The dataset contains 50 users across three roles: Admin, Customer, and Vendor.

---

## Assessment Requirements Checklist

- [x] `UserList` React component
- [x] All users displayed on load
- [x] Dataset saved in `dataset.json`
- [x] Filter button: Admin
- [x] Filter button: Customer
- [x] Filter button: Vendor
- [x] Bonus: Toggle to show all / hide users
