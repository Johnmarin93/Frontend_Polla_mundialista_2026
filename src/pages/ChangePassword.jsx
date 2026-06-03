import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { toast } from "react-toastify";

import { changePassword } from "../services/authService";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    try {
      await changePassword(
        currentPassword,

        newPassword,
      );

      toast.success("Contraseña actualizada");

      localStorage.removeItem("token");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

      setCurrentPassword("");

      setNewPassword("");

      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="welcome-card p-4 shadow-lg">
              <div className="text-center mb-4">
                <h2 style={{ color: "#39ff14" }}>🔒 Cambiar Contraseña</h2>

                <p style={{ color: "#627697" }}>
                  Mantén tu cuenta segura actualizando tu contraseña.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  className="form-control input-worldcup mb-3"
                  type="password"
                  placeholder="Contraseña actual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <input
                  className="form-control input-worldcup mb-3"
                  type="password"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <input
                  className="form-control input-worldcup mb-4"
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-worldcup w-100">
                  🔐 Actualizar contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChangePassword;
