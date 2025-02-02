import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Server, Database, HardDrive } from 'lucide-react';

const resourceData = [
  { name: 'US East', compute: 65, storage: 45, database: 30 },
  { name: 'US West', compute: 45, storage: 35, database: 25 },
  { name: 'EU West', compute: 55, storage: 40, database: 35 },
  { name: 'Asia', compute: 40, storage: 30, database: 20 }
];

interface ResourcesProps {
  isDark: boolean;
}

function Resources({ isDark }: ResourcesProps) {
  const resources = [
    {
      type: 'Compute',
      total: 184,
      active: 156,
      icon: Server,
      color: 'blue'
    },
    {
      type: 'Storage',
      total: 2.4,
      unit: 'TB',
      used: 1.8,
      icon: HardDrive,
      color: 'green'
    },
    {
      type: 'Database',
      total: 12,
      active: 8,
      icon: Database,
      color: 'purple'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Resources</h2>
        <p className="text-gray-600 dark:text-gray-300">Monitor your cloud resource allocation</p>
      </div>

      {/* Resource Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-${resource.color}-50 dark:bg-${resource.color}-900/20 mr-4`}>
                  <Icon className={`h-6 w-6 text-${resource.color}-500 dark:text-${resource.color}-400`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{resource.type}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {resource.unit 
                      ? `${resource.used} / ${resource.total} ${resource.unit}`
                      : `${resource.active} / ${resource.total} active`
                    }
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`bg-${resource.color}-500 h-2.5 rounded-full`}
                  style={{ width: `${(resource.unit ? resource.used/resource.total : resource.active/resource.total) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resource Distribution Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Resource Distribution by Region</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceData}>
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
              <Legend />
              <Bar dataKey="compute" name="Compute" fill="#3B82F6" />
              <Bar dataKey="storage" name="Storage" fill="#10B981" />
              <Bar dataKey="database" name="Database" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Resources;