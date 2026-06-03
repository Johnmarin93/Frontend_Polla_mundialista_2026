import { useEffect, useState } from "react";

import { getRecentResults } from "../services/adminService";

const RecentResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const data = await getRecentResults();

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card p-4 shadow">
      <h4 className="mb-4">🏁 Últimos resultados</h4>

      {results.map((match, index) => (
        <div
          key={index}
          className="
                d-flex
                justify-content-between
                border-bottom
                py-2
              "
        >
          <span>
            {match.home_team}{" "}
            <strong>
              {match.home_score}

              {" - "}

              {match.away_score}
            </strong>{" "}
            {match.away_team}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentResults;
