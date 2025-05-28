import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/activityChart.css";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 200 },
  { name: "Thu", value: 278 },
  { name: "Fri", value: 189 },
  { name: "Sat", value: 239 },
  { name: "Sun", value: 349 },
];

function ActivityChart() {
  return (
    <div className="activity-chart">
      <h4>Weekly Activity</h4>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} margin={{ top: 15, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#20c997" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  );
}

export default ActivityChart;
