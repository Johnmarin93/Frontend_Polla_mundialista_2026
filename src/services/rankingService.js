const API_URL = "https://polla-mundial-2026-74cb.onrender.com/api/ranking";

export const getRanking = async () => {
  const res = await fetch(API_URL);

  const data = await res.json();

  return data;
};
