import { FaTrophy, FaMedal, FaFutbol } from "react-icons/fa";
import { GiTrophyCup, GiSoccerBall } from "react-icons/gi";
import {
  FcRules,
  FcAlarmClock,
  FcCancel,
  FcPrivacy,
  FcPlus,
  FcEditImage,
  FcBullish,
} from "react-icons/fc";
import { BsPatchQuestionFill } from "react-icons/bs";

const TournamentRules = () => {
  return (
    <div className="row mt-4 g-4">
      {/* PREMIOS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="text-center mb-4">
              <GiTrophyCup
                size={40}
                className="d-block mx-auto mb-2 text-warning"
              />
              Premiación
            </h4>
            <div
              className="rounded p-3 mb-3 text-center "
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥇 <strong>1° Lugar</strong>
              <h3 className="color-primero ">$600.000</h3>
            </div>

            <div
              className="rounded p-3 mb-3 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥈 <strong>2° Lugar</strong>
              <h4 className="color-segundo">$250.000</h4>
            </div>

            <div
              className="rounded p-3 mb-3 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥉 <strong>3° Lugar</strong>
              <h4 className="color-tercero">$150.000</h4>
            </div>
          </div>
        </div>
      </div>

      {/* PUNTOS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <h4 className="text-center mb-4">
            <GiSoccerBall
              size={40}
              className="d-block mx-auto mb-2 text-success"
            />
            Puntuación
          </h4>
          <div className="mb-3 p-2 border-start border-4 border-success">
            🎯 Marcador Exacto = <strong> 5 pts</strong>
          </div>

          <div className="mb-3 p-2 border-start border-4 border-info">
            ⚽ Ganador + diferencia = <strong> 3 pts</strong>
          </div>

          <div className="mb-3 p-2 border-start border-4 border-warning">
            🏆 Solo ganador = <strong> 2 pts</strong>
          </div>

          <div className="mb-3 p-2 border-start border-4 border-secondary">
            🤝 Empate = <strong> 2 pts</strong>
          </div>

          <div className="alert alert-success mt-3 mb-0">
            🔥 Desde 16avos los puntos valen el doble
          </div>
        </div>
      </div>

      {/* REGLAS */}
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <h4 className="text-center mb-4">
            <FcRules size={40} className="d-block mx-auto mb-2" />
            Reglas
          </h4>
          <div className="mb-2 p-2 ">
            <FcAlarmClock size={20} className="mb-1" /> Solo cuentan los 90
            minutos + adición
          </div>

          <div className="mb-2 p-2 ">
            <FcCancel size={20} className="mb-1" /> No cuentan penales ni
            tiempos extra
          </div>

          <div className="mb-2 p-2 ">
            <FcPrivacy size={20} className="mb-1" /> Los pronósticos cierran 15
            min antes del partido
          </div>

          <div className="mb-2 p-2">
            <FcPlus size={20} className="mb-1" /> Puedes ingresar todos los
            pronosticos.
          </div>

          <div className="mb-2 p-2">
            <FcEditImage size={20} className="mb-1" /> Puedes editar los
            pronosticos 15 minutos antes del partdo.
          </div>

          <div className="mb-2 p-2 ">
            <FcBullish size={20} className="mb-1" /> El ranking se actualiza
            después de cada partido.
          </div>

          <div className="alert alert-success mt-3 mb-0">
            <h6>🏆 Desempate</h6>

            <ol className="mb-0">
              <li>Fecha y hora de registro.</li>
              <li>Fecha y hora de confirmación del pago.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRules;
