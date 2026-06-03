import Logo from "../assets/logo.png";

import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { register } from "../services/authService";
import Prado from "../assets/prado.png";
import Balon from "../assets/balon.png";

const Register = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [rol_id, setRol_id] = useState(2);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email || !password || !confirmPassword) {
      return toast.error("Todos los campos son obligatorios");
    }

    if (password !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    if (!emailRegex.test(email)) {
      toast.error("Ingresa un correo válido");

      return;
    }

    setLoading(true);

    try {
      const data = await register({ nombre, email, password, rol_id });
      console.log(data);
      toast.success("Usuario registrado correctamente");

      navigate("/");
    } catch (error) {
      console.log(error.response.data);

      toast.error(error.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
    container-fluid
    d-flex
    justify-content-center
  "
      style={{
        minHeight: "75vh",
        background: "#0c110d",
        padding: "40px 20px",
      }}
    >
      <div
        className="card card-worldcup shadow p-4 text-center"
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <img
          src={Logo}
          alt="Copa Mundial"
          style={{
            width: "200px",
            margin: "0 auto",
          }}
        />

        <div className="mt-5">
          <input
            type="text"
            className="form-control mb-3 input-worldcup"
            placeholder="Nombre y Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            className="form-control mb-3 input-worldcup"
            placeholder="Correo electrónico"
            value={email.toLowerCase()}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3 input-worldcup"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3 input-worldcup"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* BOTON */}

          <button className="btn btn-worldcup w-100" onClick={handleSubmit}>
            Registrarse
          </button>
          {loading && (
            <div className="soccer-loader">
              <div className="ball-loader">
                <img src={Balon} alt="Balón" />
              </div>

              <img src={Prado} alt="Prado" className="grass-loader" />
            </div>
          )}
          <p className="mt-3">
            Iniciar sesión{" "}
            <Link
              to="/"
              style={{
                color: "#39FF14",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
