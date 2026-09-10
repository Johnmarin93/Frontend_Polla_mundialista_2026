import { GiPodiumWinner } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { TbShirtSport } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { FcFlowChart } from "react-icons/fc";
const winners = () => {
  return (
    <div className="row mt-4 g-4">
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="text-center mb-4">
              <GiPodiumWinner
                size={40}
                className="d-block mx-auto mb-2 text-warning"
              />
              Ganadores
            </h4>
            <div
              className="rounded p-3 mb-3 text-center "
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥇 <strong>David Gonzalez</strong>
              <h3 className="color-primero ">$600.000</h3>
            </div>
            <div
              className="rounded p-3 mb-3 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥈 <strong>Claudia Ceballos</strong>
              <h4 className="color-segundo">$250.000</h4>
            </div>

            <div
              className="rounded p-3 mb-3 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              🥉 <strong>Manuel Diaz</strong>
              <h4 className="color-tercero">$150.000</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          {/* Título */}
          <div className="text-center mb-4">
            <LiaAwardSolid size={42} className="mb-2 text-warning" />
            <h4 className="mb-0 fw-bold">Premios</h4>
            <small className="text-white-50">Reconocimientos de la polla</small>
          </div>

          {/* Premio principal */}
          <div className="prize-main text-center p-3 mb-4 rounded-4">
            <div className="prize-icon mb-2">
              <TbShirtSport size={42} />
            </div>

            <span className="badge bg-warning text-dark mb-2">
              🏆 Premio especial
            </span>

            <h6 className="mb-1">Camiseta Colombia</h6>

            <h4 className="color-primero fw-bold mb-0">Juan David Toro</h4>
          </div>

          {/* Premio semanal */}
          <div className="weekly-prize p-3 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <CiCalendarDate size={28} className="me-2" />

              <div>
                <small className="text-white-50 d-block">Reconocimientos</small>
                <strong>Semana 1</strong>
              </div>
            </div>

            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Manuel Diaz</strong>
                <small>Patrón de la semana</small>
              </div>

              <span className="prize-value">$15.000</span>
            </div>

            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Lina Toro</strong>
                <small>Revelación de la semana</small>
              </div>

              <span className="prize-value">$15.000</span>
            </div>

            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Wilfor Rubiano</strong>
                <small>Sospechosamente acertado</small>
              </div>

              <span className="prize-value">$15.000</span>
            </div>
            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Leonardo Botero</strong>
                <small>Dormido de la semana</small>
              </div>

              <span className="prize-value">$2.000</span>
            </div>
            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Julian Cardona</strong>
                <small>Dormido de la semana</small>
              </div>

              <span className="prize-value">$2.000</span>
            </div>
            <div className="weekly-item">
              <span className="award-number"></span>

              <div>
                <strong>Hector Mosquera</strong>
                <small>Yo creia que sabia</small>
              </div>

              <span className="prize-value">$4.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="text-center mb-4">
              <LiaAwardSolid size={42} className="mb-2 text-warning" />
              <h4 className="mb-0 fw-bold">Premios</h4>
              <small className="text-white-50">
                Reconocimientos de la polla
              </small>
            </div>
            <div className="weekly-prize p-3 rounded-4">
              <div className="d-flex align-items-center mb-3">
                <CiCalendarDate size={28} className="me-2" />

                <div>
                  <small className="text-white-50 d-block">
                    Reconocimientos
                  </small>
                  <strong>Semana 2</strong>
                </div>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Claudia Ceballos</strong>
                  <small>La escaladora de la semana</small>
                </div>

                <span className="prize-value">$20.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Brayan Lopez</strong>
                  <small>Estatua de la semana</small>
                </div>

                <span className="prize-value">$15.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Danny González</strong>
                  <small>Estatua de la semana</small>
                </div>

                <span className="prize-value">$15.000</span>
              </div>
              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Lina Toro</strong>
                  <small>Caida Libre</small>
                </div>

                <span className="prize-value">$5.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="text-center mb-4">
              <LiaAwardSolid size={42} className="mb-2 text-warning" />
              <h4 className="mb-0 fw-bold">Premios</h4>
              <small className="text-white-50">
                Reconocimientos de la polla
              </small>
            </div>
            <div className="weekly-prize p-3 rounded-4">
              <div className="d-flex align-items-center mb-3">
                <CiCalendarDate size={28} className="me-2" />

                <div>
                  <small className="text-white-50 d-block">
                    Reconocimientos
                  </small>
                  <strong>Semana 3</strong>
                </div>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Sandra Cardona</strong>
                  <small>Cohete de la semana</small>
                </div>

                <span className="prize-value">$20.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Mauricio Orozco</strong>
                  <small>Siempre en la pelea</small>
                </div>

                <span className="prize-value">$10.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Juan David Toro</strong>
                  <small>Sprint Final</small>
                </div>

                <span className="prize-value">$10.000</span>
              </div>
              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Claudia Ceballos</strong>
                  <small>Francotiradora de la semana</small>
                </div>

                <span className="prize-value">$10.000</span>
              </div>
              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Ismael Agudelo</strong>
                  <small>El clavadista de la semana</small>
                </div>

                <span className="prize-value">$5.000</span>
              </div>
              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Hector Mosquera</strong>
                  <small>El Zombie</small>
                </div>

                <span className="prize-value">$1.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="text-center mb-4">
              <LiaAwardSolid size={42} className="mb-2 text-warning" />
              <h4 className="mb-0 fw-bold">Premios</h4>
              <small className="text-white-50">
                Reconocimientos de la polla
              </small>
            </div>
            <div className="weekly-prize p-3 rounded-4">
              <div className="d-flex align-items-center mb-3">
                <CiCalendarDate size={28} className="me-2" />

                <div>
                  <small className="text-white-50 d-block">
                    Reconocimientos
                  </small>
                  <strong>Semana 4</strong>
                </div>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>David Salazar</strong>
                  <small>Ave Fénix</small>
                </div>

                <span className="prize-value">$20.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Santiago Rubiano</strong>
                  <small>El Ninja</small>
                </div>

                <span className="prize-value">$10.000</span>
              </div>

              <div className="weekly-item">
                <span className="award-number"></span>

                <div>
                  <strong>Sandra Cardona</strong>
                  <small>Tictanic</small>
                </div>

                <span className="prize-value">$5.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="welcome-card p-4 shadow-lg h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="text-center mb-4">
              <LiaAwardSolid size={42} className="mb-2 text-warning" />
              <h4 className="mb-0 fw-bold">Premios</h4>
              <small className="text-white-50">
                Reconocimientos de la polla
              </small>
            </div>
            <div className="weekly-prize p-3 rounded-4">
              <div className="d-flex align-items-center mb-3">
                <CiCalendarDate size={28} className="me-2" />

                <div>
                  <small className="text-white-50 d-block">
                    Reconocimientos
                  </small>
                  <strong>Semana 5</strong>
                </div>
              </div>
              <div className="prize-main text-center p-3 mb-4 rounded-4">
                <div className="prize-icon mb-2">
                  <FcFlowChart size={42} />
                </div>

                <span className="badge bg-warning text-dark mb-2">
                  🏆 Acerto a los 4 semifinalistas
                </span>

                <h6 className="mb-1">$50.000</h6>

                <h4 className="color-primero fw-bold mb-0">Sandra Cardona</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default winners;
