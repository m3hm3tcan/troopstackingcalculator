import { useEffect, useState } from "react";
import "./index.css";
import ClanTable from "../../components/ClanTable";

const ClanChestInfo = () => {
  const [memberList, setMemberList] = useState([]);
  const [chestInfo, setChestInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch member list
        const membersRes = await fetch(
          "https://chesttrackerdb-1374.restdb.io/rest/MemberTable",
          {
            headers: {
              "Content-Type": "application/json",
              "x-apikey": import.meta.env.VITE_API_KEY,
            },
          }
        );
        if (!membersRes.ok) throw new Error("Failed to fetch members");
        const membersData = await membersRes.json();
        setMemberList(membersData);
        console.log(membersData);

        // Fetch chest info
        const chestRes = await fetch(
          "https://chesttrackerdb-1374.restdb.io/rest/chestinfotable",
          {
            headers: {
              "Content-Type": "application/json",
              "x-apikey": import.meta.env.VITE_API_KEY,
            },
          }
        );
        if (!chestRes.ok) throw new Error("Failed to fetch chest info");
        const chestData = await chestRes.json();
        setChestInfo(chestData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="clan-container loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="clan-container">
      <ClanTable memberList={memberList} chestInfo={chestInfo} />
    </div>
  );
};

export default ClanChestInfo;
