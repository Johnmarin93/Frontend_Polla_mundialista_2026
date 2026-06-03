export const getUserStats = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://polla-mundial-2026-74cb.onrender.com/api/users/stats",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};
