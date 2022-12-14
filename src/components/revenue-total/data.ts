interface RevenueTotalType {
  percent: number;
  totalsales: number;
  target: number;
  lastweek: number;
  lastmonth: number;
}

const totalRevenue: RevenueTotalType = {
  percent: 71,
  totalsales: 420,
  target: -24.3,
  lastweek: 12.4,
  lastmonth: 9.4,
};

export type { RevenueTotalType };
export { totalRevenue };
