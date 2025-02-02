import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  Cloud,
  DollarSign,
  LineChart,
  MemoryStick as Memory,
  Server,
  Settings as SettingsIcon,
  Zap,
  Moon,
  Sun,
  Menu,
  X,
  Users,
  AlertTriangle,
  Shield
} from 'lucide-react';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import Costs from './pages/Costs';
import Performance from './pages/Performance';
import SettingsPage from './pages/Settings';
import Footer from './components/Footer';

function App() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navigation = [
    { id: 'overview', icon: BarChart3, label: 'Overview', component: Overview },
    { id: 'resources', icon: Server, label: 'Resources', component: Resources },
    { id: 'costs', icon: DollarSign, label: 'Cost Analysis', component: Costs },
    { id: 'performance', icon: Zap, label: 'Performance', component: Performance },
    { id: 'settings', icon: SettingsIcon, label: 'Settings', component: SettingsPage }
  ];

  const getCurrentComponent = () => {
    const page = navigation.find(item => item.id === selectedTab);
    return page?.component || Overview;
  };

  const PageComponent = getCurrentComponent();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDark ? 'dark:bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`fixed w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 transition-transform duration-300 lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } z-40`}>
        <div className="flex items-center gap-2 mb-8">
          <Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">CloudOptimize</h1>
        </div>
        
        <nav className="space-y-1">
          {navigation.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  selectedTab === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute bottom-4 left-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="p-8"
          >
            <PageComponent isDark={isDark} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;