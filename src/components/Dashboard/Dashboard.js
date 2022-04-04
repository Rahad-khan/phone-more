import React, { useEffect, useState, PureComponent } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Sector,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-2xl text-blue-600 font-semibold">
          Month Wise Sell
        </h1>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Line name="Sell" type="monotone" dataKey="sell" stroke="#8884d8" />
        </LineChart>
      </div>
      <div>
        <h1 className="text-2xl text-blue-600 font-semibold">
          Investment VS Revenue
        </h1>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
      <div>
        <h1 className="text-2xl text-blue-600 font-semibold">
          Month Wise Sell
        </h1>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
