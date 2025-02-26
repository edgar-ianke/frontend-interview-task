export type Site = {
  id: string;
  url: string;
};

export type Test = {
  id: string;
  name: string;
  type: string;
  status: string;
  siteId: number;
};

export type TableData = Array<{
  id: number;
  name: string;
  type: string;
  status: string;
  site: string;
  action: string;
  siteId: string;
}>