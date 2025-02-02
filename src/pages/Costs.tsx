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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

const costData = [
  { month: 'Jan', actual: 12000, projected: 15000 },
  { month: 'Feb', actual: 13500, projected: 14800 },
  { month: 'Mar', actual: 12800, projected: 14500 },
  { month: 'Apr', actual: 11500, projected: 14000 },
  { month: 'May', actual: 10800, projected: 13500 },
  { month: 'Jun', actual: 10200, projected: 13000 }
];

const costBreakdown = [
  { name: 'Compute', value: 45 },
  { name: 'Storage', value: 25 },
  { name: 'Database', value: 20 },
  { name: 'Network', value: 10 }
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'];

interface CostsProps {
  isDark: boolean;
}

function Costs({ isDark }: CostsProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Cost Analysis</h2>
        <p className="text-gray-600 dark:text-gray-300">Track and optimize your cloud spending</p>
      </div>

      {/* Cost Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <DollarSign className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">vs last month</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">$10,200</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current Month Spend</p>
          <div className="flex items-center text-green-500 dark:text-green-400">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">-5.8%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <TrendingDown className="h-6 w-6 text-green-500 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Annual Projection</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">$132,000</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Projected Annual Cost</p>
          <div className="flex items-center text-green-500 dark:text-green-400">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">-12.3% vs last year</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <TrendingUp className="h-6 w-6 text-purple-500 dark:text-purple-400" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Savings</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">$45,800</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Total Savings YTD</p>
          <div className="flex items-center text-purple-500 dark:text-purple-400">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+15.2% vs target</span>
          </div>
        </div>
      </div>

      {/* Cost Trends Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Cost Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="month" stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <YAxis stroke={isDark ? '#9CA3AF' : '#6B7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                    borderColor: isDark ? '#374151' : '#E5E7EB',
                    color: isDark ? '#FFFFFF' : '#000000'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="actual" name="Actual Cost" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="projected" name="Projected Cost" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Cost Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {costBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                    borderColor: isDark ? '#374151' : '#E5E7EB',
                    color: isDark ? '#FFFFFF' : '#000000'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Costs;