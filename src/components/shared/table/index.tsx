import React, { useEffect, useState } from "react";
import s from "./table.module.css"; // Импортируем модульные стили
import chevronDown from "../../../assets/chevron-down.svg";
import chevronUp from "../../../assets/chevron-up.svg";
import searchIcon from "../../../assets/search.svg";
import { sortTable } from "../../../utils/sortTable";
import { Link } from "react-router";
import { TableData } from "../../../types/types";

const statusClasses: Record<string, string> = {
  Online: s.online,
  Paused: s.paused,
  Draft: s.draft,
  Stopped: s.stopped,
};
const actionClasses: Record<string, string> = {
  Results: s.action_results,
  Finalize: s.action_finalize,
};
const borderColors: Record<string, string> = {
  "1": s.nameTd_market,
  "2": s.nameTd_delivery,
  "3": s.nameTd_games,
};

type Props = {
  data: TableData;
};
const Table = ({ data }: Props) => {
  const [filteredData, setFilteredData] = useState<Props["data"]>([]);
  const [search, setSearch] = useState("");
  const [sortSettings, setSortSettings] = useState({ ASC: true, col: "TYPE" });
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilteredData(filtered);
  }, [search, data]);
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSort =
    (ASC: boolean, col: "NAME" | "TYPE" | "STATUS" | "SITE") => () => {
      if (sortSettings.col !== col) {
        setSortSettings({ ASC: true, col });
      } else {
        setSortSettings({ ASC, col });
      }
      const sortedData = sortTable(filteredData, ASC ? "ASC" : "DESC", col);
      setFilteredData(sortedData);
    };

  const resetSearch = () => {
    setSearch("");
  };
  return (
    <>
      <div className={s.search}>
        <img className={s.searchImage} src={searchIcon} alt="search" />
        <input
          className={s.searchInput}
          value={search}
          onChange={onSearchChange}
          placeholder="What test are you looking for?"
        />
        <p className={s.itemsCount}>{filteredData.length} tests</p>
      </div>
      {filteredData.length > 0 ? (
        <table className={s.customTable}>
          <thead>
            <tr>
              <th>
                <div
                  className={s.tableHead}
                  onClick={handleSort(!sortSettings.ASC, "NAME")}
                >
                  <p>NAME</p>
                  {sortSettings.col === "NAME" && (
                    <img
                      className={s.chevron}
                      src={sortSettings.ASC ? chevronUp : chevronDown}
                      alt="chevrondown"
                    />
                  )}
                </div>
              </th>
              <th>
                <div
                  className={s.tableHead}
                  onClick={handleSort(!sortSettings.ASC, "TYPE")}
                >
                  <p>TYPE</p>
                  {sortSettings.col === "TYPE" && (
                    <img
                      className={s.chevron}
                      src={sortSettings.ASC ? chevronUp : chevronDown}
                      alt="chevrondown"
                    />
                  )}
                </div>
              </th>
              <th>
                <div
                  className={s.tableHead}
                  onClick={handleSort(!sortSettings.ASC, "STATUS")}
                >
                  <p>STATUS</p>
                  {sortSettings.col === "STATUS" && (
                    <img
                      className={s.chevron}
                      src={sortSettings.ASC ? chevronUp : chevronDown}
                      alt="chevrondown"
                    />
                  )}
                </div>
              </th>
              <th>
                <div
                  className={s.tableHead}
                  onClick={handleSort(!sortSettings.ASC, "SITE")}
                >
                  <p>SITE</p>
                  {sortSettings.col === "SITE" && (
                    <img
                      className={s.chevron}
                      src={sortSettings.ASC ? chevronUp : chevronDown}
                      alt="chevrondown"
                    />
                  )}
                </div>
              </th>
              <th style={{ visibility: "hidden" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className={s.tableRow}>
                <td className={`${s.nameTd} ${borderColors[row.siteId]}`}>
                  {row.name}
                </td>
                <td className={s.typeTd}>{row.type}</td>
                <td className={statusClasses[row.status]}>{row.status}</td>
                <td className={s.siteTd}>{row.site}</td>
                <td>
                  <Link to={`/${row.action.toLowerCase()}/${row.id}`} state={{name: row.name}}>
                    <button
                      className={`${s.action} ${actionClasses[row.action]}`}
                    >
                      {row.action}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={s.noResults}>
          <h3 style={{ fontWeight: "600" }}>
            Your search did not match any results.
          </h3>
          <button
            onClick={resetSearch}
            className={`${s.action} ${s.action_results}`}
          >
            reset
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
