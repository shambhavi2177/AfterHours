import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import {Toaster} from "react-hot-toast"

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Register from "./pages/Register";
import Timeline from "./pages/Timeline.jsx";
import WriteEntry from "./pages/WriteEntry.jsx";
import EditEntry from "./pages/EditEntry.jsx";

export default function App() {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          }
        />

        <Route
          path="/journal/new"
          element={
            <ProtectedRoute>
              <WriteEntry />
            </ProtectedRoute>
          }
        />

        <Route
          path="/journal/:id"
          element={
            <ProtectedRoute>
              <EditEntry />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
