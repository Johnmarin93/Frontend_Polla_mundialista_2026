const API_URL = "https://polla-mundial-2026-74cb.onrender.com/api/matches";

export const getMatches = async () => {
  const res = await fetch(API_URL);

  const data = await res.json();

  return data;
};

export const getStandings = async () => {
  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/matches/standings",
  );

  return await response.json();
};

export const getUpcomingMatches = async () => {
  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/matches/upcoming",
  );

  return await response.json();
};
