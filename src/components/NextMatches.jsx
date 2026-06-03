import { useEffect, useState } from "react";
import { countryCodes } from "../utils/countryCodes";
import { getUpcomingMatches } from "../services/matchService";
import { WiTime8 } from "react-icons/wi";
import { MdStadium } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

const NextMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const data = await getUpcomingMatches();

      setMatches(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-4 text-center">Próximos partidos</h4>

      <div className="row g-4">
        {matches.map((match) => (
          <div key={match.id} className="col-12 col-lg-6">
            <div className="welcome-card p-4 shadow-lg">
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

                    <small className="text-light">
                      Grupo {match.group_name}
                    </small>
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

                <span className="d-flex align-items-center">
                  <MdStadium className="me-2" />
                  {match.stadium}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextMatches;
