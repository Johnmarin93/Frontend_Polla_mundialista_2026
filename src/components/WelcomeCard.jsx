import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const WelcomeCard = () => {
  const { user } = useAuth();

  return (
    <div className="welcome-card mb-4 p-4 shadow-lg">
      <div className="welcome-content">
        <h1>👋 Hola, {user?.nombre.toUpperCase()}</h1>

        <p>Predice resultados, suma puntos y lucha por el primer lugar.</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
