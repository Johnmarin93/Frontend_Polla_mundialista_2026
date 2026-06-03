import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import TopUsers from "../components/TopUsers";
import { getStats } from "../services/adminService";
import RecentPredictions from "../components/RecentPredictions";
import RecentResults from "../components/RecentResults";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getStats();

      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card p-4 shadow h-100">
            <h3>👥</h3>

            <h5>Usuarios</h5>

            <h2>{stats?.users}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow h-100">
            <h3>⚽</h3>

            <h5>Partidos</h5>

            <h2>{stats?.matches}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow h-100">
            <h3>📊</h3>

            <h5>Pronósticos</h5>

            <h2>{stats?.predictions}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow h-100">
            <h3>🏆</h3>

            <h5>Líder</h5>

            <h6>{stats?.leader?.nombre}</h6>

            <h2>{stats?.leader?.total_points}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TopUsers />
        </div>
        <div className="col-md-6">
          <RecentPredictions />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <RecentResults />
        </div>

        <div className="col-md-6">
          <div className="card p-4 shadow h-100">
            <h4>📊 Próximamente</h4>

            <p className="text-muted">
              Tabla de posiciones, cruces y estadísticas.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
