import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function VideoGrid() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        setLoading(false);

        const users = await response.json();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.error("Fetch failed:", error.message);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="">Loading...</p>;
  if (error) return <p className="">Failed to fetch❌</p>;
  return (
    <>
      <div className="videos">
        {users.map((user) => (
          <VideoCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
export default VideoGrid;
