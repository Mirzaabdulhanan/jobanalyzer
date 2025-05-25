import React from 'react';
import { BarChart3, Users, MapPin, Briefcase } from 'lucide-react';
import Button from '../ui/Button';

interface DashboardHeaderProps {
  onTimeRangeChange: (range: string) => void;
  selectedTimeRange: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  onTimeRangeChange, 
  selectedTimeRange 
}) => {
  const timeRanges = [
    { label: '7 Days', value: '7d' },
    { label: '30 Days', value: '30d' },
    { label: '90 Days', value: '90d' },
    { label: '1 Year', value: '1y' },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Market Trends</h1>
          <p className="text-gray-600">
            Real-time insights into the current job market
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={selectedTimeRange === range.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onTimeRangeChange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg p-5 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-1">Total Job Listings</p>
              <h3 className="text-2xl font-bold">247,350</h3>
              <p className="text-blue-100 text-sm mt-2">
                <span className="text-green-300">↑ 12.4%</span> vs. previous period
              </p>
            </div>
            <div className="bg-blue-600 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-blue-100" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg p-5 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 mb-1">Active Companies</p>
              <h3 className="text-2xl font-bold">18,475</h3>
              <p className="text-teal-100 text-sm mt-2">
                <span className="text-green-300">↑ 8.7%</span> vs. previous period
              </p>
            </div>
            <div className="bg-teal-500 p-3 rounded-full">
              <Briefcase className="w-6 h-6 text-teal-100" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-5 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 mb-1">Job Seekers</p>
              <h3 className="text-2xl font-bold">1.2M</h3>
              <p className="text-amber-100 text-sm mt-2">
                <span className="text-green-300">↑ 15.3%</span> vs. previous period
              </p>
            </div>
            <div className="bg-amber-400 p-3 rounded-full">
              <Users className="w-6 h-6 text-amber-100" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-5 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 mb-1">Active Locations</p>
              <h3 className="text-2xl font-bold">312</h3>
              <p className="text-purple-100 text-sm mt-2">
                <span className="text-purple-300">↑ 5.2%</span> vs. previous period
              </p>
            </div>
            <div className="bg-purple-500 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-purple-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;