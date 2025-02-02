import React from 'react';
import { Bell, Shield, Users, Database, Cloud } from 'lucide-react';

interface SettingsProps {
  isDark: boolean;
}

function Settings({ isDark }: SettingsProps) {
  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        {
          name: 'Cost Alerts',
          description: 'Get notified when spending exceeds thresholds',
          enabled: true
        },
        {
          name: 'Performance Alerts',
          description: 'Notifications for performance anomalies',
          enabled: true
        }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      settings: [
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          enabled: true
        },
        {
          name: 'API Key Management',
          description: 'Manage access tokens and permissions',
          enabled: false
        }
      ]
    },
    {
      title: 'Team',
      icon: Users,
      settings: [
        {
          name: 'User Management',
          description: 'Manage team access and roles',
          enabled: true
        },
        {
          name: 'Activity Logs',
          description: 'Track user actions and changes',
          enabled: true
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
        <p className="text-gray-600 dark:text-gray-300">Manage your platform preferences</p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {section.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white">
                        {setting.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {setting.description}
                      </p>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        setting.enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                      role="switch"
                      aria-checked={setting.enabled}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          setting.enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;