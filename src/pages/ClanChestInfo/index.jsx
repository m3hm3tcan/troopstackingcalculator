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
const VISIBLE_PERIOD_COUNT = 3;

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

const formatPeriodLabel = (periodIndex) => {
  const numericIndex = Number(periodIndex);

  return Number.isFinite(numericIndex)
    ? `Period ${numericIndex + 1}`
    : `Period ${periodIndex}`;
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
  const [memberSearch, setMemberSearch] = useState("");

  const periods = useMemo(() => groupRowsByPeriod(scoreRows), [scoreRows]);
  const visiblePeriods = useMemo(
    () => periods.slice(0, VISIBLE_PERIOD_COUNT),
    [periods],
  );
  const leaderboardRows = useMemo(() => {
    const currentPeriod = periods[0];

    if (!currentPeriod) {
      return [];
    }

    const memberScores = new Map();

    visiblePeriods.forEach((period) => {
      period.rows.forEach((row) => {
        const memberKey = row.member_id ?? row.member_name;
        const member = memberScores.get(memberKey) || {
          memberKey,
          memberName: row.member_name,
          scores: new Map(),
        };

        member.scores.set(period.periodIndex, normalizeNumber(row.total_points));
        memberScores.set(memberKey, member);
      });
    });

    return currentPeriod.rows
      .map((row) => {
        const memberKey = row.member_id ?? row.member_name;
        return (
          memberScores.get(memberKey) || {
            memberKey,
            memberName: row.member_name,
            scores: new Map(),
          }
        );
      })
      .sort((a, b) => {
        const pointsDifference =
          normalizeNumber(b.scores.get(currentPeriod.periodIndex)) -
          normalizeNumber(a.scores.get(currentPeriod.periodIndex));

        return pointsDifference || a.memberName.localeCompare(b.memberName);
      });
  }, [periods, visiblePeriods]);
  const filteredLeaderboardRows = useMemo(() => {
    const searchTerm = memberSearch.trim().toLocaleLowerCase();

    if (!searchTerm) {
      return leaderboardRows;
    }

    return leaderboardRows.filter((member) =>
      member.memberName.toLocaleLowerCase().includes(searchTerm),
    );
  }, [leaderboardRows, memberSearch]);
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
    setMemberSearch("");
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

        <section className="clan-chest-period">
          <div className="clan-chest-member-search">
            <input
              type="search"
              value={memberSearch}
              onChange={(event) => setMemberSearch(event.target.value)}
              placeholder="Search member name..."
              aria-label="Search member name"
            />
          </div>

          <div className="clan-chest-table-wrap">
            <table className="clan-chest-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Member Name</th>
                  {visiblePeriods.map((period, index) => (
                    <th key={period.periodIndex}>
                      <span className="clan-chest-period-label">
                        {index === 0
                          ? "Current"
                          : formatPeriodLabel(period.periodIndex)}
                        <small>
                          {formatDate(period.periodStart)} - {formatDate(period.periodEnd)}
                        </small>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboardRows.map((member) => {
                  const rank = leaderboardRows.indexOf(member) + 1;

                  return (
                    <tr key={member.memberKey}>
                      <td>{rank}</td>
                      <td>{member.memberName}</td>
                      {visiblePeriods.map((period) => {
                        const hasScore = member.scores.has(period.periodIndex);
                        const score = normalizeNumber(
                          member.scores.get(period.periodIndex),
                        );
                        const scoreClassName =
                          score > 10000
                            ? "clan-chest-score-high"
                            : score > 5000
                              ? "clan-chest-score-medium"
                              : "";

                        return (
                          <td
                            key={period.periodIndex}
                            className={hasScore ? scoreClassName : ""}
                          >
                            {hasScore ? formatNumber(score) : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ClanChestInfo;
