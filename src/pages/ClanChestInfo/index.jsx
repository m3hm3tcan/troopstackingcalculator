import { useEffect, useState } from "react";
import "./index.css";
import ClanTable from "../../components/ClanTable";

const ClanChestInfo = () => {
  const [memberList, setMemberList] = useState([]);
  const [chestInfo, setChestInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-apikey": API_KEY,
        };

        // Run both requests in parallel → faster UI
        const [membersRes, chestRes] = await Promise.all([
          fetch("https://chesttrackerdb-1374.restdb.io/rest/MemberTable", {
            headers,
          }),
          fetch("https://chesttrackerdb-1374.restdb.io/rest/sbnclan", {
            headers,
          }),
        ]);

        if (!membersRes.ok) throw new Error("Failed to fetch member list");
        if (!chestRes.ok) throw new Error("Failed to fetch chest info");

        const membersData = await membersRes.json();
        const chestData = await chestRes.json();

        setMemberList(Array.isArray(membersData) ? membersData : []);
        setChestInfo(Array.isArray(chestData) ? chestData : []);
      } catch (err) {
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_KEY]);

  if (loading)
    return <p className="clan-container loading">Loading chest data...</p>;

  if (error) return <p className="clan-container error">Error: {error}</p>;

  return (
    <div className="clan-container">
      <ClanTable memberList={memberList} chestInfo={chestInfo} />
    </div>
  );
};

export default ClanChestInfo;
