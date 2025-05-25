import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrendingSkillsCard from '../components/dashboard/TrendingSkillsCard';
import TopJobsCard from '../components/dashboard/TopJobsCard';
import LocationInsightsCard from '../components/dashboard/LocationInsightsCard';
import IndustryTrendsCard from '../components/dashboard/IndustryTrendsCard';
import SalaryRangeCard from '../components/dashboard/SalaryRangeCard';
import { jobTrends, skillTrends, industryData, locationData } from '../data/mockData';
import { TimeRange } from '../types';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range as TimeRange);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardHeader 
            onTimeRangeChange={handleTimeRangeChange}
            selectedTimeRange={timeRange}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-1">
              <TrendingSkillsCard skills={skillTrends} />
            </div>
            <div className="lg:col-span-2">
              <TopJobsCard jobs={jobTrends} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <LocationInsightsCard locations={locationData} />
            </div>
            <div>
              <IndustryTrendsCard industries={industryData} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <SalaryRangeCard jobs={jobTrends} />
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Market Forecast</h2>
              <div className="p-4 border border-blue-100 rounded-lg bg-blue-50 mb-6">
                <p className="text-blue-800">
                  Based on current trends, we predict a <span className="font-semibold">15% increase</span> in tech roles over the next quarter, with remote positions continuing to grow at an accelerated rate.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Rising Opportunities</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>AI and Machine Learning roles expected to grow by 22%</li>
                    <li>Cybersecurity positions increased demand due to remote work</li>
                    <li>Healthcare tech seeing sustained growth post-pandemic</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Declining Sectors</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Traditional retail positions continuing to decrease</li>
                    <li>Administrative roles being automated</li>
                    <li>Entry-level finance positions consolidating</li>
                  </ul>
                </div>
              </div>
              <button className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                View detailed forecast report →
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;