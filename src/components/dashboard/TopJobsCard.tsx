import React from 'react';
import { Briefcase } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { JobTrend } from '../../types';

interface TopJobsCardProps {
  jobs: JobTrend[];
}

const TopJobsCard: React.FC<TopJobsCardProps> = ({ jobs }) => {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Top In-Demand Jobs</h2>
        <Briefcase className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="space-y-6">
        {jobs.slice(0, 5).map((job) => (
          <div key={job.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-gray-900">{job.role}</h3>
              <Badge variant={job.demand > 85 ? 'success' : 'primary'}>
                {job.demand}% demand
              </Badge>
            </div>
            
            <div className="flex justify-between mb-2 text-sm">
              <div className="text-gray-600">{job.industry}</div>
              <div className="text-gray-900 font-medium">${job.averageSalary.toLocaleString()}</div>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {job.requiredSkills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="neutral" className="mr-1">
                  {skill}
                </Badge>
              ))}
              {job.requiredSkills.length > 3 && (
                <Badge variant="neutral">+{job.requiredSkills.length - 3}</Badge>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        View all jobs →
      </button>
    </Card>
  );
};

export default TopJobsCard;