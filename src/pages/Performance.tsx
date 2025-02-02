import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const performanceData = [
  { time: '00:00', cpu: 45, memory: 62, latency: 120 },
  { time: '04:00', cpu: 55, memory: 65, latency: 125 },
  { time: '08:00', cpu: 75, memory: 78, latency: 145 },
  { time: '12:00', cpu: 85, memory: 85, latency: 160 },
  { time: '16:00', cpu: 70, memory: 80, latency: 140 },
  { time: '20:00', cpu: 60, memory: 70, latency: 130 }
];

interface PerformanceProps {
  isDark: boolean;
}

function Performance({ isDark }: PerformanceProps) {
  const metrics = [
    {
      name: 'System Health',
      value: 'Healthy',
      status: 'good',
      icon: CheckCircle
    },
    {
      name: 'Active Alerts',
      value: '2',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      name: 'Avg Response Time',
      value: '145ms',
      status: 'normal',
      icon: Zap
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Performance Monitoring</h2>
        <p className="text-gray-600 dark:text-gray-300">Real-time system performance metrics</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const statusColors = {
            good: 'text-green-500 dark:text-green-400',
            warning: 'text-yellow-500 dark:text-yellow-400',
            normal: 'text-blue-500 dark:text-blue-400'
          };

          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Icon className={`h-6 w-6 mr-3 ${statusColors[metric.status]}`} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{metric.name}</p>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{metric.value}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Resource Usage</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="time" stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <YAxis stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                    borderColor: isDark ? '#374151' : '#E5E7EB',
                    color: isDark ? '#FFFFFF' : '#000000'
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="cpu"
                  name="CPU Usage %"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="memory"
                  name="Memory Usage %"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Latency Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="time" stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <YAxis stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                    borderColor: isDark ? '#374151' : '#E5E7EB',
                    color: isDark ? '#FFFFFF' : '#000000'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="latency"
                  name="Response Time (ms)"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;