# UserList Assessment

A React app built for the Junior Frontend Developer technical assessment.

## What it does

Displays a list of 50 users and lets you filter them by role — Admin, Customer, or Vendor. Clicking a filter a second time resets back to all users. There's also a toggle button to hide and show the list.

## Running the project

Make sure you have Node.js installed, then:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Folder structure

```
src/
├── components/
│   ├── UserList.jsx
│   └── UserList.css
├── dataset.json
├── App.jsx
└── main.jsx
```

The user data lives in `dataset.json` and is imported directly into the component. `App.jsx` just renders `<UserList />` — all the logic is inside the component itself.

## Notes

I used two pieces of state — `activeFilter` to track which role button is selected, and `showAll` for the toggle. The filtered list is derived from those two values on each render rather than stored as its own state variable, which keeps things simpler.
