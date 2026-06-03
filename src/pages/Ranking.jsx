import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Copa from "../assets/copa.png";
import { GiTrophyCup } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { getRanking } from "../services/rankingService";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    loadRanking();
  }, []);

  const loadRanking = async () => {
    try {
      const data = await getRanking();

      setRanking(data);
    } catch (error) {
      console.log(error);
    }
  };

  const topThree = ranking.slice(0, 3);

  const others = ranking.slice(3);

  return (
    <MainLayout>
      <div className="container mt-4">
        <div className="text-center mb-5">
          <img src={Copa} alt="Copa" width="70" />

          <h1
            className="mt-3"
            style={{
              color: "#39ff14",
              fontWeight: "bold",
            }}
          >
            Ranking Mundialista
          </h1>

          <p className="text-light">Los mejores pronosticadores del torneo</p>
        </div>
        <div className="podium row justify-content-center align-items-end text-center mb-5">
          {topThree[1] && (
            <div className="col-4">
              <div className="welcome-card p-3 shadow-lg podium-card">
                <h1 className="podium-medal">
                  <FaMedal size={50} color="#C0C0C0" />
                </h1>

                <h5>{topThree[1].nombre}</h5>

                <p className="mb-0">{topThree[1].total_points} pts</p>
              </div>
            </div>
          )}

          {topThree[0] && (
            <div className="col-4">
              <div className="welcome-card p-4 shadow-lg podium-card podium-first">
                <h1 className="podium-trophy">
                  <GiTrophyCup size={60} color="#FFD700" />
                </h1>

                <h4>{topThree[0].nombre}</h4>

                <h3 style={{ color: "#39ff14" }}>
                  {topThree[0].total_points} pts
                </h3>
              </div>
            </div>
          )}

          {topThree[2] && (
            <div className="col-4">
              <div className="welcome-card p-3 shadow-lg podium-card">
                <h1 className="podium-medal">
                  <FaMedal size={50} color="#CD7F32" />
                </h1>

                <h5>{topThree[2].nombre}</h5>

                <p className="mb-0">{topThree[2].total_points} pts</p>
              </div>
            </div>
          )}
        </div>
        <div className="welcome-card p-4 shadow-lg">
          {others.map((user, index) => (
            <div
              key={user.id}
              className="
        d-flex
        justify-content-between
        align-items-center
        py-3
        border-bottom
      "
              style={{
                borderColor: "#62769733",
              }}
            >
              <div>
                <strong>#{index + 4}</strong>
              </div>

              <div className="flex-grow-1 ms-4">{user.nombre}</div>

              <div
                className="badge"
                style={{
                  background: "#39ff14",
                  color: "#000",
                  fontSize: "14px",
                }}
              >
                {user.total_points} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Ranking;
