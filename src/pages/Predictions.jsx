import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { countryCodes } from "../utils/countryCodes";
import { getMatches } from "../services/matchService";
import { WiTime8 } from "react-icons/wi";
import { FaCheckCircle } from "react-icons/fa";
import { FcCalendar, FcAlarmClock } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

import {
  createPrediction,
  getUserPredictions,
} from "../services/predictionService";
import { useAuth } from "../context/AuthContext";

const Predictions = () => {
  const [matches, setMatches] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [scores, setScores] = useState({});
  const { user } = useAuth();

  const [currentPage, setCurrentPage] = useState(1);

  const matchesPerPage = 10;
  const filteredMatches = matches.filter((match) => {
    const matchStatus = filter === "all" ? true : match.status === filter;

    const searchMatch =
      match.home_team

        .toLowerCase()

        .includes(search.toLowerCase()) ||
      match.away_team

        .toLowerCase()

        .includes(search.toLowerCase());

    return matchStatus && searchMatch;
  });
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isToday = (dateString) => {
    const matchDate = new Date(dateString.replace(" ", "T"));
    const today = new Date();

    return (
      matchDate.getDate() === today.getDate() &&
      matchDate.getMonth() === today.getMonth() &&
      matchDate.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    if (user) {
      loadMatches();
    }
  }, [user]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, search]);

  const loadMatches = async () => {
    try {
      const data = await getMatches();

      setMatches(data);

      const predictions = await getUserPredictions(user.id);

      const formattedScores = {};

      predictions.forEach((prediction) => {
        formattedScores[prediction.match_id] = {
          home: prediction.predicted_home_score,
          away: prediction.predicted_away_score,
          points: prediction.points,
        };
      });
      console.log(formattedScores);
      setScores(formattedScores);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = (currentPage - 1) * matchesPerPage;

  const endIndex = startIndex + matchesPerPage;

  const paginatedMatches = filteredMatches.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);

  const getFlagUrl = (code) => {
    if (code === "SCO") {
      return "https://flagcdn.com/w80/gb-sct.png";
    }

    return `https://flagsapi.com/${countryCodes[code]}/flat/64.png`;
  };

  const handleChange = (matchId, team, value) => {
    setScores({
      ...scores,

      [matchId]: {
        ...scores[matchId],

        [team]: value,
      },
    });
  };

  const handleSubmit = async (matchId) => {
    try {
      await createPrediction({
        user_id: user.id,

        match_id: matchId,

        predicted_home_score: scores[matchId]?.home || 0,

        predicted_away_score: scores[matchId]?.away || 0,
      });

      alert("Pronóstico guardado ⚽");
    } catch (error) {
      alert(error.message);
    }
  };

  const isPredictionLocked = (matchDate) => {
    const now = new Date();

    const gameDate = new Date(matchDate);

    gameDate.setMinutes(gameDate.getMinutes() - 15);

    return now >= gameDate;
  };

  const getCountdown = (dateString) => {
    const matchDate = new Date(dateString.replace(" ", "T"));

    // Solo mostrar para partidos de hoy
    if (!isToday(dateString)) return null;

    const closeDate = new Date(matchDate.getTime() - 15 * 60 * 1000);

    const diff = closeDate.getTime() - now;

    if (diff <= 0) {
      return "🔒 Pronóstico cerrado ";
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `⏰ ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <MainLayout>
      <div className="container mt-4" style={{ maxWidth: "600px" }}>
        <h2 className="text-center " style={{ color: "#39ff14" }}>
          PRONÓSTICOS
        </h2>
        <input
          type="text"
          placeholder="Buscar selección..."
          className="form-control mb-3 input-worldcup"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mb-4 d-flex gap-2 flex-wrap">
          <button className="btn btn-dark" onClick={() => setFilter("all")}>
            Todos
          </button>

          <button
            className="btn btn-warning"
            onClick={() => setFilter("scheduled")}
          >
            Pendientes
          </button>

          <button
            className="btn btn-success"
            onClick={() => setFilter("finished")}
          >
            Finalizados
          </button>
        </div>

        {paginatedMatches.map((match) => {
          const locked = isPredictionLocked(match.match_date);

          return (
            <div key={match.id} className="welcome-card p-4 shadow-lg mt-4">
              <div className="card-body px-4 py-3">
                <div className="d-flex align-items-center justify-content-center gap-4">
                  <div
                    className="text-center"
                    style={{
                      width: "120px",
                    }}
                  >
                    <img
                      src={getFlagUrl(match.home_team_code)}
                      width="45"
                      alt={match.home_team}
                    />
                    <p
                      className="mt-2 mb-0 fw-bold"
                      style={{
                        minHeight: "48px",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",
                      }}
                    >
                      {match.home_team}
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="fw-bold">VS</h3>

                    <small className="text-light">{match.group_name}</small>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      width: "120px",
                    }}
                  >
                    <img
                      src={getFlagUrl(match.away_team_code)}
                      width="45"
                      alt={match.away_team}
                    />

                    <p
                      className="mt-2 mb-0 fw-bold"
                      style={{
                        minHeight: "48px",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",
                      }}
                    >
                      {match.away_team}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-center gap-4 flex-wrap">
                <span className="d-flex align-items-center">
                  <FcCalendar className="me-2" />
                  {match.match_date.split(" ")[0]}
                </span>

                <span className="d-flex align-items-center">
                  <WiTime8 className="me-2" />
                  {match.match_date.split(" ")[1].slice(0, 5)}
                </span>
              </div>

              {getCountdown(match.match_date) && (
                <div className="text-center pb-3">
                  <span className="badge bg-danger">
                    {getCountdown(match.match_date)}
                  </span>
                </div>
              )}

              <div className="d-flex justify-content-center gap-3 mt-3 px-2">
                <div className="text-center">
                  <input
                    type="number"
                    className="form-control text-center input-worldcup"
                    style={{
                      width: "100%",
                      height: "45px",
                      fontSize: "18px",
                      borderRadius: "12px",
                    }}
                    placeholder="Local"
                    disabled={locked}
                    value={scores[match.id]?.home ?? ""}
                    onChange={(e) =>
                      handleChange(match.id, "home", e.target.value)
                    }
                  />
                </div>

                <div className="text-center">
                  <input
                    type="number"
                    className="form-control text-center input-worldcup"
                    style={{
                      width: "100%",
                      height: "45px",
                      fontSize: "18px",
                      borderRadius: "12px",
                    }}
                    placeholder="Visitante"
                    disabled={locked}
                    value={scores[match.id]?.away ?? ""}
                    onChange={(e) =>
                      handleChange(match.id, "away", e.target.value)
                    }
                  />
                </div>
              </div>
              {match.status === "finished" && (
                <div className="mt-3 p-3 text-center">
                  <small style={{ color: "#627697" }}>RESULTADO OFICIAL</small>

                  <h5 className="mt-2">
                    {match.home_team} {match.home_score} - {match.away_score}{" "}
                    {match.away_team}
                  </h5>
                  <div
                    className="mt-2 fw-bold"
                    style={{
                      color: "#39ff14",
                    }}
                  >
                    <FaStar className="mb-1" style={{ color: "#FFD700" }} />{" "}
                    {scores[match.id]?.points || 0} puntos
                    {console.log(match.id, scores[match.id])}
                  </div>
                </div>
              )}
              <div className="text-center mb-3">
                <button
                  className="btn btn-worldcup mt-3 "
                  disabled={locked}
                  onClick={() => handleSubmit(match.id)}
                >
                  <FaCheckCircle className="me-2" />
                  Guardar Pronóstico
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="
    d-flex
    justify-content-center
    gap-2
    mt-4
    flex-wrap
  "
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? "btn btn-worldcup"
                : "btn btn-outline-light"
            }
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </MainLayout>
  );
};

export default Predictions;
