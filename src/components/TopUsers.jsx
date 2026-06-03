import { useEffect, useState } from "react";

import { getTopUsers } from "../services/adminService";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadTopUsers();
  }, []);

  const loadTopUsers = async () => {
    try {
      const data = await getTopUsers();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card p-4 shadow">
      <h4 className="mb-4">🏆 Top 5 Ranking</h4>

      {users.map((user, index) => (
        <div
          key={index}
          className="
                d-flex
                justify-content-between
                border-bottom
                py-2
              "
        >
          <span>
            {index + 1}. {user.nombre}
          </span>

          <strong>{user.total_points} pts</strong>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;
