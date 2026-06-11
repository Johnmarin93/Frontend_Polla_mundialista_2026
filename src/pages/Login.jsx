import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import Prado from "../assets/prado.png";
import Balon from "../assets/balon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await loginUser({
        email,
        password,
      });

      console.log(data);

      login(data.token);

      navigate("/dashboard");
    } catch (error) {
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
            type="email"
            className="form-control mb-3 input-worldcup"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-4 input-worldcup"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-worldcup w-100" onClick={handleSubmit}>
            Ingresar
          </button>
          {loading && (
            <div className="soccer-loader">
              <div className="ball-loader">
                <img src={Balon} alt="Balón" />
              </div>

              <img src={Prado} alt="Prado" className="grass-loader" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
