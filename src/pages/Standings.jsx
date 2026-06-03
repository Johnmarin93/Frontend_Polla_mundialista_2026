import { useEffect, useState } from "react";

import { getStandings } from "../services/matchService.js";
import Copa from "../assets/copa.png";
import MainLayout from "../layouts/MainLayout";

const Standings = () => {
  const [standings, setStandings] = useState({});

  useEffect(() => {
    loadStandings();
  }, []);

  const loadStandings = async () => {
    try {
      const data = await getStandings();

      setStandings(data);
    } catch (error) {
      console.log(error);
    }
  };
  const thirdPlaces = Object.values(standings)
    .map((group) => group[2])
    .filter(Boolean);

  const bestThirds = [...thirdPlaces]
    .sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf)
    .slice(0, 8);

  const bestThirdTeams = bestThirds.map((team) => team.team);

  return (
    <MainLayout>
      <div className="container mt-4">
        <div className="text-center mb-4">
          <h2 style={{ color: "#39ff14" }}>
            <img src={Copa} alt="Copa" width="50" /> TABLA DE POSICIONES
          </h2>

          <p style={{ color: "#627697" }}>Clasificación oficial por grupos</p>
        </div>

        {Object.entries(standings).map(([group, teams]) => (
          <div key={group} className="welcome-card p-4 shadow-lg mb-4">
            <h4
              className="mb-3"
              style={{
                color: "#39ff14",
                fontWeight: "bold",
              }}
            >
              Grupo {group}
            </h4>
            <div className="table-responsive">
              <table className="table table-transparent align-middle">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Equipo</th>
                    <th>PTS</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                  </tr>
                </thead>

                <tbody>
                  {teams.map((team, index) => (
                    <tr key={team.team}>
                      <td>
                        <strong>#{index + 1}</strong>
                      </td>

                      <td>
                        {team.team}

                        {index < 2 && (
                          <span className="badge bg-success ms-2">
                            Clasifica
                          </span>
                        )}

                        {index === 2 && bestThirdTeams.includes(team.team) && (
                          <span className="badge bg-warning text-dark ms-2">
                            Mejor tercero
                          </span>
                        )}
                      </td>

                      <td>
                        <span
                          className="badge"
                          style={{
                            background: "#39ff14",
                            color: "#000",
                          }}
                        >
                          {team.pts}
                        </span>
                      </td>

                      <td>{team.pj}</td>
                      <td>{team.pg}</td>
                      <td>{team.pe}</td>
                      <td>{team.pp}</td>
                      <td>{team.gf}</td>
                      <td>{team.gc}</td>
                      <td>
                        <strong>{team.dg}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Standings;
