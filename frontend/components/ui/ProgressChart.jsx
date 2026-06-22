'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const COLORS = ['#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899', '#10b981'];

export function XPProgressChart({ data = [] }) {
  const chartData = data.length > 0 ? data : [
    { name: 'Week 1', xp: 120 },
    { name: 'Week 2', xp: 200 },
    { name: 'Week 3', xp: 350 },
    { name: 'Week 4', xp: 480 },
    { name: 'Week 5', xp: 620 },
    { name: 'Week 6', xp: 750 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorXP" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="stroke-dark-200 dark:stroke-dark-700" opacity={0.3} />
          <XAxis dataKey="name" stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <YAxis stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area type="monotone" dataKey="xp" stroke="#06b6d4" fillOpacity={1} fill="url(#colorXP)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function ActivityBarChart({ data = [] }) {
  const chartData = data.length > 0 ? data : [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.2 },
    { name: 'Wed', hours: 1.8 },
    { name: 'Thu', hours: 4.1 },
    { name: 'Fri', hours: 3.5 },
    { name: 'Sat', hours: 5.2 },
    { name: 'Sun', hours: 2.0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="stroke-dark-200 dark:stroke-dark-700" opacity={0.3} />
          <XAxis dataKey="name" stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <YAxis stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Bar dataKey="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function SkillsPieChart({ data = [] }) {
  const chartData = data.length > 0 ? data : [
    { name: 'Science', value: 35 },
    { name: 'Coding', value: 25 },
    { name: 'Math', value: 20 },
    { name: 'Physics', value: 12 },
    { name: 'Chemistry', value: 8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function StreakLineChart({ data = [] }) {
  const chartData = data.length > 0 ? data : [
    { day: '1', streak: 1 },
    { day: '2', streak: 2 },
    { day: '3', streak: 3 },
    { day: '4', streak: 4 },
    { day: '5', streak: 5 },
    { day: '6', streak: 6 },
    { day: '7', streak: 7 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="stroke-dark-200 dark:stroke-dark-700" opacity={0.3} />
          <XAxis dataKey="day" stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <YAxis stroke="currentColor" className="text-dark-500 dark:text-dark-400" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', 
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Line type="monotone" dataKey="streak" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
