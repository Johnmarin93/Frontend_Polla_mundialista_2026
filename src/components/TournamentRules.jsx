import { FaTrophy, FaMedal, FaFutbol } from "react-icons/fa";
import { GiTrophyCup, GiSoccerBall } from "react-icons/gi";
import { FcRules } from "react-icons/fc";
import { BsPatchQuestionFill } from "react-icons/bs";

const TournamentRules = () => {
  return (
    <div className="row mt-4 g-4">
      {/* PREMIOS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <h4 className="text-center mb-4">
            <GiTrophyCup className="mb-2" /> Premiación
          </h4>

          <div className="text-center mt-5">
            <p>
              <FaMedal size={20} color="#FFD700" /> Primer puesto
              <strong> $600.000</strong>
            </p>
            <p>
              <FaMedal size={20} color="#C0C0C0" /> Segundo puesto
              <strong> $250.000</strong>
            </p>
            <p>
              <FaMedal size={20} color="#CD7F32" /> Tercer puesto{" "}
              <strong> $150.000</strong>
            </p>
          </div>
        </div>
      </div>

      {/* PUNTOS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <h4 className="text-center mb-4">
            <GiSoccerBall className="mb-2" /> Puntuación
          </h4>

          <p>
            🎯 Exacto = <strong style={{ color: "#39ff14" }}>5 pts</strong> Ej:
            Pronóstico 2-0 y el partido termina 2-0.
          </p>
          <p>
            ⚽ Ganador + diferencia ={" "}
            <strong style={{ color: "#39ff14" }}>3 pts</strong> Ej:Pronóstico
            2-1 y el partido termina 3-2. Acertaste el ganador y la diferencia
            de gol (1)
          </p>
          <p>
            🏆 Solo ganador ={" "}
            <strong style={{ color: "#39ff14" }}>2 pts</strong> Ej: Pronóstico
            3-1 y el partido termina 1-0. Acertaste únicamente el ganador.
          </p>
          <p>
            🤝 Empate = <strong style={{ color: "#39ff14" }}>2 pts</strong> Ej:
            Pronóstico 1-1 y el partido termina 0-0. Acertaste que el resultado
            sería empate.
          </p>

          <hr />

          <p className="mb-0">🔥 Desde 16avos los puntos valen el doble.</p>
        </div>
      </div>

      {/* REGLAS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <h4 className="text-center mb-4">
            <FcRules className="mb-2" /> Reglas
          </h4>

          <ul className="mb-0">
            <li>
              Solo cuentan los 90 minutos reglamentarios más el tiempo de
              adición.
            </li>
            <li>No cuentan penales.</li>
            <li>No cuentan tiempos extra.</li>
            <li>
              Los pronósticos se cierran 15 minutos antes de cada partido.
            </li>
            <li>Se pueden ingresar todos los marcadores desde el inicio.</li>
            <li>
              Se pueden modificar los marcadores hasta 15 minutos antes de cada
              partido
            </li>
            <li>El Ranking se actualiza despues de cada partido.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TournamentRules;
