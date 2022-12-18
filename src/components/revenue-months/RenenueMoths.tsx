import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../sass/components/revenue-months.scss";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 800 },
  { name: "Apr", total: 1600 },
  { name: "May", total: 900 },
  { name: "Jun", total: 1700 },
];

const RenenueMoths = () => {
  return (
    <div className="card revenue__months">
      <h2 className="header">Last 6 Months (Revenue)</h2>
      <ResponsiveContainer className="chart">
        <AreaChart
          className="chart__area-chart"
          data={data}
          // margin={{ right: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStartEnd" axisLine={false} />
          <YAxis hide />
          <Tooltip />
          <Area
            type="natural"
            dataKey="total"
            stroke="#dee2e6"
            fill="#339af0"
            className="chart__area"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(RenenueMoths);
