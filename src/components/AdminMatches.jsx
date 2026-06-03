import { useEffect, useState } from "react";
import { countryCodes } from "../utils/countryCodes";
import { getMatches } from "../services/matchService";

import { updateResult } from "../services/adminService";

const AdminMatches = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const matchesPerPage = 10;
  const [matches, setMatches] = useState([]);

  const [scores, setScores] = useState({});

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

  const startIndex = (currentPage - 1) * matchesPerPage;

  const endIndex = startIndex + matchesPerPage;

  const paginatedMatches = filteredMatches.slice(
    startIndex,

    endIndex,
  );

  const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);

  useEffect(() => {
    loadMatches();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, search]);

  const loadMatches = async () => {
    try {
      const data = await getMatches();

      setMatches(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    matchId,

    team,

    value,
  ) => {
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
      await updateResult(
        matchId,

        {
          home_score: scores[matchId]?.home || 0,

          away_score: scores[matchId]?.away || 0,
        },
      );

      alert("Resultado actualizado ⚽");

      loadMatches();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="text-center">Resultado Final</h2>
      <input
        type="text"
        placeholder="Buscar selección..."
        className="
                    form-control
                    mb-4
                  "
        style={{
          borderRadius: "12px",
          background: "#e2e1e1de",
          color: "white",
          border: "none",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mb-4 d-flex gap-2">
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
      {paginatedMatches.map((match) => (
        <div
          key={match.id}
          className="match-card  card border-0 shadow-lg mb-3"
          style={{
            borderRadius: "15px",
            background: "linear-gradient(135deg, #111827, #1A1F2E)",
            color: "white",
            overflow: "hidden",
          }}
        >
          <div className="card-body px-4 py-3">
            <div className="d-flex align-items-center justify-content-center gap-4 mb-3">
              <div
                className="text-center"
                style={{
                  width: "120px",
                }}
              >
                <img
                  src={`https://flagsapi.com/${countryCodes[match.home_team_code]}/flat/64.png`}
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

                <small className="text-light">Grupo {match.group_name}</small>
              </div>
              <div
                className="text-center"
                style={{
                  width: "120px",
                }}
              >
                <img
                  src={`https://flagsapi.com/${countryCodes[match.away_team_code]}/flat/64.png`}
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
            <div className="mb-3 text-center">
              {match.status === "finished" && (
                <span className="badge bg-success">FINALIZADO</span>
              )}

              {match.status === "scheduled" && (
                <span className="badge bg-warning text-dark">PENDIENTE</span>
              )}

              {match.status === "live" && (
                <span className="badge bg-danger">EN VIVO</span>
              )}
              <p className="mt-2">
                {new Date(match.match_date).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-1 px-2">
            <div className="text-center">
              <input
                type="number"
                className="form-control text-center fw-bold"
                placeholder="Local"
                style={{
                  width: "100%",
                  height: "45px",
                  fontSize: "18px",
                  borderRadius: "12px",
                }}
                value={scores[match.id]?.home ?? match.home_score ?? ""}
                onChange={(e) =>
                  handleChange(
                    match.id,

                    "home",

                    e.target.value,
                  )
                }
              />
            </div>

            <div className="text-center">
              <input
                type="number"
                className="form-control text-center fw-bold"
                placeholder="Visitante"
                style={{
                  width: "100%",
                  height: "45px",
                  fontSize: "18px",
                  borderRadius: "12px",
                }}
                value={scores[match.id]?.away ?? match.away_score ?? ""}
                onChange={(e) =>
                  handleChange(
                    match.id,

                    "away",

                    e.target.value,
                  )
                }
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <button
              className="
                btn
                btn-danger
                mt-3
              "
              disabled={match.status === "finished"}
              onClick={() => handleSubmit(match.id)}
            >
              {match.status === "finished"
                ? "Resultado Guardado"
                : "Guardar Resultado"}
            </button>
          </div>
        </div>
      ))}
      <div
        className="
    d-flex
    justify-content-center
    gap-2
    mt-4
  "
      >
        {Array.from(
          { length: totalPages },

          (_, index) => (
            <button
              key={index}
              className={
                currentPage === index + 1
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default AdminMatches;
