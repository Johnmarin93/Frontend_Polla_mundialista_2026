import { useEffect, useState } from "react";

import {
  getUsers,
  updateUserRole,
  updateUserStatus,
  resetPassword,
} from "../services/adminService";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoleChange = async (userId, currentRole) => {
    try {
      const newRole = currentRole === 1 ? 2 : 1;

      await updateUserRole(userId, newRole);

      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const handleStatusChange = async (userId, currentStatus) => {
    try {
      await updateUserStatus(
        userId,

        !currentStatus,
      );

      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.nombre

      .toLowerCase()

      .includes(search.toLowerCase()),
  );
  const handleResetPassword = async (userId) => {
    const newPassword = prompt("Nueva contraseña temporal");

    if (!newPassword) return;

    try {
      await resetPassword(
        userId,

        newPassword,
      );

      alert("Contraseña reseteada");
    } catch (error) {
      console.log(error);

      alert("Error");
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="
          d-flex
          justify-content-between
          align-items-center
          mb-4
        "
      >
        <h2>👥 Usuarios</h2>
      </div>

      <input
        type="text"
        placeholder="Buscar usuario..."
        className="
          form-control
          mb-4
        "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card shadow">
        <div className="table-responsive">
          <table className="table text-center mb-0">
            <thead>
              <tr>
                <th>ID</th>

                <th>Nombre</th>

                <th>Email</th>

                <th>Rol</th>

                <th>Puntos</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>{user.nombre}</td>

                  <td>{user.email}</td>

                  <td>{user.rol_id === 1 ? "Admin" : "Usuario"}</td>

                  <td>{user.total_points}</td>

                  <td>{user.is_active ? "Activo" : "Bloqueado"}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      style={{ marginRight: "8px" }}
                      onClick={() => handleResetPassword(user.id)}
                    >
                      🔑 Reset Password
                    </button>
                    <button
                      style={{ marginRight: "8px" }}
                      className={
                        user.rol_id === 1 ? "btn btn-primary" : "btn btn-dark"
                      }
                      onClick={() =>
                        handleRoleChange(
                          user.id,

                          user.rol_id,
                        )
                      }
                    >
                      {user.rol_id === 1 ? "Quitar Admin" : "Hacer Admin"}
                    </button>
                    <button
                      className={
                        user.is_active ? "btn btn-danger" : "btn btn-success"
                      }
                      onClick={() =>
                        handleStatusChange(
                          user.id,

                          user.is_active,
                        )
                      }
                    >
                      {user.is_active ? "Bloquear" : "Activar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
