# AfterHours — Personal Journal Platform

AfterHours is a full‑stack journaling application that allows users to privately write, edit, and manage personal journal entries. The application provides a minimal and distraction‑free interface for writing while maintaining secure authentication and persistent storage.

The project demonstrates a complete CRUD workflow with authentication and a modern React frontend.

---

# Features

## Authentication

* User registration
* User login
* Persistent user session
* Protected routes

## Journal Entries

* Create journal entries
* View entries in a timeline
* Edit existing entries
* Delete entries

## User Experience

* Clean minimal interface
* Toast notifications for feedback
* Loading states for async operations
* Responsive layout

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* React Hot Toast
* Lucide Icons

## Backend

* Node.js
* Express.js
* MongoDB

## Authentication

* JWT based authentication

---

# Project Structure

```
frontend/

src/
  components/
  context/
    AuthContext.jsx

  pages/
    Home.jsx
    Login.jsx
    Register.jsx
    Timeline.jsx
    WriteEntry.jsx
    EditEntry.jsx

  services/
    api.js
    auth.js
    journal.js

  App.jsx
  main.jsx
```

---

# Application Flow

1. User lands on the landing page.
2. User registers or logs in.
3. After authentication the user is redirected to the Timeline.
4. Timeline displays all journal entries belonging to the user.
5. User can:

   * Create a new entry
   * Edit an existing entry
   * Delete an entry

---

# API Endpoints

## Authentication

POST /api/auth/register

Creates a new user account.

POST /api/auth/login

Authenticates the user and returns a JWT token.

---

## Journal

GET /api/journal

Fetch all entries belonging to the authenticated user.

GET /api/journal/:id

Fetch a single journal entry.

POST /api/journal

Create a new journal entry.

PUT /api/journal/:id

Update an existing journal entry.

DELETE /api/journal/:id

Delete a journal entry.

---

# Running the Project

## Clone the repository

```
git clone <repo-url>
cd afterhours
```

## Install dependencies

Frontend:

```
cd frontend
npm install
```

Backend:

```
cd backend
npm install
```

---

# Start the development servers

Backend

```
npm run dev
```

Frontend

```
npm run dev
```

---

# Environment Variables

Backend `.env` example:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
PORT=5000
```

---

# Future Improvements

* Entry search
* Entry tagging
* Mood tracking
* Rich text editor
* Dark / light theme toggle
* Entry analytics

---

# Learning Goals

This project was built to practice:

* Full‑stack application architecture
* Authentication flows
* React state management
* API integration
* CRUD operations
* Building production‑like project structure

---

# License

This project is for educational and portfolio purposes.
