import axios from "axios";
const API_URL = "https://polla-mundial-2026-74cb.onrender.com/api/users";
//"https://polla-mundial-2026-74cb.onrender.com/api/users";
// "http://localhost:3001/api/users";

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  return response.data;
};

export const changePassword = async (
  currentPassword,

  newPassword,
) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/users/change-password",

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        currentPassword,

        newPassword,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Error");
  }

  return data;
};
