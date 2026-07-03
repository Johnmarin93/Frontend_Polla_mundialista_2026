const API_URL = "https://polla-mundial-2026-74cb.onrender.com/api/predictions";

export const createPrediction = async (predictionData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(predictionData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Error creando pronóstico");
  }

  return data;
};

export const getUserPredictions = async (userId) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Error obteniendo pronósticos");
  }

  return data;
};
