import React from 'react';
import { TrendingUp, LineChart } from 'lucide-react';
import Card from '../ui/Card';
import { IndustryData } from '../../types';

interface IndustryTrendsCardProps {
  industries: IndustryData[];
}

const IndustryTrendsCard: React.FC<IndustryTrendsCardProps> = ({ industries }) => {
  // Sort industries by growth rate
  const sortedIndustries = [...industries].sort((a, b) => b.growthRate - a.growthRate);

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Industry Trends</h2>
        <LineChart className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="space-y-4">
        {sortedIndustries.map((industry, idx) => {
          // Calculate percentage width for the progress bar
          const progressWidth = `${Math.min(Math.max(industry.growthRate * 3, 10), 100)}%`;
          
          return (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                <span className="text-sm font-medium text-gray-900">+{industry.growthRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                  style={{ width: progressWidth }}
                ></div>
              </div>
              <div className="mt-1 text-xs text-gray-500 flex justify-between">
                <span>{industry.jobCount.toLocaleString()} jobs</span>
                <span>${industry.averageSalary.toLocaleString()} avg</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        Explore industry analysis →
      </button>
    </Card>
  );
};

export default IndustryTrendsCard;