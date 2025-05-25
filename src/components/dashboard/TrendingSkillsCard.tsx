import React from 'react';
import { TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { SkillTrend } from '../../types';

interface TrendingSkillsCardProps {
  skills: SkillTrend[];
}

const TrendingSkillsCard: React.FC<TrendingSkillsCardProps> = ({ skills }) => {
  const getGrowthColor = (growth: number) => {
    if (growth > 20) return 'text-green-600';
    if (growth > 10) return 'text-green-500';
    if (growth > 5) return 'text-amber-500';
    return 'text-gray-500';
  };

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Trending Skills</h2>
        <TrendingUp className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <Badge 
                  variant="primary" 
                  className="ml-2"
                >
                  {skill.demandScore}% demand
                </Badge>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {skill.industries.slice(0, 2).map((industry, index) => (
                  <span key={index} className="text-xs text-gray-500">
                    {industry}{index < Math.min(skill.industries.length, 2) - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
            <div className={`flex items-center ${getGrowthColor(skill.growthRate)}`}>
              <span className="text-sm font-medium">+{skill.growthRate}%</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        View all skills →
      </button>
    </Card>
  );
};

export default TrendingSkillsCard;