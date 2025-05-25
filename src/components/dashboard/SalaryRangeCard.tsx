import React from 'react';
import { DollarSign } from 'lucide-react';
import Card from '../ui/Card';
import { JobTrend } from '../../types';

interface SalaryRangeCardProps {
  jobs: JobTrend[];
}

const SalaryRangeCard: React.FC<SalaryRangeCardProps> = ({ jobs }) => {
  // Get top 3 highest paying roles
  const topPayingJobs = [...jobs].sort((a, b) => b.averageSalary - a.averageSalary).slice(0, 3);

  // Calculate average salary
  const averageSalary = Math.round(
    jobs.reduce((sum, job) => sum + job.averageSalary, 0) / jobs.length
  );

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Salary Insights</h2>
        <DollarSign className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-1">Average Salary</div>
        <div className="text-3xl font-bold text-gray-900">${averageSalary.toLocaleString()}</div>
        <div className="text-sm text-gray-500 mt-1">Across all analyzed positions</div>
      </div>
      
      <div className="space-y-2 mb-6">
        <h3 className="text-sm font-medium text-gray-700">Top Paying Roles</h3>
        
        {topPayingJobs.map((job, idx) => (
          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <div>
              <div className="font-medium text-gray-900">{job.role}</div>
              <div className="text-sm text-gray-500">{job.industry}</div>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              ${job.averageSalary.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      
      <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        View complete salary report →
      </button>
    </Card>
  );
};

export default SalaryRangeCard;