import { useEffect, useState } from "react";

const CountdownCard = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2026-06-11T14:00:00");

    const interval = setInterval(() => {
      const now = new Date();

      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),

        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),

        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-card mb-4 text-center p-4 shadow-lg">
      <p className="countdown-title">EL MUNDIAL COMIENZA EN</p>

      <div className="countdown-grid justify-content-center">
        <TimeBox value={timeLeft.days} label="DÍAS" />

        <TimeBox value={timeLeft.hours} label="HORAS" />

        <TimeBox value={timeLeft.minutes} label="MIN" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }) => {
  return (
    <div className="time-box">
      <h1>{value ?? 0}</h1>

      <span>{label}</span>
    </div>
  );
};

export default CountdownCard;
