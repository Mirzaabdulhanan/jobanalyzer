import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { jobTrends } from '../data/mockData';
import { LineChart, TrendingUp, Building2, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const JobMarket: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Market Overview</h1>
            <p className="text-gray-600">
              Comprehensive analysis of current job market trends and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Market Growth</h2>
                <LineChart className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">+15.3%</div>
              <p className="text-gray-600 text-sm">Year-over-year job market growth</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Active Companies</h2>
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">18,475</div>
              <p className="text-gray-600 text-sm">Companies actively hiring</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Job Seekers</h2>
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1.2M</div>
              <p className="text-gray-600 text-sm">Active job seekers this month</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Trending Industries</h2>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                {['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education'].map((industry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{industry}</span>
                    <Badge variant="success">+{Math.floor(Math.random() * 20 + 5)}%</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Latest Job Trends</h2>
                <LineChart className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                {jobTrends.slice(0, 5).map((job, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{job.role}</h3>
                      <p className="text-sm text-gray-500">{job.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">${job.averageSalary.toLocaleString()}</div>
                      <Badge variant="primary">+{job.growthRate}%</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
              <p className="text-gray-600 mt-2">Key observations and predictions for the current job market</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Growing Trends</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Remote work opportunities increased by 45%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Tech sector hiring up 28% year-over-year
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Healthcare tech roles showing strong growth
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Market Challenges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Traditional retail positions declining
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Entry-level positions becoming automated
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Increased competition for senior roles
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobMarket;