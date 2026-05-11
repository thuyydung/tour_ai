import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const userData = [
  { name: 'T2', users: 400 },
  { name: 'T3', users: 700 },
  { name: 'T4', users: 600 },
  { name: 'T5', users: 800 },
  { name: 'T6', users: 500 },
  { name: 'T7', users: 900 },
  { name: 'CN', users: 1000 },
];

const UserChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip cursor={{fill: '#f3f4f6'}} />
          <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;