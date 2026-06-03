import { PiSoccerBallFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer>
      <div
        className="mt-4 p-3  "
        style={{
          borderTop: "1px solid rgba(57,255,20,0.4)",
          boxShadow: "0 -8px 20px -12px #39ff14",
          color: "#dedacd",
          fontSize: "14px",
        }}
      >
        <div
          className="
      d-flex
      flex-column
      flex-md-row
      justify-content-between
      align-items-center
      text-center
      gap-2
    "
        >
          <p className="mb-0">
            © 2026 Polla Mundialista. Todos los derechos reservados.
          </p>

          <p className="mb-0">
            Creado con pasión futbolera{" "}
            <PiSoccerBallFill style={{ color: "#39ff14" }} /> por J.M
          </p>
        </div>
      </div>
    </footer>
  );
}
