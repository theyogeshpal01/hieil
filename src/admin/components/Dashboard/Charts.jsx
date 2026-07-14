import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import './Charts.css';

const barData = [
  { name: 'Jan', orders: 0 },
  { name: 'Feb', orders: 4.0 },
  { name: 'Mar', orders: 1.0 },
  { name: 'Apr', orders: 0 },
  { name: 'May', orders: 0 },
  { name: 'Jun', orders: 0 },
  { name: 'Jul', orders: 0 },
  { name: 'Aug', orders: 0 },
  { name: 'Sep', orders: 0 },
  { name: 'Oct', orders: 0 },
  { name: 'Nov', orders: 0 },
  { name: 'Dec', orders: 0 },
];

const areaData = [
  { name: 'Jan', revenue: 0 },
  { name: 'Feb', revenue: 1000 },
  { name: 'Mar', revenue: 767342 },
  { name: 'Apr', revenue: 500 },
  { name: 'May', revenue: 0 },
  { name: 'Jun', revenue: 0 },
  { name: 'Jul', revenue: 0 },
  { name: 'Aug', revenue: 0 },
  { name: 'Sep', revenue: 0 },
  { name: 'Oct', revenue: 0 },
  { name: 'Nov', revenue: 0 },
  { name: 'Dec', revenue: 0 },
];

const pieData = [
  { name: 'Handcrafted Wooden Products', value: 400 },
  { name: 'Handcrafted Stone Products', value: 300 },
  { name: 'Handcrafted Metal Products', value: 300 },
  { name: 'Handcrafted Blue Pottery', value: 200 },
  { name: 'Luxury clock', value: 100 },
];

const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#2c3e50'];

const donutData = [
  { name: 'Processing', value: 30 },
  { name: 'Shipped', value: 50 },
  { name: 'Completed', value: 20 }
];
const DONUT_COLORS = ['#ff4b2b', '#00C49F', '#f2994a'];

const Charts = () => {
  return (
    <div className="charts-container">
      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Monthly Order Distribution (2026)</h3>
        <div className="chart-inner">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="orders" fill="#8884d8" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Revenue Growth Trend (?)</h3>
        <div className="revenue-summary">
          <h2>₹767,342 <span>Year to Date</span></h2>
        </div>
        <div className="chart-inner">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#00C49F" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-row">
        <div className="chart-wrapper half-width">
          <h3 className="chart-title">Product Cat-Wise Balance</h3>
          <div className="chart-inner flex-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={0} outerRadius={100} paddingAngle={0} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="custom-legend">
             {pieData.map((entry, index) => (
               <span key={index} className="legend-item">
                 <span className="legend-color" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                 {entry.name}
               </span>
             ))}
          </div>
        </div>

        <div className="chart-wrapper half-width">
          <h3 className="chart-title">Fulfillment Status</h3>
          <div className="chart-inner flex-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={donutData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value">
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={DONUT_COLORS[index % DONUT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="custom-legend">
             {donutData.map((entry, index) => (
               <span key={index} className="legend-item">
                 <span className="legend-color" style={{backgroundColor: DONUT_COLORS[index % DONUT_COLORS.length]}}></span>
                 {entry.name}
               </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
