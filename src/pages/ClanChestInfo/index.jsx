import { useEffect, useState } from "react";
import "./index.css";
import ClanTable from "../../components/ClanTable";

const ClanChestInfo = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://chesttrackerdb-1374.restdb.io/rest/chestinfotable",
          {
            headers: {
              "Content-Type": "application/json",
              "x-apikey": import.meta.env.VITE_API_KEY,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className=" clan-container loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="clan-container">
      <ClanTable members={members} />
    </div>
  );
};

export default ClanChestInfo;
