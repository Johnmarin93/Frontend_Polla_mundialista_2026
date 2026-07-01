import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Copa from "../assets/cup.png";
import { RiShieldUserFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { GiSoccerBall } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";
import { MdLockReset } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR MOBILE */}

      <nav className="navbar navbar-dark bg-dark d-lg-none px-3">
        <button
          className="btn btn-dark"
          style={{ fontSize: "30px", color: "#dedacd" }}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <IoMenu />
        </button>

        <img src={Logo} alt="Logo" style={{ width: "90px" }} />
      </nav>
      {mobileMenu && (
        <div className="mobile-overlay" onClick={() => setMobileMenu(false)} />
      )}

      <div className={`mobile-menu d-lg-none ${mobileMenu ? "open" : ""}`}>
        <div
          className="text-center mb-4"
          style={{ padding: "20px", borderBottom: "1px solid #37ff14a8" }}
        >
          <img src={Copa} alt="Copa Mundial" style={{ width: "70px" }} />
        </div>

        <SidebarContent
          user={user}
          handleLogout={handleLogout}
          closeMenu={() => setMobileMenu(false)}
        />
      </div>

      {/* SIDEBAR DESKTOP */}

      <div
        className="
          sidebar-desktop
          d-none
          d-lg-flex
          flex-column
        "
      >
        {/* USER INFO */}

        <div className="mb-4 text-center">
          <img src={Logo} alt="Copa Mundial" style={{ width: "160px" }} />
        </div>

        <div
          className="text-center mb-4"
          style={{ padding: "10px", borderBottom: "1px solid #37ff14a8" }}
        ></div>

        {/* LINKS */}
        <SidebarContent user={user} handleLogout={handleLogout} />
      </div>

      {/* MOBILE OFFCANVAS */}
    </>
  );
};

/* LINKS */

const SidebarContent = ({ user, handleLogout, closeMenu }) => {
  return (
    <div className="d-flex flex-column flex-grow-1">
      {/* USER ROUTES */}

      {user?.rol_id !== 1 && (
        <>
          <Link to="/dashboard" className="nav-link text-white mb-1">
            <div className="text-center">
              <RiShieldUserFill
                style={{
                  color: "#dedacd",
                  width: "24px",
                  marginBottom: "5px",
                  fontSize: "40px",
                }}
              />{" "}
              {user?.nombre.toUpperCase()}
            </div>
            <FaHome
              style={{
                color: "#37ff14a8",
                width: "17px",
                marginBottom: "5px",
                fontSize: "30px",
              }}
            />
            {"   "}
            Inicio
          </Link>

          {/*<Link to="/standings" className="nav-link text-white mb-1">
            <FaTrophy
              style={{
                color: "#37ff14a8",
                width: "17px",
                marginBottom: "5px",
                fontSize: "30px",
              }}
            />{" "}
            Tabla posiciones
          </Link>*/}

          <Link to="/predictions" className="nav-link text-white mb-1">
            <GiSoccerBall
              style={{
                color: "#37ff14a8",
                width: "17px",
                marginBottom: "5px",
                fontSize: "30px",
              }}
            />{" "}
            Pronósticos
          </Link>

          <Link to="/ranking" className="nav-link text-white mb-1">
            <GiPodiumWinner
              style={{
                color: "#37ff14a8",
                width: "17px",
                marginBottom: "5px",
                fontSize: "30px",
              }}
            />{" "}
            Ranking
          </Link>

          <Link to="/change-password" className="nav-link text-white mb-1">
            <MdLockReset
              style={{
                color: "#37ff14a8",
                width: "17px",
                marginBottom: "5px",
                fontSize: "30px",
              }}
            />{" "}
            Cambiar contraseña
          </Link>
        </>
      )}

      {/* ADMIN ROUTES */}

      {user?.rol_id === 1 && (
        <>
          <div className="text-center">
            <RiShieldUserFill
              style={{
                color: "#dedacd",
                width: "24px",
                marginBottom: "5px",
                fontSize: "40px",
              }}
            />{" "}
            {user?.nombre.toUpperCase()}
          </div>
          <div className="d-flex flex-column mt-3">
            <Link
              to="/admin"
              onClick={closeMenu}
              className="nav-link text-white mb-1"
            >
              <RxDashboard
                style={{
                  color: "#37ff14a8",
                  width: "17px",
                  marginBottom: "5px",
                  fontSize: "30px",
                }}
              />{" "}
              Dashboard
            </Link>

            <Link
              to="/admin/matches"
              onClick={closeMenu}
              className="nav-link text-white mb-1"
            >
              <GiSoccerBall
                style={{
                  color: "#37ff14a8",
                  width: "17px",
                  marginBottom: "5px",
                  fontSize: "30px",
                }}
              />{" "}
              Gestionar partidos
            </Link>
            <Link to="/standings" className="nav-link text-white mb-1">
              <FaTrophy
                style={{
                  color: "#37ff14a8",
                  width: "17px",
                  marginBottom: "5px",
                  fontSize: "30px",
                }}
              />{" "}
              Tabla posiciones
            </Link>
            <Link to="/ranking" className="nav-link text-white mb-1">
              <GiPodiumWinner
                style={{
                  color: "#37ff14a8",
                  width: "17px",
                  marginBottom: "5px",
                  fontSize: "30px",
                }}
              />{" "}
              Ranking
            </Link>

            <Link
              to="/admin/users"
              onClick={closeMenu}
              className="nav-link text-white mb-1"
            >
              <FaUsers
                style={{
                  color: "#37ff14a8",
                  width: "17px",
                  marginBottom: "5px",
                  fontSize: "30px",
                }}
              />{" "}
              Usuarios
            </Link>
          </div>
        </>
      )}

      {/* LOGOUT */}

      <button
        className="btn btn-worldcup "
        style={{ marginTop: "10vh" }}
        onClick={() => {
          closeMenu?.();
          handleLogout();
        }}
      >
        <FiLogOut /> Cerrar sesión
      </button>
    </div>
  );
};

export default Sidebar;
