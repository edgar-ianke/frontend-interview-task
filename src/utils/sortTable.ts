import { TableData } from "../types/types";

export const sortTable = (
  table: TableData,
  order: "ASC" | "DESC",
  byColumn: "NAME" | "TYPE" | "STATUS" | "SITE"
) => {
  const statusOrderAsc = ["Online", "Paused", "Stopped", "Draft"];
  const statusOrderDesc = [...statusOrderAsc].reverse();

  const compareStrings = (a: string, b: string) => {
    return a.localeCompare(b);
  };

  const compareStatus = (a: string, b: string) => {
    const statusOrder = order === "ASC" ? statusOrderAsc : statusOrderDesc;
    return statusOrder.indexOf(a) - statusOrder.indexOf(b);
  };

  return table.sort((a, b) => {
    let comparison = 0;

    if (byColumn === "NAME") {
      comparison = compareStrings(a["name"], b["name"]);
    } else if (byColumn === "TYPE") {
      comparison = compareStrings(a["type"], b["type"]);
    } else if (byColumn === "STATUS") {
      comparison = compareStatus(a["status"], b["status"]);
    } else if (byColumn === "SITE") {
      comparison = compareStrings(a["site"], b["site"]);
    }

    return order === "ASC" ? comparison : -comparison;
  });
};
