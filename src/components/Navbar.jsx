import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import { GiTrophyCup } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/dashboard">
        <GiTrophyCup size={35} className="me-2 text-warning" />
        Polla Mundial 2026
      </Link>

      <div className="ms-auto d-flex align-items-center gap-3">
        {user ? (
          <>
            <span className="text-light">Hola, {user.nombre} 👋</span>

            <Link className="btn btn-outline-light btn-sm" to="/dashboard">
              Dashboard
            </Link>

            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-primary btn-sm" to="/">
            Registrate
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
