import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./index.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const numberFormatter = new Intl.NumberFormat("en");
const CLAN_KEY_STORAGE_KEY = "hunililer_clan_chest_key";

const normalizeNumber = (value) => {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatNumber = (value) => numberFormatter.format(normalizeNumber(value));

const formatDate = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return dateFormatter.format(date);
};

const groupRowsByPeriod = (rows) => {
  const grouped = new Map();

  rows.forEach((row) => {
    const periodIndex = row.period_index;
    const period = grouped.get(periodIndex);

    if (period) {
      period.rows.push(row);
      return;
    }

    grouped.set(periodIndex, {
      periodIndex,
      periodStart: row.period_start,
      periodEnd: row.period_end,
      rows: [row],
    });
  });

  return Array.from(grouped.values()).sort((a, b) => {
    const startA = new Date(a.periodStart).getTime();
    const startB = new Date(b.periodStart).getTime();

    if (Number.isFinite(startA) && Number.isFinite(startB)) {
      return startB - startA;
    }

    return Number(b.periodIndex) - Number(a.periodIndex);
  });
};

const ClanChestInfo = () => {
  const [clanKeyInput, setClanKeyInput] = useState(
    () => localStorage.getItem(CLAN_KEY_STORAGE_KEY) || "",
  );
  const [connectedClanKey, setConnectedClanKey] = useState("");
  const [scoreRows, setScoreRows] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const periods = useMemo(() => groupRowsByPeriod(scoreRows), [scoreRows]);
  const clanName = scoreRows[0]?.clan_name || "";
  const isConnected = connectedClanKey && !error;

  const connectWithClanKey = useCallback(async (clanKey) => {
    if (!clanKey) {
      setError("Enter your clan web app key to connect.");
      return;
    }

    if (!supabase) {
      setError(
        "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
      );
      return;
    }

    setIsLoading(true);
    setError("");
    setScoreRows([]);

    const { data, error: rpcError } = await supabase.rpc(
      "get_web_clan_member_score_periods",
      {
        p_web_app_key: clanKey,
      },
    );

    setIsLoading(false);

    if (rpcError) {
      setError(
        rpcError.message || "Unable to connect. Check the clan key and try again.",
      );
      return;
    }

    const rows = Array.isArray(data) ? data : [];

    if (rows.length === 0) {
      setError("No clan score periods were found for this key.");
      return;
    }

    setConnectedClanKey(clanKey);
    setScoreRows(rows);
    localStorage.setItem(CLAN_KEY_STORAGE_KEY, clanKey);
  }, []);

  useEffect(() => {
    const savedClanKey = localStorage.getItem(CLAN_KEY_STORAGE_KEY);

    if (savedClanKey) {
      connectWithClanKey(savedClanKey);
    }
  }, [connectWithClanKey]);

  const handleConnect = async (event) => {
    event.preventDefault();
    await connectWithClanKey(clanKeyInput.trim());
  };

  const handleChangeClan = () => {
    setClanKeyInput("");
    setConnectedClanKey("");
    setScoreRows([]);
    setError("");
    setIsLoading(false);
    localStorage.removeItem(CLAN_KEY_STORAGE_KEY);
  };

  if (!isConnected) {
    return (
      <main className="clan-chest-page clan-chest-connect-page">
        <section className="clan-chest-connect-panel">
          <p className="clan-chest-eyebrow">Clan Chest</p>
          <h1>Connect to your leaderboard</h1>

          <form className="clan-chest-connect-form" onSubmit={handleConnect}>
            <label htmlFor="clan-web-app-key">Clan web app key</label>
            <input
              id="clan-web-app-key"
              type="password"
              autoComplete="off"
              value={clanKeyInput}
              onChange={(event) => setClanKeyInput(event.target.value)}
              placeholder="Enter clan key"
              disabled={isLoading}
            />
            {error ? <p className="clan-chest-error">{error}</p> : null}
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Connecting..." : "Connect"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="clan-chest-page">
      <section className="clan-chest-shell">
        <header className="clan-chest-header">
          <div>
            <p className="clan-chest-eyebrow">Leaderboard</p>
            <h1>{clanName}</h1>
          </div>
          <button
            className="clan-chest-secondary-button"
            type="button"
            onClick={handleChangeClan}
          >
            Change Clan
          </button>
        </header>

        <div className="clan-chest-period-list">
          {periods.map((period) => (
            <section className="clan-chest-period" key={period.periodIndex}>
              <div className="clan-chest-period-heading">
                <h2>
                  {formatDate(period.periodStart)} - {formatDate(period.periodEnd)}
                </h2>
                <span>Period {period.periodIndex}</span>
              </div>

              <div className="clan-chest-table-wrap">
                <table className="clan-chest-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Member Name</th>
                      <th>Chest Count</th>
                      <th>Total Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {period.rows.map((row, index) => (
                      <tr key={`${row.period_index}-${row.member_id}-${index}`}>
                        <td>{index + 1}</td>
                        <td>{row.member_name}</td>
                        <td>{formatNumber(row.chest_count)}</td>
                        <td>{formatNumber(row.total_points)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ClanChestInfo;
