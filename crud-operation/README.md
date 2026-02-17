# React CRUD User Management

## Setup

1. Install dependencies:

npm install

2. Run JSON server:

npx json-server --watch db.json --port 5000

3. Start React:

npm run dev

---

## Adding New Fields

Go to:

src/config/userSchema.js

Add new object:

{
 name: "dob",
 label: "Date of Birth",
 type: "date"
}

Form + Table update automatically.

---

## Design Decisions

- Schema-driven UI for easy extensibility
- Axios centralized API
- Tailwind CSS for clean UI
- JSON-server used as mock backend
- Components separated for readability

---

## Mock API

JSON-server running on:

http://localhost:5000/users
