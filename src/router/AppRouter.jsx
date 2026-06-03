import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login.jsx";

import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute.jsx";

import Profile from "../pages/Profile";

import Register from "../pages/Register";

import Predictions from "../pages/Predictions";

import Ranking from "../pages/Ranking";

import AdminDashboard from "../pages/AdminDashboard";

import AdminUsersPage from "../pages/AdminUsersPage.jsx";

import AdminMatchesPage from "../pages/AdminMatchesPage";

import Standings from "../pages/Standings";

import ChangePassword from "../pages/ChangePassword";

const AppRouter = () => {
  return (
    <Routes>
      {/* LOGIN */}

      <Route path="/" element={<Login />} />

      {/* REGISTER */}

      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* PROFILE */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* PREDICTIONS */}

      <Route
        path="/predictions"
        element={
          <ProtectedRoute>
            <Predictions />
          </ProtectedRoute>
        }
      />

      {/* RANKING */}

      <Route
        path="/ranking"
        element={
          <ProtectedRoute>
            <Ranking />
          </ProtectedRoute>
        }
      />

      {/* STANDINGS */}

      <Route
        path="/standings"
        element={
          <ProtectedRoute>
            <Standings />
          </ProtectedRoute>
        }
      />

      {/* CHANGE PASSWORD */}

      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      {/* ADMIN DASHBOARD */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* ADMIN USERS */}

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminUsersPage />
          </ProtectedRoute>
        }
      />

      {/* ADMIN MATCHES */}

      <Route
        path="/admin/matches"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminMatchesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
