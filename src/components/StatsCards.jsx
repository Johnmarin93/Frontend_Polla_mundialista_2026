import { useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { getUserStats } from "../services/userService";
import { getRanking } from "../services/rankingService";
import { useAuth } from "../context/AuthContext";

const StatsCards = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    loadStats();
    loadPosition();
  }, []);

  useEffect(() => {
    console.log("Usuario:", user?.id);
    console.log("Ranking:", positions);
    console.log(
      "Posición encontrada:",
      positions.findIndex((item) => item.id === user?.id) + 1,
    );
  }, [positions, user]);

  const loadStats = async () => {
    try {
      const data = await getUserStats();

      setStats(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPosition = async () => {
    try {
      const data = await getRanking();
      setPositions(data);
    } catch (error) {
      console.log(error);
    }
  };
  const currentPosition =
    positions.length > 0
      ? positions.findIndex((item) => item.id === user.id) + 1
      : null;

  return (
    <div className="row g-3">
      <div className="col-12 col-md-4">
        <div className="welcome-card text-center d-flex flex-column justify-content-center align-items-center h-100 p-4">
          <MdOutlineEditNote size={40} />

          <h5 className="mt-3">Total Pronósticos</h5>

          <h2>{stats?.predictions}</h2>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="welcome-card text-center d-flex flex-column justify-content-center align-items-center h-100 p-4">
          <GiTrophyCup size={40} />

          <h5 className="mt-3">Total Puntos</h5>

          <h2>{stats?.points}</h2>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="welcome-card text-center d-flex flex-column justify-content-center align-items-center h-100 p-4">
          <GiPodiumWinner size={40} />

          <h5 className="mt-3">Posición</h5>

          <h2>{currentPosition ? `#${currentPosition}` : "-"}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
