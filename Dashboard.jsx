import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const summaryStats = {
    totalFiles: 1240,
    daysAnalyzed: 365,
    topMood: "Energetic"
  };

  const moodData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 59 },
    { month: 'Mar', score: 80 },
    { month: 'Apr', score: 81 },
    { month: 'May', score: 56 },
    { month: 'Jun', score: 55 },
    { month: 'Jul', score: 40 },
    { month: 'Aug', score: 70 },
    { month: 'Sep', score: 85 },
    { month: 'Oct', score: 90 },
    { month: 'Nov', score: 88 },
    { month: 'Dec', score: 95 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Life Context Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500 text-sm">Total Files Analyzed</h3>
          <p className="text-2xl font-bold">{summaryStats.totalFiles}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500 text-sm">Timeline Span</h3>
          <p className="text-2xl font-bold">{summaryStats.daysAnalyzed} Days</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500 text-sm">Dominant Mood</h3>
          <p className="text-2xl font-bold text-blue-600">{summaryStats.topMood}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Mood Trends (Yearly)</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#8884d8" 
                strokeWidth={2} 
                dot={{ r: 4 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Key Life Phases</h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span><strong>Early Year:</strong> Focused on career growth and coding projects.</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
            <span><strong>Mid Year:</strong> heavy travel and social events.</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            <span><strong>Late Year:</strong> Family time and holidays.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;