import MainLayout from "../layouts/MainLayout";

import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="container">
        <div className="card shadow border-0">
          <div className="card-body">
            <h2 className="mb-4">👤 Perfil Usuario</h2>

            <hr />

            <p>
              <strong>ID:</strong> {user?.id}
            </p>

            <p>
              <strong>Nombre:</strong> {user?.nombre}
            </p>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
