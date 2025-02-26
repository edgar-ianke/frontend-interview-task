import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { Site, Test } from "../../types/types";

export const useTableData = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const sites = await axiosInstance.get("/sites").then((res) => res.data);
      const tests = await axiosInstance.get("/tests").then((res) => res.data);
      const res = tests.map(({id, name, type, status, siteId }: Test) => {
        const site = sites
          .find((siteEl: Site) => siteId === Number(siteEl.id))
          .url.replace(/^(https?:\/\/)?(www\.)?/, "");
          const formattedType = type.replace('_', '-');
        const formattedStatus =
          status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        const action = formattedStatus === "Draft" ? "Finalize" : "Results";
        return {id, name, type: formattedType, status: formattedStatus, site, action, siteId };
      });
      setTableData(res);
    };
    fetchData();
  }, []);
  return tableData;
};
