import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { DollarSign, Server, MemoryStick as Memory, LineChart } from 'lucide-react';

const data = [
  { name: 'Jan', costs: 4000, usage: 2400 },
  { name: 'Feb', costs: 3000, usage: 1398 },
  { name: 'Mar', costs: 2000, usage: 9800 },
  { name: 'Apr', costs: 2780, usage: 3908 },
  { name: 'May', costs: 1890, usage: 4800 },
  { name: 'Jun', costs: 2390, usage: 3800 }
];

interface OverviewProps {
  isDark: boolean;
}

function Overview({ isDark }: OverviewProps) {
  const metrics = {
    costSavings: '32.5%',
    resourceUtilization: '78%',
    activeInstances: 24,
    monthlySpend: '$12,450'
  };

  const recommendations = [
    {
      title: 'Rightsize EC2 Instances',
      description: 'Reduce costs by 25% by optimizing instance types',
      impact: 'High',
      savings: '$3,200/month'
    },
    {
      title: 'Remove Unused Volumes',
      description: 'Delete 8 unattached EBS volumes',
      impact: 'Medium',
      savings: '$180/month'
    },
    {
      title: 'Reserved Instance Coverage',
      description: 'Increase RI coverage for consistent workloads',
      impact: 'High',
      savings: '$2,800/month'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Cloud Overview</h2>
        <p className="text-gray-600 dark:text-gray-300">Monitor and optimize your cloud resources</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Cost Savings', value: metrics.costSavings, icon: DollarSign, color: 'green' },
          { label: 'Resource Utilization', value: metrics.resourceUtilization, icon: Memory, color: 'blue' },
          { label: 'Active Instances', value: metrics.activeInstances, icon: Server, color: 'purple' },
          { label: 'Monthly Spend', value: metrics.monthlySpend, icon: LineChart, color: 'red' }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-${metric.color}-50 dark:bg-${metric.color}-900/20 mb-4`}>
                <Icon className={`h-6 w-6 text-${metric.color}-500 dark:text-${metric.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{metric.label}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Cost & Usage Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCosts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
              <XAxis dataKey="name" stroke={isDark ? '#9CA3AF' : '#6B7280'} />
              <YAxis stroke={isDark ? '#9CA3AF' : '#6B7280'} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                  borderColor: isDark ? '#374151' : '#E5E7EB',
                  color: isDark ? '#FFFFFF' : '#000000'
                }}
              />
              <Area
                type="monotone"
                dataKey="costs"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorCosts)"
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorUsage)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Optimization Recommendations</h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">{rec.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{rec.description}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    rec.impact === 'High' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                  }`}>
                    {rec.impact} Impact
                  </span>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">{rec.savings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;