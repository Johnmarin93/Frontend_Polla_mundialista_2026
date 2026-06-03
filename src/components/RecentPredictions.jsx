import {

  useEffect,

  useState,

} from "react";

import {

  getRecentPredictions,

} from "../services/adminService";

const RecentPredictions = () => {

  const [predictions, setPredictions] =
    useState([]);

  useEffect(() => {

    loadPredictions();

  }, []);

  const loadPredictions =
    async () => {

      try {

        const data =

          await getRecentPredictions();

        setPredictions(data);

      } catch (error) {

        console.log(error);
      }
  };

  return (

    <div className="card p-4 shadow">

      <h4 className="mb-4">

        ⚡ Actividad reciente

      </h4>

      {

        predictions.map(

          (prediction, index) => (

            <div

              key={index}

              className="
                border-bottom
                py-2
              "
            >

              <strong>

                {
                  prediction.nombre
                }

              </strong>

              {" → "}

              {

                prediction.home_team
              }

              {" "}

              {

                prediction.predicted_home_score
              }

              {" - "}

              {

                prediction.predicted_away_score
              }

              {" "}

              {

                prediction.away_team
              }

            </div>
          )
        )
      }

    </div>
  );
};

export default RecentPredictions;