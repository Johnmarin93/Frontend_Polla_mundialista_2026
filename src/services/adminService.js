const API_URL = "https://polla-mundial-2026-74cb.onrender.com/api/matches";

export const updateResult = async (id, scores) => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/${id}/result`,

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(scores),
    },
  );

  return await res.json();
};

export const getStats = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/admin/stats",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await res.json();
};

export const getUsers = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/admin/users",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};

export const updateUserRole = async (id, rol_id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://polla-mundial-2026-74cb.onrender.com/api/admin/users/${id}/role`,

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        rol_id,
      }),
    },
  );

  return await response.json();
};

export const updateUserStatus = async (id, is_active) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://polla-mundial-2026-74cb.onrender.com/api/admin/users/${id}/status`,

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        is_active,
      }),
    },
  );

  return await response.json();
};

export const getTopUsers = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/admin/top-users",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};

export const getRecentPredictions = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/admin/recent-predictions",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};

export const getRecentResults = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/admin/recent-results",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};

export const resetPassword = async (userId, newPassword) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://polla-mundial-2026-74cb.onrender.com/api/admin/users/${userId}/reset-password`,

    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        newPassword,
      }),
    },
  );

  return await response.json();
};
